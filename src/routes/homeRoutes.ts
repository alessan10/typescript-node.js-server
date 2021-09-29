import express from 'express';

export const homeRouter = express.Router();

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

homeRouter.get('/gethome',(req,res)=>{
    const risultato = add({a: 1, b: 2});
    res.send(`Homepage, result: ${risultato}`);
})