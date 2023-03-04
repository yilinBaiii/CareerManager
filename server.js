import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    throw new Error('err')
    res.send("Welcome")

})


//middleware

import notFoundMiddleware from './middleware/not-found.js';
app.use(notFoundMiddleware)

import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(errorHandlerMiddleware)

const port = (process.env.PORT || 5000);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => 
            console.log(`Server is listening on port ${port} ...`)
        )
    } catch (error) {
        console.log(error)
    }
}
start();