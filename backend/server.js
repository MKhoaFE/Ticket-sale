const fs = require('fs');
const https = require('https');
const path = require('path');

const config = require('./config/config');

const port = config.PORT || 3001;

// process.on('uncaughtException', (err) => {
//     console.log('UNCAUGHT EXCEPTION! Shutting down...');
//     console.log(err.name, err.message);
//     process.exit(1);
// });

const app = require('./app');

const server = https.createServer(app);

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
