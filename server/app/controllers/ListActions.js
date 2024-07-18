// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  const { sub } = req.auth;

  try {
    // Fetch all list from the database
    const list = await tables.list.readAll(sub);

    // Respond with the list in JSON format
    res.json(list);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {

  const { sub } = req.auth;

  try {
    // Fetch a specific list from the database based on the provided ID
    const list = await tables.list.read(sub);

    // If the list is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the list in JSON format
    if (list == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(list);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// const readWithUserId = async (req, res, next) => {
//   const { sub } = req.auth;

//   try {
//     const list = await tables.list.read(sub);

//     if (list == null) {
//       res.sendStatus(404);
//     } else {
//       res.status(200).json(list);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the list data from the request body
  const list = req.body;

  try {
    // Insert the list into the database
    const insertId = await tables.list.create(list);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted list
    res.status(201).json({ insertId });
  } catch (err) {
    console.error("Error creating a list:", err);
    res
      .status(500)
      .json({ error: "An error occurred while creating a list" });
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const drop = async (req, res, next) => {
  const { id } = req.params;
  try {
    const affectedRows = await tables.list.drop(id);
    if (affectedRows === 0) {
      res.status(404).json({ error: "List not found" });
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
  // readWithUserId,
  add,
  drop,
};
