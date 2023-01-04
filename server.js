const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet=require('helmet');
const dotenv = require("dotenv");
const cors=require('cors');
dotenv.config();
const app = express();
const connectdb = require("./db/connect");
const database = mongoose.connection;
const routeApi=require('./routes/apiRoutes');
connectdb(process.env.MONGO_URL);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors())
app.use('/api/v1/',routeApi)
const start = () => {
    //database connection check
    database.on("error", (error) => {
        console.log(error);
    });
    database.once("connected", () => {
        console.log("Database is connected");
    });
     //connected to port
    const Port = process.env.PORT;
    app.listen(Port, () => {
        try {
            console.log(`Server is litening on port: ${Port}`);
        } catch (error) {
            console.log(error);
        }
    });
};
start();
