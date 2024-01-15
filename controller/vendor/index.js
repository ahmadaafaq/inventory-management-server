const { Op } = require("sequelize");

const VendorModel = require("../../model/user");

const vendorController = {
    /** Get users from database based on page, size and search if provided
     */
    getVendor: (req, res) => {
        const { page, size, search } = req.query;
        const { limit, offset } = Utility.getPagination(parseInt(page), parseInt(size));
        let searchCond = {};

        if (search) {
            searchCond = {
                [Op.or]: [
                    {
                        username: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        email: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        role: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        status: {
                            [Op.like]: `${search}%`
                        }
                    }
                ]
            };
        }
        let whereCondition = { ...searchCond };

        if (req.headers['inventory-mangement'] ) {
            const school_info = JSON.parse(req.headers['inventory-mangement']);
            if (school_info !== null) {
                const decrypted_school_id = Utility.decryptText(school_info?.encrypted_id, school_info?.vect);
                whereCondition = { ...whereCondition, school_id: decrypted_school_id };
            }
        }
        return new Promise((resolve, reject) => {
            UserModel.findAndCountAll({
                limit, offset, where: whereCondition,
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
    
    /** Updating user in the database
     */
    updateUser: (req, res) => {
        const payload = req.body;
        const whereCondition = Utility.getSchoolIdFromHeader(req.headers);

        return new Promise((resolve, reject) => {
            if (payload.password) {     //this condition didn't run because we dont got the password
                Utility.createHash(payload.password)
                    .then(hash => {
                        payload.password = hash;
                        UserModel.update({ ...payload, updated_by: req.body.userId }, { where: { id: req.body.id, ...whereCondition } })
                            .then(updatedData => {
                                resolve(res.status(200).send(Utility.formatResponse(200, `Updated Successfully`)));
                            })
                            .catch(err => {
                                reject(res.status(500).send(Utility.formatResponse(500, err)));
                            });
                    })
            } else {
                UserModel.update({ ...payload, updated_by: req.body.userId }, { where: { id: req.body.id, ...whereCondition } })
                    .then(updatedData => {
                        resolve(res.status(200).send(Utility.formatResponse(200, `Updated Successfully`)));
                    })
                    .catch(err => {
                        reject(res.status(500).send(Utility.formatResponse(500, err)));
                    });
            }
        });
    }
};

module.exports = userController;
