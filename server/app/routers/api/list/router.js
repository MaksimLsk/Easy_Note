const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import list-related actions
const { browse, read, add, drop } = require("../../../controllers/ListActions");

const { verifyCookie } = require("../../../services/auth");

// Route to get a list of lists
router.get("/", verifyCookie, browse);

// Route to get a specific list by ID
router.get("/:id", verifyCookie, read);

// Route to add a new list
router.post("/", add);

router.delete("/:id", verifyCookie, drop);
/* ************************************************************************* */

module.exports = router;
