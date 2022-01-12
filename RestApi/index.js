const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv"); 
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/Auth");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true  },
     ()=> {
    console.log("Connect to MongoDB");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("comman"));

app.use("/api/Auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8800,() => {
    console.log("BACCKEND SERVER IS RUNNING");
}); 