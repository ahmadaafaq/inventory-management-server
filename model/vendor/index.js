const Sequelize = require("sequelize");

const sequelize = require("../../sequelize");

const VendorModel = sequelize.define(
    'vendor',     //table name
    {
        id: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.ENUM,
            values: ['active', 'inactive']
        },
        created_at: {
            type: 'TIMESTAMP'
        },
        updated_at: {
            type: 'TIMESTAMP'
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

module.exports = VendorModel;