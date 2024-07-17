import { useState } from "react";
import PropTypes from "prop-types";

import "../Styles/HomePage.css";

export default function Notes({ list, onAddNote, onDeleteNote }) {
  const [newNote, setNewNote] = useState("");

  // Handle form submission to add a new note
  const handleAddNote = (e) => {
    e.preventDefault();
    if (newNote.trim()) {
      onAddNote(list.id, newNote); // Call function to add new note to the list
      setNewNote(""); // Reset input field
    }
  };

  return (
    <div className="noteComponent">
      <form onSubmit={handleAddNote} className="form">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="New note"
          title="Note input"
          className="input"
        />
        <button type="submit" className="btn" title="add note">
          +
        </button>
      </form>
      <ul className="table">
        {list.notes.map((note, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${note}-${index}`} className="newNote">
            {note}
            <button
              type="button"
              className="deleteBtn"
              title="delete note"
              onClick={() => onDeleteNote(list.id, index)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Notes.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    notes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onAddNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};
