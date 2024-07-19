import axios from "axios";

const Api = import.meta.env.VITE_API_URL;

const deleteList = async (listId) => {
  try {
    const response = await axios.delete(`${Api}/api/list/${listId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    if (response.status !== 204) {
      throw new Error("Failed to delete list");
    }
  } catch (err) {
    console.error("Error deleting list:", err);
  }
};

export default deleteList;
