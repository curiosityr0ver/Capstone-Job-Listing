
const errorHandler = (error, message) => {
    console.log("Inside error handler", error, message);
    res.status(501).json(error);
};

module.exports = errorHandler;