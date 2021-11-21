const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { BluePrint } = require("../../db/models");

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const blueprintId = parseInt(req.params.id, 10);
    const blueprint = await BluePrint.findByPk(blueprintId);

    if (blueprint) return res.json({ blueprint });
    next();
  })
);

module.exports = router;
