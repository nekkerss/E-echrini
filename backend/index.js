const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose");
const router = require('./routes')


const app = express()
const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000'] // Whitelist the domains you want to allow
};
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8080 || process.env.PORT
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/shopBase")
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

  app.listen(PORT, () => console.log("server is running at port : " + PORT));

