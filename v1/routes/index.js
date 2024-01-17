const express = require("express");

const router = express.Router();

const vendorController = require("../../controller/vendor")
const productController = require("../../controller/product");
const warehouseController = require("../../controller/warehouse");
const inventoryController = require("../../controller/inventory");
const orderController = require("../../controller/order");
const orderDetailController = require("../../controller/order_detail")

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
router.get('/get-inventory', inventoryController.getInventory);
router.patch('/update-inventory', inventoryController.updateInventory);

// //-----------------------------------ORDER---------------------------------------
router.post('/create-order', orderController.createOrder);
router.get('/get-orders', orderController.getOrders);
router.patch('/update-order', orderController.updateOrder);

// //-----------------------------------ORDER-DETAILS---------------------------------------
router.post('/create-order-detail', orderDetailController.createOrderDetail);
router.get('/get-order-details', orderDetailController.getOrderDetail);
router.patch('/update-order-detail', orderDetailController.updateOrderDetail);

 module.exports = router;
