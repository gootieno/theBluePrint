const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

const { Spec } = require("../../db/models");

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const spec = await Spec.findByPk(id);
    if (spec) return res.json(spec);
    next();
  })
);

router.post(
  "",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { name, categoryId } = req.body;
    try {
      const spec = await Spec.create({ name, categoryId });
      return res.json(spec);
    } catch (e) {
      next();
    }
  })
);

router.put(
  "",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { name, specId } = req.body;
    try {
      let spec = await Spec.findByPk(specId);
      spec = await spec.update({ where: name });
      return res.json(spec);
    } catch (e) {
      next();
    }
  })
);

module.exports = router;
