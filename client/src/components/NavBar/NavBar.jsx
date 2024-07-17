import { CgProfile } from "react-icons/cg";
import "../Styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="icon">
        <a
          href="/"
          className="icon"
          alt="access to homepage"
          title="access to homepage"
        >
          <h1>Easy</h1>
          <h1>Note</h1>
        </a>
      </div>
      <div className="profileLogo">
        <a
          href="/profile"
          alt="acces to profile page"
          title="acces to profile page"
        >
          <CgProfile className="profileLogo" />
        </a>
      </div>
    </div>
  );
}
