const { Op } = require("sequelize");

const ProductModel = require("../../model/product");
const Utility = require("../../utility");

const productController = {
    /** Create student in the database
     */
    createProduct: (req, res) => {
        const payload = req.body;
       
        return new Promise((resolve, reject) => {
            ProductModel.create({ ...payload })
                .then(product => {
                    console.log('produccctttt=>',product);
                    resolve(res.status(200).send(Utility.formatResponse(200, { id: product.id })));
                })
                .catch(err => {
                    console.log('errrrrooor=>',err);
                    resolve(res.status(409).send(Utility.formatResponse(409, "Error")));
                });
        });
    },
    /** Get users from database based on page, size and search if provided
     */
    getProducts: (req, res) => {
        const { page, size, search } = req.query;
        const { limit, offset } = Utility.getPagination(parseInt(page), parseInt(size));
        let searchCond = {};

        if (search) {
            searchCond = {
                [Op.or]: [
                    {
                        code: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        name: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        barcode: {
                            [Op.like]: `${search}%`
                        }
                    },
                    {
                        description: {
                            [Op.like]: `${search}%`
                        }
                    },
                    {
                        category: {
                            [Op.like]: `${search}%`
                        }
                    },
                    {
                        quantity: {
                            [Op.like]: `${search}%`
                        }
                    }
                ]
            };
        }

        return new Promise((resolve, reject) => {
            ProductModel.findAndCountAll({
                where: { ...searchCond },
                order: [["updated_at", "DESC"]]
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
    updateProduct: (req, res) => {
        const payload = req.body;

        return new Promise((resolve, reject) => {
            ProductModel.update({ ...payload }, { where: { id: req.body.id } })
                .then(updatedData => {
                    resolve(res.status(200).send(Utility.formatResponse(200, `Updated Successfully`)));
                })
                .catch(err => {
                    reject(res.status(500).send(Utility.formatResponse(500, err)));
                });
        });
    }
};

module.exports = productController;
