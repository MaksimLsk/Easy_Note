import { useState } from "react";
import PropTypes from "prop-types";
import notify from "../../Notify/notify";

import "../Styles/HomePage.css";

function List({ lists, onListClick, onAddList, onDeleteList, user }) {
  const [newListName, setNewListName] = useState("");
  const [selectedListId, setSelectedListId] = useState(null); // New state for selected list

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === null) {
      notify("Please connect", "error");
    }
    if (newListName.trim()) {
      onAddList(newListName); // Call function to add new list
      setNewListName(""); // Reset input field
    }
  };

  // Handle click on list item
  const handleListClick = (listId) => {
    setSelectedListId(listId); // Set selected list id
    onListClick(listId); // Call function to select list
  };

  // Handle keyboard events for list items
  const handleKeyDown = (e, listId) => {
    if (e.key === "Enter" || e.key === " ") {
      onListClick(listId); // Call function to select list
    }
  };

  return (
    <div className="listComponent">
      <div className="title">
        <h2>Lists</h2>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)} // Update state with input value
          placeholder="New list name"
          className="input"
          title="List input"
        />
        <button type="submit" className="btn" title="add list">
          +
        </button>
      </form>
      {lists.map((list) => (
        <div
          key={list.id}
          className={`newList ${selectedListId === list.id ? "selected" : ""}`}
        >
          <div
            role="button"
            tabIndex="0"
            onClick={() => handleListClick(list.id)} // Handle click on list item
            onKeyDown={(e) => handleKeyDown(e, list.id)} // Allow selecting the list item using the keyboard
          >
            {list.name}
          </div>
          <button
            className="deleteBtn"
            type="button"
            title="delete list"
            onClick={() => onDeleteList(list.id)}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  user: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onListClick: PropTypes.func.isRequired,
  onAddList: PropTypes.func.isRequired,
  onDeleteList: PropTypes.func.isRequired,
};

export default List;
