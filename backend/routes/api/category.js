const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

const { Category, Spec } = require("../../db/models");

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const category = await Category.findByPk(id);

    if (category) return res.json(category);
    next();
  })
);

router.post(
  "",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { name, blueprintId } = req.body;
    try {
      const category = await Category.create({ name, blueprintId });
      return res.json(category);
    } catch (e) {
      next();
    }
  })
);

router.put(
  "",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { categoryId, name } = req.body;
    try {
      let category = await Category.findByPk(categoryId);
      category = await category.update({ where: { name } });
      return res.json(category);
    } catch (e) {
      next();
    }
    if (category) return res.json(category);
    next();
  })
);

//-------------- get all specs belonging to category

router.get(
  "/:id/specs",
  asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const specs = await Spec.findAll({ where: { categoryId: id } });
    if (specs) return res.json({ specs });
    next();
  })
);

module.exports = router;
