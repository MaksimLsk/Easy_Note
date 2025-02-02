import axios from "axios";

const Api = import.meta.env.VITE_API_URL;

const deleteNote = async (noteId) => {
  try {
    const response = await axios.delete(`${Api}/api/note/${noteId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    if (response.status !== 201) {
      throw new Error("Failed to delete car");
    }
  } catch (err) {
    console.error("Error deleting car:", err);
  }
};

export default deleteNote;
