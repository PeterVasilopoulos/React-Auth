// 1. import all dependencies  
const express = require("express");
const app = express();
require('dotenv').config();

require("./configs/mongoose.config")
// 2. configure express


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// 3. routes & controller logic (CRUD)
const Router = require("./routes/destination.routes");
Router(app);


// 4. listen to the port
app.listen(8000, ()=>console.log(`Listening to the port: 8000`));