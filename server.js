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
const Routes = require("./routes");
const sequelize = require("./sequelize");


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', Routes);

app.listen(8081, () => {
    console.log(`Server running on port ${port}`);
});
