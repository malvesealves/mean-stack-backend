const express = require("express");
const router = express.Router();
const {
  addCategory,
  updateCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
} = require("../handlers/category-handler");

router.get("", async (req, res) => {
  let result = await getCategories();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  let id = req.params["id"];
  let result = await getCategoryById(id);
  res.send(result);
});

router.post("", async (req, res) => {
  let model = req.body;
  let result = await addCategory(model);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  let model = req.body;
  let id = req.params["id"];
  await updateCategory(id, model);
  res.send({ message: "Registro atualizado" });
});

router.delete("/:id", async (req, res) => {
  let id = req.params["id"];
  await deleteCategory(id);
  res.send({ message: "Registro excluído" });
});

module.exports = router;
