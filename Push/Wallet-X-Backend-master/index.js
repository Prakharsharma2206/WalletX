const mongoose = require('mongoose');
const express = require('express')
var cors = require('cors')
const port= 5000
const app = express()
app.use(express.json())

app.use(cors())

app.use(express.urlencoded({extended:true})) // middleware jisse body dikhe
app.use('/api/auth',require('./routes/auth'))
app.use('/api/transaction',require('./routes/transaction'))
main().catch(err => console.log(err));

async function main() {
    mongoose.set("strictQuery", false);
    await mongoose.connect('mongodb+srv://apurbaKoley:8oqrAjOaOPdbumcG@cluster0.1ykbjea.mongodb.net/WalletX');

    console.log("we are connected")
}
app.get("/",(req,res)=> {
    res.send("Backend working lol")
})
app.listen(port,()=> {
    console.log(`Server running succesfully at http://localhost:${port}/`)
})