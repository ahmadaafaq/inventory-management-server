/**
 * Copyright © 2024, CodeVamp Technologies  Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of CodeVamp Technologies  Inc., and is licensed as
 * restricted rights software. The use,reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with CodeVamp Technologies .
 */

const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'local',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 8082,
    DB: process.env.DB || 'inventory-management',
    DB_PORT: process.env.DB_PORT || 3306,
    DB_USERNAME: process.env.DB_USERNAME || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    SECRET: process.env.SECRET || 'InVeNtOrY@#$20MaNaGemeNT',
    SALT: process.env.SALT || 16,
    // ALGORITHM: process.env.ALGORITHM || 'aes-256-cbc',
    // STRINGSALT: process.env.STRINGSALT || 'sixteen'
};
