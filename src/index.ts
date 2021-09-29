import express from "express";
import { homeRouter } from "./routes/homeRoutes";
import {DynamoDB, S3} from "aws-sdk"

//EXPRESS INIT 
const app = express();
const dynamoDB = new DynamoDB.DocumentClient();
const s3 = new S3();

app.use(express.json())

//API ROUTING SETUP
app.use('/home', homeRouter);

app.use('/status', (_, res)=>{
    res.status(200).send({
        staus: 'WORKING',
    });
});

app.listen(3001, ()=> {
    console.log("server listening on port 3001")
})

export default app;
 