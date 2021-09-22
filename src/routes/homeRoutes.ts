import express from 'express';

export const homeRouter = express.Router();

homeRouter.get('/gethome',(req,res)=>{
    res.send("Homepage");
})