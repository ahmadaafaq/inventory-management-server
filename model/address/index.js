/**
 * Copyright © 2023, School CRM Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of School CRM Inc., and is licensed as
 * restricted rights software. The use,reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with School CRM.
 */

const {Sequelize , DataTypes} = require("sequelize");

const sequelize = require("../../sequelize");

const AddressModel = sequelize.define(
    'address',        //table name
    {
        parent: {
            type: Sequelize.ENUM,
            values: ['user', 'warehouse', 'vendor','product','inventory']
        },
        parent_id: {
            type: Sequelize.INTEGER
        },
        street: {
            type: Sequelize.STRING
        },
        landmark: {
            type: Sequelize.STRING
        },
        zipcode: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.INTEGER
        },
        state: {
            type: Sequelize.INTEGER
        },
        country: {
            type: Sequelize.INTEGER
        },
        created_at: {
            type: "TIMESTAMP"
        },
        updated_at: {
            type:  "TIMESTAMP"
           
        },
        created_by: {
            type: Sequelize.INTEGER
        },
        updated_by: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = AddressModel;
