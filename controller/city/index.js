/**
 * Copyright © 2023, School CRM Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of School CRM Inc., and is licensed as
 * restricted rights software. The use, reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with School CRM.
 */

const CityModel = require("../../model/city");
const Utility = require("../../utility");

const cityController = {
  /** Creating city in the database
   */
  createCity: (req, res) => {
    const payload = req.body;
    return new Promise((resolve, reject) => {
      CityModel.create({ ...payload, created_by: req.body.userId })
        .then(city => {
          resolve(res.status(200).send(Utility.formatResponse(200, { city })));
        })
        .catch(err => {
          resolve(res.status(409).send(Utility.formatResponse(409, `${err.errors[0].message}`)));
        });
    });
  },
  /** Get cities from database
   */
  getCities: (req, res) => {
    return new Promise((resolve, reject) => {
      CityModel.findAll({ where: { state_id: req.params.id } })
        .then(list => {
          list.length > 0 ?
            resolve(res.status(200).send(Utility.formatResponse(200, { list })))
            :
            resolve(res.status(404).send(Utility.formatResponse(404, `No Data Found`)));
        })
        .catch(err => {
          reject(res.status(500).send(Utility.formatResponse(500, err)));
        });
    });
  },
  /** Updating city in database
   */
  updateCity: (req, res) => {
    return new Promise((resolve, reject) => {
      CityModel.update(
        { ...req.body, updated_by: req.body.userId },
        { where: { id: req.params.id } })
        .then(updatedData => {
          resolve(res.status(200).send(Utility.formatResponse(200, `Updated Successfully`)));
        })
        .catch(err => {
          reject(res.status(500).send(Utility.formatResponse(500, err)));
        });
    });
  },

  /** Get all the cities from database for school crm
   */
  getAll: (req, res) => {
    return new Promise((resolve, reject) => {
      CityModel.findAndCountAll()
        .then(list => {
          const { count, rows } = list;
          count > 0 ?
            resolve(res.status(200).send(Utility.formatResponse(200, { count, rows })))
            :
            resolve(res.status(404).send(Utility.formatResponse(404, `No Data Found`)));
        })
        .catch(err => {
          reject(res.status(500).send(Utility.formatResponse(500, err)));
        });
    });
  }
};

module.exports = cityController;
