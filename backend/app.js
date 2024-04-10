const path = require("path");
const express = require("express");

const expressHandlebars = require("express-handlebars");
const rateLimit = require("express-rate-limit");

const cookieParser = require("cookie-parser");
const cors = require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const router = require("./routes");

// Solve self signed certificate error
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Start express app
const app = express();

app.set("trust proxy", true);

// 1) GLOBAL MIDDLEWARES
// Implement CORS
const corsOptions = {
    origin: [config.BANK_URL],
    credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));



// Limit requests from same API
const limiter = rateLimit({
    max: 100,
    windowMS: 60 * 60 * 1000,
    message: "Too many requests from this IP, please try again in hour!",
});
app.use("/api", limiter);

// Serving static files
app.use(express.static(path.join(__dirname, "../public")));


// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// Parse cookie
// app.use(
//     session({
//         name: "session",
//         secret,
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//             // maxAge: config.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
//             // sameSite: 'none',
//             secure: true,
//             httpOnly: true,
//         },
//     })
// );

// // Set up passport
// require("./utils/passport")(app);

// // Data sanitization against XSS
// app.use(xss());

// // Prevent parameter pollution
// app.use(hpp());

// Redirect url that has only 1 '&' but doesn't have '?'
app.use((req, res, next) => {
    let url = req.originalUrl;
    const regex = /&/g;
    const numberOfAnd = (url.match(regex) || []).length;
    if (numberOfAnd === 1 && !url.includes("?")) {
        url = url.replace("&", "?");
        return res.redirect(url);
    }
    next();
});

// 2) ROUTES
app.get("/", (req, res, next) => {
    res.redirect("/mainPage");
});

app.use(router);

app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
