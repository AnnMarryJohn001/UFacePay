const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://AnnMarryJohn:ann1234@cluster0.cvp11.mongodb.net/UFACE")

app.use("/",require("./routes/userRoute"));

app.listen(3001,function(){
    console.log("express running on port 3001");
})
