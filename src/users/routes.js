const {Router} = require("express");
const userRouter = Router();

const {addUser, login, allUsers, oneUser, userDel} = require("./controllers");
const {hashPass, comparePass} = require("../middleware/auth");

//user signup
userRouter.post("/users/signup", hashPass, addUser);

//user login
userRouter.post("/users/login", comparePass, login);

//find all users
userRouter.get("/users/allusers", allUsers);

//find one user
userRouter.get("/users/oneuser/:name", oneUser);

////delete a user
userRouter.delete("/users/deleteuser/", userDel);

module.exports = userRouter;