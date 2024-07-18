import axios from "axios";

const Api = import.meta.env.VITE_API_URL;

const loadUserData = async () => {
  const response = await axios.get(`${Api}/api/user`);
  return response.data;
};

const HandleSignUp = async ({ user }) => {
  try {
    const response = await axios.post(`${Api}/api/user`, {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
    });

    if (response.status === 201) {
      return { success: true, data: response.data }; // Successful registration
    }
    return { success: false, error: response.data.message }; // Registration failed
  } catch (error) {
    console.error("An error occurred while creating the user:", error);
    return { success: false, error: error.message }; // Error during registration
  }
};

export { loadUserData, HandleSignUp };
