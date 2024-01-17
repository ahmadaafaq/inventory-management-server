/**
 * Copyright © 2024, CodeVamp Technologies  Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of CodeVamp Technologies  Inc., and is licensed as
 * restricted rights software. The use,reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with CodeVamp Technologies .
 */

const Sequelize = require("sequelize");

const config = require("../config");
const sequelize = require("../sequelize");

const salt = config.SALT;
const secret = config.SECRET;

const Utility = {
    /**
     * Formatting the response with status code
     * @param {Integer} statusCode
     * @param {Object/String} res
     * @return {Object} formatted api response
     */
    formatResponse: (statusCode, res) => {
        let status = '';
        switch (statusCode) {
            case 200:
            case 202:
            case 204:
                status = `Success`;
                break;
            case 400:
            case 401:
            case 403:
            case 404:
            case 408:
            case 409:
            case 429:
            case 500:
            case 502:
            case 503:
            case 505:
                status = "Error";
                break;
            default:
                status = "Success";
                break;
        };
        return status === 'Success' ? {
            status,
            data: res
        } : {
            status,
            msg: res
        };
    },

    /**
     * Get API limit and offset
     * @param {Integer} page
     * @param {Integer} size
     * @return {Object} object containing limit and offset
     */
    getPagination: (page = 0, size = 5) => {
        let limit = size;
        let offset = page * size;
        return { limit, offset };
    },

    /**
     * Format sql query by adding type attribute
     * @param {String} query
     * @return {Promise<any[]>} a promise that resolves to the result of the SELECT query
     * @throws {Error} throws an error if there's an issue with the database query
     */
    executeQuery: (queryString) => {
        try {
            return sequelize.query(queryString, { type: Sequelize.QueryTypes.SELECT });
        } catch (err) {
            console.error('Database query error:', err);
            throw err;
        }
    }
};

module.exports = Utility;
