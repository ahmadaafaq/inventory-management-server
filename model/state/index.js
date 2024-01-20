/**
 * Copyright © 2023, School CRM Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of School CRM Inc., and is licensed as
 * restricted rights software. The use,reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with School CRM.
 */

const Sequelize = require("sequelize");

const sequelize = require("../../sequelize");

const StateModel = sequelize.define(
  "state",    //table name
  {
    name: {
      type: Sequelize.STRING
    },
    country_id: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = StateModel;
