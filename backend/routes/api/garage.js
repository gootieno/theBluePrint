const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

const { Garage, BluePrint } = require("../../db/models");

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const garage = await Garage.findByPk(id);
    if (garage) return res.json({ garage });
    next();
  })
);

router.put(
  "",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { name, garageId } = req.body;
    let garage = await Garage.findByPk(garageId);
    try {
      garage = await garage.update({ name });
      res.json(garage);
    } catch (e) {
      next();
    }
  })
);

//--------------------------get blueprints for a garage
router.get(
  "/:id/blueprints",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    let garage = await Garage.findAll({
      where: { userId },
      include: {
        model: BluePrint,
        as: "blueprints",
      },
    });

    if (garage) {
      return res.json({ garage: garage[0] });
    }
    next();
  })
);

module.exports = router;
