const router = require("express").Router();
const userRoutes = require("./user");
const MedsRoutes = require("./Meds");

// User routes
router.use("/user", userRoutes);
router.use("/meds", MedsRoutes);

module.exports = router;
