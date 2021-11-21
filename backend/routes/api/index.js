const router = require("express").Router();
const { restoreUser } = require("../../utils/auth.js");

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const garageRouter = require("./garage.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);
router.use("/garage", garageRouter);

router.get("/restore-user", restoreUser, (req, res) => {
  return res.json(req.user);
});

module.exports = router;
