const AbstractRepository = require("./AbstractRepository");

class ListRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "list" as configuration
    super({ table: "list" });
  }

  // The C of CRUD - Create operation

  async create(list) {
    // Execute the SQL INSERT query to add a new list to the "list" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, user_id) values (?, ?)`,
      [list.name, list.user_id]
    );

    // Return the ID of the newly inserted list
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific list by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the list
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all lists from the "list" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of lists
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing list

  // async update(list) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an list by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ListRepository;
