require("dotenv").config();

const mongoose = require("mongoose");
const path = require('path')
const express = require("express");
const app = express();
const cors = require("cors");
const morgan=require('morgan')

//My routes
const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");

//DB Connection
mongoose
  .connect(process.env.MONGODB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Middlewares
app.use(express.static('./dist/frontend'))
app.use(express.json());
app.use(cors());
app.use(morgan());

//My Routes
app.use("/api", userRoutes);
app.use("/api", bookRoutes);

app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/frontend/index.html'))
})


//PORT
const port = process.env.PORT || 3000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});