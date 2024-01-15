const express = require("express");
const router = express.Router();

//-----------------------------------VENDOR---------------------------------------
router.post('/create-all-vendor', (req,res));
router.get('/get-all-vendor', (req,res));
router.patch('/update-all-vendor', (req,res));

// //-----------------------------------PRODUCT---------------------------------------
// router.post('/create-all-product', (req,res));
// router.get('/get-all-product', (req,res));
// router.patch('/update-all-product', (req,res));

// //-----------------------------------WAREHOUSE---------------------------------------
// router.post('/create-all-warehouse', (req,res));
// router.get('/get-all-warehouse', (req,res));
// router.patch('/update-all-warehouse', (req,res));

// //-----------------------------------INVENTORY---------------------------------------
// router.post('/create-all-inventory', (req,res));
// router.get('/get-all-inventory', (req,res));
// router.patch('/update-all-inventory', (req,res));

 module.exports = router;