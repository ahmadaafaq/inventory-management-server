/**
 * Copyright © 2023, School CRM Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of School CRM Inc., and is licensed as
 * restricted rights software. The use,reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with School CRM.
 */

const Sequelize = require("sequelize");

const sequelize = require("../../sequelize");

const InventoryModel = sequelize.define(
    'inventory',     //table name
    {
        available_quantity: {
            type: Sequelize.STRING,
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
        },
        created_by: {
            type: Sequelize.INTEGER
        },
        updated_by: {
            type: Sequelize.INTEGER
        },
        created_at: {
            type: 'TIMESTAMP'
        },
        updated_at: {
            type: 'TIMESTAMP'
        },
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = InventoryModel;
