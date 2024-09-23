require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5003;

const app = express();

//Using this allows us to access and use json data
app.use(express.json());

app.use("/health", (req, res) => {
    res.status(200).json({message: "API is healthy"});
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});