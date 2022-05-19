const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { BluePrint, Category, Spec, Project, Step } = require("../../db/models");

const { singleMulterUpload, singlePublicFileUpload } = require("../../aws");

router.get(
  "/:id",
  requireAuth,
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
  singleMulterUpload("media"),
  asyncHandler(async (req, res, next) => {
    const { name, garageId } = req.body;
    const imageUrl = await singlePublicFileUpload(req.file);
    const blueprint = await BluePrint.create({
      carName: name,
      imageUrl,
      garageId,
    });

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
      include: [{ model: Spec, as: "specs" }],
    });

    if (categories) return res.json({ categories });
    next();
  })
);

//----------------------get route for blueprint projects
router.get(
  "/:id/projects",
  asyncHandler(async (req, res, next) => {
    const blueprintId = parseInt(req.params.id, 10);

    const projects = await Project.findAll({
      where: { blueprintId },
    });

    if (projects) return res.json({ projects });
    else next();
  })
);

module.exports = router;
