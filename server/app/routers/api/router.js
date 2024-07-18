const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const userRouter = require("./user/router");

const listRouter = require("./list/router");

const noteRouter = require("./note/router");

const authRouter = require("./auth/router");

router.use("/user", userRouter);

router.use("/list", listRouter);

router.use("/note", noteRouter);

router.use("/auth", authRouter);

/* ************************************************************************* */

module.exports = router;
