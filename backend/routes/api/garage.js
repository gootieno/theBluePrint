const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

const { Garage, BluePrint } = require("../../db/models");

router.get(
  "",

  asyncHandler(async (req, res, next) => {
    const garage = await Garage.findAll();

    res.json({ garage });
  })
);

// get blueprints for a garage

router.get(
  "/:id/blueprints",
  asyncHandler(async (req, res, next) => {
    const garageId = parseInt(req.params.id, 10);
    const blueprints = await BluePrint.findAll({
      where: { garageId },
    });

    if (blueprints) return res.json({ blueprints });
    next();
  })
);

module.exports = router;
