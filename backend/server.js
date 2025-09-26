import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import complaintRoute from './routes/complaintRoute.js'
import adminRoute from './routes/adminRoute.js'

//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()

//middlewares
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}))

app.use('/api/complaints', complaintRoute); 
app.use("/api/admin", adminRoute);

app.use('/api/complaints', complaintRoute);

//api endpoint
app.get('/', (req, res)=>{
    res.send('API WORKING')
})

app.listen(port, ()=>console.log("Server Started", port))
