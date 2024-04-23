const express = require("express");
require("dotenv").config(); //need to put this before ur database as u need to read dotenv first
require("./config/database");

const moviesRouter = require("./routes/movies")

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());

app.use("/api/movies", moviesRouter)


app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});
//This console.log will shown first as the mongodb log takes longer time, 
//so it will run asychronous first