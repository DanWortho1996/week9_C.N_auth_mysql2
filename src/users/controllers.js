const User = require("./model");

//Post Method on ThunderClient
const addUser = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(201).json({message: "success", user: user});
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};

//Post Method on ThunderClient
const login = async (req, res) => {
    try {
        res.status(201).json({message: "success", user: req.user});
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};

//Get Method on ThunderClient
const allUsers = async (req, res) => {
    const user = await User.findAll({});
    try {
        res.status(200).json({message: "success, here is a list of all the users", users: user});
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};

//extra work done by myself for a challenge
//Get Method on ThunderClient
const oneUser = async (req, res) => {
    const user = await User.findOne({where: {username: req.params.name}});
    try {
        res.status(200).json({message: "success, you have found this user", finduser: user});
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};

//extra work but worth it to figure out how to print out user deletion.
//Delete Method on ThunderClient
const userDel = async (req, res) => {
    const user = await User.destroy({where: {username: req.body.username}});
    try {
        res.status(200).json({message: `success, you deleted ${req.body.username}`, users: user});
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};



module.exports = {
    addUser: addUser,
    login: login,
    allUsers: allUsers,
    oneUser: oneUser,
    userDel: userDel,
};