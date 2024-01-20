/**
 * Copyright © 2023, School CRM Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of School CRM Inc., and is licensed as
 * restricted rights software. The use, reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with School CRM.
 */

const CountryModel = require("../../model/country");
const Utility = require("../../utility");

const countryController = {
  /** Creating country in the database
    */
  createCountry: (req, res) => {
    const payload = req.body;
    return new Promise((resolve, reject) => {
      CountryModel.create({ ...payload, created_by: req.body.userId })
        .then(country => {
          resolve(res.status(200).send(Utility.formatResponse(200, { country })));
        })
        .catch(err => {
          resolve(res.status(409).send(Utility.formatResponse(409, `${err.errors[0].message}`)));
        });
    });
  },
  /** Get countries from database
   */
  getCountries: (req, res) => {
    return new Promise((resolve, reject) => {
      CountryModel.findAll()
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
  /** Finding country in database, if found then updating it 
    */
  updateCountry: (req, res) => {
    return new Promise((resolve, reject) => {
      CountryModel.findByPk(req.params.id)
        .then(country => {
          if (country) {
            const updatedCountryObject = { ...country, ...req.body };
            CountryModel.update(
              { ...updatedCountryObject, updated_by: req.body.userId },
              { where: { id: req.params.id } })
              .then(updatedData => {
                resolve(res.status(200).send(Utility.formatResponse(200, `Updated Successfully`)));
              })
              .catch(err => {
                reject(res.status(500).send(Utility.formatResponse(500, err)));
              });
          } else {
            resolve(res.status(404).send(Utility.formatResponse(404, `Country Not Found`)));
          }
        })
        .catch(err => {
          reject(res.status(500).send(Utility.formatResponse(500, err)));
        });
    });
  }
};

module.exports = countryController;
