const fs = require("fs");
const https = require("https");
const path = require("path");

const config = require("./config/config");

const port = config.PORT || 3001;
const mongoose = require("mongoose");
// process.on('uncaughtException', (err) => {
//     console.log('UNCAUGHT EXCEPTION! Shutting down...');
//     console.log(err.name, err.message);
//     process.exit(1);
// });

const app = require("./app");

const server = https.createServer(app);
// try {
//     await mongoose.connect(config.MONGODB_URL);
//     console.log("Database connected...");
// } catch (e) {
//     console.log("Error connected database");
//     console.log(e);
//     process.exit(-1);
// }
mongoose.connect(config.MONGODB_URL, {dbName: config.MONGODB_NAME}).catch((e) => {
    console.log("Error connected database");
    console.log(e);
    process.exit(-1);
});

server.listen(port, async () => {
    console.log(`App is running on port ${port}...`);
});

// process.on('unhandledRejection', (err) => {
//     console.log('UNHANDLER REJECTION! Shutting down...');
//     console.log(err.name, err.message);
//     server.close(() => {
//         process.exit(1);
//     });
// });

// process.on('SIGTERM', () => {
//     console.log('SIGTERM RECEIVED. Shutting down gracefully!');
//     server.close(() => {
//         console.log('Process terminated!');
//     });
// });
