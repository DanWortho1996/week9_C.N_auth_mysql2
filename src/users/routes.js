const {Router} = require("express");
const userRouter = Router();

const {addUser} = require("./controllers");

userRouter.post("/users/signup", addUser);

module.exports = userRouter;