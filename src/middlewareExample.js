const {Router} = require("express");
const exampleRouter = Router();

const endFunc = async (req, res ) => {
    req.data.messageEnd = "endFunc";
    res.status(201).json({message: "success", data: req.data});
};

//NOTE: Be sure to have the function above the export method otherwise it will NOT work
const funcOne = async (req, res, next) => {
    // console.log("funcOne function!!!");
    const passwordCheck = "password";

    if(req.body.password !== passwordCheck) {
        return res.status(404).json({message: "incorrect password, get the real owner"});
    }
    req.data = {
        messageOne: "Password verified",
        // messageOne: "funcOne is visible in data",
    };
    //Using the next(); function will go the next function in the chain i.e, endFunc after funcOne has been completed
    next();
};

const funcTwo = async (req, res, next) => {
    req.body.username = req.body.username.toLowerCase();
    //Leave space inbetween/a line for the code to work
    req.data.messageTwo = `funcTwo: username set to ${req.body.username}`;
    next();
};

//NOTE: Be sure to have this type of export method below the function for it to work correctly
exampleRouter.post("/example", funcOne, funcTwo, endFunc);

module.exports = exampleRouter;