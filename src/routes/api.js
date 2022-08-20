const express = require("express");
const {
  CreateProduct,
  SelectProduct,
  UpdateProduct,
  DeleteProduct,
} = require("../controller/ProductsController");
const router = express.Router();

router.post("/CreateProduct", CreateProduct);
router.get("/SelectProduct", SelectProduct);
router.post("/UpdateProduct/:id", UpdateProduct);
router.post("/DeleteProduct/:id", DeleteProduct);

module.exports = router;
