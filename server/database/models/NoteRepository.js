const AbstractRepository = require("./AbstractRepository");

class NoteRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "note" as configuration
    super({ table: "note" });
  }

  // The C of CRUD - Create operation

  async create(note) {
    // Execute the SQL INSERT query to add a new note to the "note" table
    const [result] = await this.database.query(
      `insert into ${this.table} (context, list_id) values (?, ?)`,
      [note.title, note.user_id]
    );

    // Return the ID of the newly inserted note
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific note by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the note
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all notes from the "note" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of notes
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing note

  // async update(note) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an note by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = NoteRepository;
