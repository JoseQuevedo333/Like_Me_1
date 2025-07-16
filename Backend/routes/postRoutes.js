const express = require("express");
const {
  agregarlosPost,
  obtenerlosPost,
  modificarlosPost,
  eliminarlosPost,
} = require("../controllers/postControllers");

const router = express.Router();

router.get("/posts", obtenerlosPost);
router.post("/posts", agregarlosPost);
router.put("/posts/:id", modificarlosPost);
router.delete("/posts/:id", eliminarlosPost);

module.exports = router;
