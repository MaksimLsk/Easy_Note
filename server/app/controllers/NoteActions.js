// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all note from the database
    const note = await tables.note.readAll();

    // Respond with the note in JSON format
    res.json(note);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific note from the database based on the provided ID
    const note = await tables.note.read(req.params.id);

    // If the note is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the note in JSON format
    if (note == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(note);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the note data from the request body
  const dataNote = req.body;

  try {
    // Insert the note into the database
    const insertId = await tables.note.create(dataNote);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted note
    res.status(201).json({ insertId });
  } catch (err) {
    console.error("Error creating a note:", err);
    res
      .status(500)
      .json({ error: "An error occurred while creating a note" });
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const drop = async (req, res, next) => {
  const { id } = req.params;
  try {
    const affectedRows = await tables.list.drop(id);
    if (affectedRows === 0) {
      res.status(404).json({ error: "Note not found" });
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error("Error in delete action:", err);
    res.status(500).json({ error: "Internal server error" });
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  drop,
};
