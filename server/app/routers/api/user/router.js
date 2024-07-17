const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import user-related actions
const { browse, read, add } = require("../../../controllers/UserActions");

// Route to get a list of users
router.get("/", browse);

// Route to get a specific user by ID
router.get("/profile", read);

// Route to add a new user
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
