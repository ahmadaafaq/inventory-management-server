/**
 * Copyright © 2024, CodeVamp Technologies  Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of CodeVamp Technologies  Inc., and is licensed as
 * restricted rights software. The use,reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with CodeVamp Technologies .
 */

const {Sequelize, DataTypes} = require("sequelize");

const sequelize = require("../../sequelize");

const OrderDetailModel = sequelize.define(
    'order_detail',     //table name
    {
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        expected_date: {
            type:  'TIMESTAMP'
        },
        actual_date: {
            type: Sequelize.DATE
        },
        status:{
            type:Sequelize.ENUM,
            values:['active','inactive']
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
        },
        created_by:{
            type:Sequelize.INTEGER
        } ,
        updated_by:{
            type:Sequelize.INTEGER
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = OrderDetailModel;
