import axios from "axios";

const Api = import.meta.env.VITE_API_URL;

const loadListData = async () => {
  const response = await axios.get(`${Api}/api/list`);
  return response.data;
};

const addList = async ({ list }) => {
  try {
    const response = await axios.post(`${Api}/api/list`, {
      name: list.name,
      user_id: list.user_id,
    });

    if (response.status !== 201) {
      const errorData = response.data;
      console.error("List creation failed:", errorData.message);
      return { error: errorData.message };
    }
    return response.data;
  } catch (error) {
    console.error("An error occurred while creating the list:", error);
    return { error: error.message };
  }
};

export { loadListData, addList };
