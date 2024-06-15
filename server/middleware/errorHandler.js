
const errorHandler = (error, next) => {
    res.status(501).json(error);
};

module.exports = errorHandler;