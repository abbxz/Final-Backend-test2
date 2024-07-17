const express=require('express')
const app=express();
const mongoose=require('mongoose');
const routerurl=require('./routes/routes')
const cors=require('cors')
app.use(express.json());
app.use(cors())
app.use('/app',routerurl)

// if (mongoose.connect('mongodb+srv://abbas-035:auth350code@cluster0.9h7mr5l.mongodb.net/Final-DB?retryWrites=true&w=majority&appName=Cluster0'))
//     {
//         console.log('Database is connected')
//     }
mongoose.connect('mongodb+srv://abbas-035:auth350code@cluster0.9h7mr5l.mongodb.net/Final-DB?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Database is connected');
    })
    .catch((error) => {
        console.error('Error connecting to database:', error);
    });

app.listen(4005,()=>{
    console.log('server is up and run')
})