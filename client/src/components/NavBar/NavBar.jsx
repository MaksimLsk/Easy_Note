import { CgProfile } from "react-icons/cg";
import "../Styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="icon">
        <h1>Easy</h1>
        <h1>Note</h1>
      </div>
      <div className="profileLogo">
        <CgProfile className="profileLogo" />
      </div>
    </div>
  );
}
