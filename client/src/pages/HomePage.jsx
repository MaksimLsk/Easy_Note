import { useState, useEffect } from "react";
import Lists from "../components/HomePage/Lists";
import Notes from "../components/HomePage/Notes";
import { loadListData, addList } from "../API/HandleAddList";
import { loadNoteData, addNote } from "../API/HandleAddNote";

import "../components/Styles/HomePage.css";

export default function HomePage() {
  const [lists, setLists] = useState([]);
  const [activeList, setActiveList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const listData = await loadListData();
      const noteData = await loadNoteData();

      // Ensure each list has a notes property that is an array of objects
      const listsWithNotes = listData.map((list) => ({
        ...list,
        notes: noteData.filter((note) => note.list_id === list.id),
      }));

      setLists(listsWithNotes);
    };
    fetchData();
  }, []);

  // Function to handle clicking on a list item
  const handleListClick = (id) => {
    setActiveList(id);
  };

  // Function to add a new list
  const handleAddList = async (name) => {
    const newList = {
      name,
      user_id: 2, // Generate a unique ID for the new list
    };
    const result = await addList({ list: newList });
    if (!result.error) {
      setLists([...lists, { id: result.insertId, ...newList, notes: [] }]);
    }
  };

  // Function to add a new note to a specific list
  const handleAddNote = async (listId, context) => {
    const newNote = {
      context,
      list_id: listId,
    };
    const result = await addNote({ note: newNote });

    if (!result.error) {
      setLists(
        lists.map((list) =>
          list.id === listId
            ? { ...list, notes: [...list.notes, { id: result.id, context }] }
            : list
        )
      );
    }
  };

  // Function to delete a list by its ID
  const handleDeleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id)); // Remove the list from the lists array
    if (activeList === id) {
      setActiveList(null); // Reset activeListId if the deleted list was active
    }
  };

  // Function to delete a note from a specific list by its note ID
  const handleDeleteNote = (listId, noteId) => {
    setLists(
      lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              notes: list.notes.filter((note) => note.id !== noteId),
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
        onAddList={handleAddList}
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
