const { Op } = require("sequelize");

const InventoryModel = require("../../model/inventory");
const Utility = require("../../utility");

const inventoryController = {
    /** Create student in the database
     */
    createInventory: (req, res) => {
        const payload = req.body;

        return new Promise((resolve, reject) => {
            InventoryModel.create({ ...payload })
                .then(student => {
                    resolve(res.status(200).send(Utility.formatResponse(200, { id: student.id })));
                })
                .catch(err => {
                    resolve(res.status(409).send(Utility.formatResponse(409, "Error")));
                });
        });
    },
    /** Get users from database based on page, size and search if provided
     */
    getInventories: (req, res) => {
        const { page, size, search } = req.query;
        const { limit, offset } = Utility.getPagination(parseInt(page), parseInt(size));
        let searchCond = {};

        if (search) {
            searchCond = {
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        available_quantity: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        min_stock_level: {
                            [Op.like]: `${search}%`
                        }
                    },
                    {
                        max_stock_level: {
                            [Op.like]: `${search}%`
                        }
                    },
                    {
                        reorder_point: {
                            [Op.like]: `${search}%`
                        }
                    }
                ]
            };
        }

        return new Promise((resolve, reject) => {
            InventoryModel.findAndCountAll({
                // where: { ...searchCond },
                // order: [["updated_at", "DESC"]]
            })
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
    },

    /** Creating hash of password and a new user & assigning an Auth Token
    */

    /** Updating vendor in the database
     */
    updateInventory: (req, res) => {
        const payload = req.body;

        return new Promise((resolve, reject) => {
             InventoryModel.update({ ...payload }, { where: { id: req.body.id } })
                .then(updatedData => {
                    resolve(res.status(200).send(Utility.formatResponse(200, `Updated Successfully`)));
                })
                .catch(err => {
                    reject(res.status(500).send(Utility.formatResponse(500, err)));
                });
        });
    }
};

module.exports = inventoryController;
