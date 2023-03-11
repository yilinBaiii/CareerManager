import { StatusCodes } from 'http-status-codes'

const errorHandlerMiddleware = (err, req, res, next) => {
    let errorInfo = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong, try again later",
    }

    if (err.name === 'ValidationError') {
        const errorMsg = Object.values(err.errors)
            .map((val) => val.message)
            .join(', ')
        errorInfo = {
            ...StatusCodes,
            statusCode: StatusCodes.BAD_REQUEST,
            msg: errorMsg
        }
    }

    // handle duplicate key error
    if (err.code === 11000) {
        const errorMsg = `${Object.keys(err.keyValue)} has already been used, please use another value`;
        errorInfo = {
            ...StatusCodes,
            statusCode: StatusCodes.BAD_REQUEST,
            msg: errorMsg
        }
    }
    
    // general error
    res.status(errorInfo.statusCode).json({ msg: errorInfo.msg })
}

export default errorHandlerMiddleware