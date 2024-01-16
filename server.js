/**
 * Copyright © 2023, School CRM Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of School CRM Inc., and is licensed as
 * restricted rights software. The use, reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with School CRM.
 */
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express');

const config = require("./config");
let { connectToMysql } = require("./db");
const rateLimiter = require("./utility/rateLimiter");
const routes = require("./v1/routes");

const app = express();

const corsOptions = {
    // origin: ['http://localhost:5173', 'http://localhost:5174'],       //this will allow multiple domains to connect
    credentials: true,                                                //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true, parameterLimit: 50000 }));
app.use(cors(corsOptions));
app.use(rateLimiter);

app.use('/api/v1', routes);

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});
