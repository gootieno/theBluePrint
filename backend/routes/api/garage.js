const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

const { Garage } = require("../../db/models");

router.get(
  "",

  asyncHandler(async (req, res, next) => {
    const garage = await Garage.findAll();

    res.json({ garage });
  })
);

module.exports = router;
