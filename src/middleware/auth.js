const bcrypt = require("bcrypt");
const salt = parseInt(process.env.SALT);

const hashPass = async (req, res, next) => {
    try {
        //Step 1: Hash the password
        //NOTE: Number at the end = SALT i.e, it is an encrypted bar password which changes every time for security measures
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        //Step 2: Replace password on req.body with hashed password
        req.body.password = hashedPass;
        //Step 3: use next();
        next();
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};

const comparePass = async (req, res, next) => {
    try {
        //Step 1: find user the username (req.body.username?)
        //Step 2: compare the plaintext password with the hashed password on the DB
        //Step 3: if false, send response "passwords do not match" - just if
        //Step 4: if true, attach user to body
        //Step 5: next function i.e, next(); 
        next();
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};

module.exports = {
    hashPass: hashPass,
    comparePass: comparePass,
};