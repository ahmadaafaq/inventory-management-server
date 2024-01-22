const express = require("express");

const router = express.Router();

const vendorController = require("../../controller/vendor")
const productController = require("../../controller/product");
const warehouseController = require("../../controller/warehouse");
const inventoryController = require("../../controller/inventory");
const orderController = require("../../controller/order");
const orderDetailController = require("../../controller/order_detail");
const addressController = require("../../controller/address");
const cityController = require("../../controller/city");
const countryController = require("../../controller/country");
const stateController = require("../../controller/state");
const commonController = require("../../controller/common");

//-----------------------------------VENDOR---------------------------------------
 router.post('/create-vendor', vendorController.createVendor );
 router.get('/get-vendors', vendorController.getVendors);
 router.patch('/update-vendor',vendorController.updateVendor);

// //-----------------------------------PRODUCT---------------------------------------
router.post('/create-product', productController.createProduct);
router.get('/get-products', productController.getProducts);
router.patch('/update-product', productController.updateProduct);

// //-----------------------------------WAREHOUSE---------------------------------------
router.post('/create-warehouse', warehouseController.createWarehouse);
router.get('/get-warehouses', warehouseController.getWarehouse);
router.patch('/update-warehouse', warehouseController.updateWarehouse);

// //-----------------------------------INVENTORY---------------------------------------
router.post('/create-inventory', inventoryController.createInventory);
router.get('/get-inventories', inventoryController.getInventories);
router.patch('/update-inventory', inventoryController.updateInventory);

// //-----------------------------------ORDER---------------------------------------
router.post('/create-order', orderController.createOrder);
router.get('/get-orders', orderController.getOrders);
router.patch('/update-order', orderController.updateOrder);

// //-----------------------------------ORDER-DETAILS---------------------------------------
router.post('/create-order-detail', orderDetailController.createOrderDetail);
router.get('/get-order-details', orderDetailController.getOrderDetail);
router.patch('/update-order-detail', orderDetailController.updateOrderDetail);

//-----------------------------------ADDRESS---------------------------------------
router.post('/create-address', addressController.createAddress);
router.get('/get-address/:parent/:parent_id', addressController.getAddress);
router.patch('/update-address', addressController.updateAddress);

//-------------------------------------CITY----------------------------------------
router.post('/create-city', cityController.createCity);
router.get('/get-cities/:id', cityController.getCities);
router.patch('/update-city/:id', cityController.updateCity);
router.get('/get-all-cities', cityController.getAll);

// ------------------------------------Common-----------------------------------------
router.get('/get-by-pk/:table/:id', commonController.getByPk);

//------------------------------------COUNTRY--------------------------------------
router.post('/create-country', countryController.createCountry);
router.get('/get-countries', countryController.getCountries);
router.patch('/update-country/:id', countryController.updateCountry);

//--------------------------------------STATE-----------------------------------------
router.post('/create-state', stateController.createState);
router.get('/get-states/:id', stateController.getStates);
router.patch('/update-state/:id', stateController.updateState);
router.get('/get-all-states', stateController.getAll);    //this is for school website

 module.exports = router;
