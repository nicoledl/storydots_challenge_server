const express = require('express')
const cors = require("cors");
const app = express()
const router = require('./routes/index')
const sequelize = require('./db/connection');
const corsOptions = require('./config/cors');
const port = process.env.PORT || 3000
require("./db/asociations");
require('dotenv').config();

app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
    req.sequelize = sequelize;
    next();
});
  
app.use('/', router)

app.listen(port, ()=>
    {
        console.log(`App listen in port ${port}`)
    }
)