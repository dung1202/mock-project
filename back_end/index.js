const express = require("express");
const app = express();
const PORT = 8789;
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const middleware = require("./helper/authenMiddleware");

const PostRouter = require("./postController");
const UserRouter = require("./userController");

const FileRouter = require("./fileController");

const AccRouter = require("./accController");

var mongoDB = "mongodb://localhost:27017/mock";

mongoose.connect(mongoDB, function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

// Force mongoose to use global promise
mongoose.Promise = global.Promise;

var db = mongoose.connection;

app.use("/post", middleware.authenticateJWT, PostRouter);
app.use("/user", middleware.authenticateJWT, UserRouter);
app.use("/file", middleware.authenticateJWT, FileRouter);

app.use("/", AccRouter);

db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.listen(PORT, () => {
    console.log("Server started on http://localhost:" + PORT);
});
module.exports = app;
