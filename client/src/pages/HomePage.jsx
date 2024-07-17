import { useState } from "react";
import Lists from "../components/HomePage/Lists";
import Notes from "../components/HomePage/Notes";

import "../components/Styles/HomePage.css";

export default function HomePage() {
  const [lists, setLists] = useState([]);
  const [activeList, setActiveList] = useState(null);

  // Function to handle clicking on a list item
  const handleListClick = (id) => {
    setActiveList(id);
  };

  // Function to add a new list
  const handleAddlist = (name) => {
    const newList = {
      id: lists.length + 1, // Generate a unique ID for the new list
      name,
      notes: [], // Initialize with an empty array of notes
    };
    setLists([...lists, newList]); // Add the new list to the existing lists
  };

  // Function to add a new item to a specific list
  const handleAddNote = (listId, note) => {
    setLists(
      lists.map((list) =>
        list.id === listId ? { ...list, notes: [...list.notes, note] } : list
      )
    ); // Update the lists with the new note added to the specified list
  };

  // Function to delete a list by its ID
  const handleDeleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id)); // Remove the list from the lists array
    if (activeList === id) {
      setActiveList(null); // Reset activeListId if the deleted list was active
    }
  };

  // Function to delete a note from a specific list by its index
  const handleDeleteNote = (listId, noteIndex) => {
    setLists(
      lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              notes: list.notes.filter((_, index) => index !== noteIndex),
            }
          : list
      )
    );
  };

  const chosenList = lists.find((list) => list.id === activeList);

  return (
    <div className="todo">
      <Lists
        lists={lists}
        onListClick={handleListClick}
        onAddList={handleAddlist}
        onDeleteList={handleDeleteList}
      />
      <div className="noteContainer">
        <div className="title">
          <h2>Notes</h2>
        </div>
        {chosenList && (
          <Notes
            list={chosenList}
            onAddNote={handleAddNote}
            onDeleteNote={handleDeleteNote}
          />
        )}
      </div>
    </div>
  );
}
