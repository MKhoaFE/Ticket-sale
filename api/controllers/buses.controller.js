import Buses from "./models/Buses.js";

// Lấy danh sách tất cả các tuyến xe 
export const getAllBuses = async (req, res) => {
    try {
        const buses = await Buses.find();
        res.status(200).json(buses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy thông tin một tuyến xe theo ID
export const getBusById = async (req, res) => {
    try {
        const bus = await Buses.findById(req.params.id);
        res.status(200).json(bus);
    } catch (error) {
        res.status(404).json({ message: "Bus not found" });
    }
};

// Thêm một xe buýt mới
export const createBus = async (req, res) => {
    const newBus = new Buses(req.body);
    try {
        const savedBus = await newBus.save();
        res.status(201).json(savedBus);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Cập nhật thông tin chuyến xe 
export const updateBus = async (req, res) => {
    try {
        const updatedBus = await Buses.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedBus);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa một tuyến xe 
export const deleteBus = async (req, res) => {
    try {
        await Buses.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Bus deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
