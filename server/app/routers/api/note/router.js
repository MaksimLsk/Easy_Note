const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import note-related actions
const { browse, read, add } = require("../../../controllers/NoteActions");

// Route to get a list of notes
router.get("/", browse);

// Route to get a specific note by ID
router.get("/:id", read);

// Route to add a new note
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
