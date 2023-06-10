const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session")
const cors = require('cors');
const app = express();
app.use(express.static('public'));



dotenv.config({path:'./config.env'});
const port = Number(process.env.PORT) || 5000;
require('./database/mongoconnection');


app.use(cookieParser());
app.use(express.json());
app.use(
    cookieSession({
      secret: 'yourSecret',
      secure: process.env.NODE_ENV === 'development' ? false : true,
      httpOnly: process.env.NODE_ENV === 'development' ? false : true,
      sameSite: process.env.NODE_ENV === 'development' ? false : 'none',
    }),
  );
  
  app.enable('trust proxy');
  
  app.use(
    cors({
      credentials: true,
      origin: 'https://boisterous-kashata-cb9789.netlify.app',
    }),
  );
app.use(require('./routing/authentication'));
app.get('/blogs',(req,res)=>{
    res.send("hello from blogs")
});
app.listen(port,()=>{
    console.log(`Hello world from ${port} port`)
})