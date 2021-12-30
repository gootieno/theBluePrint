const router = require("express").Router();
const { restoreUser } = require("../../utils/auth.js");

const sessionRouter = require("./session");
const usersRouter = require("./users");
const garageRouter = require("./garage");
const blueprintsRouter = require("./blueprints");
const categoryRouter = require("./category");
const specsRouter = require("./specs");
const projectsRouter = require("./projects");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);
router.use("/garage", garageRouter);
router.use("/blueprints", blueprintsRouter);
router.use("/category", categoryRouter);
router.use("/specs", specsRouter);
router.use("/projects", projectsRouter);

router.get("/restore-user", restoreUser, (req, res) => {
  return res.json(req.user);
});

module.exports = router;
