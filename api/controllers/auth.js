import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {
        // Check if the username already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send('Email already taken');
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        console.log('User created');
        res.status(200).send('User has been created.');
    } catch (error) {
        console.log('User creation error ', error);
        next(error);
    }
};


export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return next(createError(404, "User Not Found!"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) return next(createError(404, "Wrong password or email!"));

        let isAdmin = user.isAdmin;

        // Hardcoded admin account check
        if (user.email === 'admin' && req.body.password === 'admin') {
            isAdmin = true;
        }

        const token = jwt.sign({ id: user._id, isAdmin: isAdmin }, "sfdg464GSg+gqdED68ifgdjs6yzfSDentf3d");

        const { password, ...otherDetails } = user._doc;
        
        res.cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json({ details: { ...otherDetails }, isAdmin });
    } catch (error) {
        next(error);
    }
}