import express from 'express'
import morgan from 'morgan'

const app = express()

const PORT = 3000

app.use(morgan('dev'))


app.get('/',(req,res)=>{
    return res.status(200).json({
        message:"health check",
    })
})

app.get("/api/users",(req,res)=>{
    res.json({
        message:"This is Emliy"
    })
})


app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`);
})