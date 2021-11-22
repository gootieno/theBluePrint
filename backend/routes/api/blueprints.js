const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { BluePrint, Category, Spec } = require("../../db/models");

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const blueprintId = parseInt(req.params.id, 10);
    const blueprint = await BluePrint.findByPk(blueprintId);

    if (blueprint) return res.json({ blueprint });
    next();
  })
);

router.post(
  "",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { carName, imageUrl, garageId } = req.body;
    const blueprint = await BluePrint.create({ carName, imageUrl, garageId });

    if (blueprint) return res.json(blueprint);
    next();
  })
);

router.put(
  "",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { carName } = req.body;
    const blueprint = await BluePrint.update({ carName });
    if (blueprint) return res.json(blueprint);
    next();
  })
);

//------------------------get route for blueprint categories
router.get(
  "/:id/categories",
  asyncHandler(async (req, res, next) => {
    const blueprintId = parseInt(req.params.id, 10);
    const categories = await Category.findAll({
      where: { blueprintId },
      include: { model: Spec },
    });

    if (categories) return res.json({ categories });
    next();
  })
);

module.exports = router;
