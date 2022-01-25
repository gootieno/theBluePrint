const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

const { Project } = require("../../db/models");

router.post(
  "",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { name, categoryId, blueprintId } = req.body;
    try {
      const project = await Project.create({ name, blueprintId, categoryId });
      return res.json({ project });
    } catch (error) {
      next(error);
    }
  })
);

module.exports = router;
