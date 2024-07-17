import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import "./components/Styles/App.css";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
