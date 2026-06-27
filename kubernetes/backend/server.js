import express from 'express'
import morgan from 'morgan'

const app = express()

app.get('/',(req,res)=>{
    let sum = 0;
    for(let i=0; i<10000000; i++){
        sum += i
    }
    res.json(`Hello the sum is ${sum}`);
})

app.listen(3000,()=>{
    console.log(`server is listening at port 3000`);
})