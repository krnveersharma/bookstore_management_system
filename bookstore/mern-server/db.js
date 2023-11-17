const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
mongoose.connection.on('connected',()=>{
    console.log('connected to MongoDB')
})
mongoose.connection.on('error',(err)=>{
    console.error('Connection error :',err)
})
module.exports=mongoose