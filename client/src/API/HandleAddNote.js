import axios from "axios";

const Api = import.meta.env.VITE_API_URL;

const loadNoteData = async () => {
  const response = await axios.get(`${Api}/api/note`);
  return response.data;
};

const addNote = async ({ note }) => {
  try {
    const response = await axios.post(`${Api}/api/note`, {
      context: note.context,
      list_id: note.list_id,
    });

    if (response.status !== 201) {
      const errorData = response.data;
      console.error("Note creation failed:", errorData.message);
      return { error: errorData.message };
    }
    return response.data; // Ensure this includes the note object with id and context
  } catch (error) {
    console.error("An error occurred while creating a note:", error);
    return { error: error.message };
  }
};

export { loadNoteData, addNote };
