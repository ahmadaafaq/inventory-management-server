/**
 * Copyright © 2024, CodeVamp Technologies  Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of CodeVamp Technologies  Inc., and is licensed as
 * restricted rights software. The use,reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with CodeVamp Technologies .
 */

const Sequelize = require("sequelize");

const sequelize = require("../../sequelize");

const WarehouseModel = sequelize.define(
    'warehouse',     //table name
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        position: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = WarehouseModel;
