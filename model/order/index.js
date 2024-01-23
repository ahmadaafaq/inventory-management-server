/**
 * Copyright © 2024, CodeVamp Technologies  Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of CodeVamp Technologies  Inc., and is licensed as
 * restricted rights software. The use,reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with CodeVamp Technologies .
 */

const {Sequelize , DataTypes} = require("sequelize");

const sequelize = require("../../sequelize");

const OrderModel = sequelize.define(
    'order',     //table name
    {
        warehouse_id: {
            type: Sequelize.INTEGER
        },
        vendor_id: {
            type: Sequelize.INTEGER
        },
        product_id:{
            type: Sequelize.INTEGER
        },
        quantity:{
            type: Sequelize.INTEGER
        },
        order_code:{
            type: Sequelize.STRING
        },
        order_date:{
            type: "TIMESTAMP"
        },
        delivery_date:{
            type: Sequelize.DATE
        },
        status:{
            type:Sequelize.ENUM,
            values:['active','inactive']
        },
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = OrderModel;
