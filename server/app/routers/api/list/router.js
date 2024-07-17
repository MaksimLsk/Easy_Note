const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import list-related actions
const { browse, read, add } = require("../../../controllers/ListActions");

// Route to get a list of lists
router.get("/", browse);

// Route to get a specific list by ID
router.get("/:id", read);

// Route to add a new list
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
