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
interface Params{
    a: number
    b: number
}

type Add = (x: Params) => number;

const add: Add = x => {
    // if (b){
    //     return a+b;
    // } else {
    //     return a;
    // }
    return x.a + x.b!;
}

console.log("res: ",add({a: 1, b: 2}));

app.listen(3001, ()=> {
    console.log("started")
})

export default app;
 