/**
 * Copyright © 2024, CodeVamp Technologies  Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of CodeVamp Technologies  Inc., and is licensed as
 * restricted rights software. The use,reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with CodeVamp Technologies .
 */

const Sequelize = require("sequelize");

const sequelize = require("../../sequelize");

const InventoryModel = sequelize.define(
    'inventory',     //table name
    {
        available_quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        min_stock_level: {
            type: Sequelize.INTEGER
        },
        max_stock_level: {
            type: Sequelize.INTEGER
        },
        reorder_point: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = InventoryModel;
