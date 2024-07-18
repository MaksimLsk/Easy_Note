const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import list-related actions
const { signin, signout } = require("../../../controllers/AuthActions");


// Route to add a new list
router.post("/signin", signin);

router.post("/signout", signout);

/* ************************************************************************* */

module.exports = router;
