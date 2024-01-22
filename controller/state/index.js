/**
 * Copyright © 2023, School CRM Inc. ALL RIGHTS RESERVED.
 *
 * This software is the confidential information of School CRM Inc., and is licensed as
 * restricted rights software. The use, reproduction, or disclosure of this software is subject to
 * restrictions set forth in your license agreement with School CRM.
 */

const StateModel = require("../../model/state");
const Utility = require("../../utility");

const stateController = {
  /** Creating state in the database
    */
  createState: (req, res) => {
    const payload = req.body;
    return new Promise((resolve, reject) => {
      StateModel.create({ ...payload, created_by: req.body.userId })
        .then(state => {
          resolve(res.status(200).send(Utility.formatResponse(200, { state })));
        })
        .catch(err => {
          resolve(res.status(409).send(Utility.formatResponse(409, `${err}`)));
        });
    });
  },
  /** Get states from database
   */
  getStates: (req, res) => {
    return new Promise((resolve, reject) => {
      StateModel.findAll({ where: { country_id: req.params.id } })
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

  /** Finding state in database, if found then updating it with newly entered data.*/
  updateState: (req, res) => {
    return new Promise((resolve, reject) => {
      StateModel.update(
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

  /** Get all the states from database for school crm
   */
  getAll: (req, res) => {
    return new Promise((resolve, reject) => {
      StateModel.findAndCountAll()
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

module.exports = stateController;
