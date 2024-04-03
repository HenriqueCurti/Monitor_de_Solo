import express from 'express';
require('dotenv').config();
import router from './router';
import appDataSource from './database/appDataSource'
import 'reflect-metadata';
import cookie from 'cookie-parser';
import cors from 'cors'

const Port = Number(process.env.PORT) || 5000;

const app = express();

app.use(cors())

app.use(express.json());
app.use(cookie());

appDataSource.initialize().then( () => {
    app.listen(Port, () => {
        console.log(`Server started on ${process.env.HOST}:${process.env.PORT}`)
    })
}).catch((err : Error) => {
    console.log(`Data base error - ${err}`);
})

app.use(router);