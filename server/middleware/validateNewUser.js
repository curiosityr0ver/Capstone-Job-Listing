
const validateNewUser = (req, res, next) => {
    const { name, email, mobile, password } = req.body;
    if (!name || !email || !password || !mobile) {
        return res.status(400).json({
            message: 'Please provide all required fields',
        });
    }
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: 'Please provide a valid email address',
        });
    }
    next();
};

module.exports = validateNewUser;