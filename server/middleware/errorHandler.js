
const errorHandler = (error, message) => {
    res.status(501).json(error);
};

module.exports = errorHandler;