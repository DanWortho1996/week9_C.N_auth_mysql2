require("dotenv").config();
const express = require("express");
const cors = require("cors");

//const exampleRouter = require("./middlewareExample");
const User = require("./users/model");

const userRouter = require("./users/routes");

const port = process.env.PORT || 5003;

const app = express();

//Using this allows us to access and use json data
app.use(express.json());

app.use(cors());

app.use(userRouter);

const syncTables = () => {
    User.sync();
}

// app.use(exampleRouter);

app.use("/health", (req, res) => {
    res.status(200).json({message: "API is healthy"});
});

app.listen(port, () => {
    syncTables();
    console.log(`Server is listening on ${port}`);
});