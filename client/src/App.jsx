import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { UserProvider } from "./Context/UserContext";

import "./components/Styles/App.css";

function App() {
  return (
    <UserProvider>
      <NavBar />
      <Outlet />
      <ToastContainer />
    </UserProvider>
  );
}

export default App;
