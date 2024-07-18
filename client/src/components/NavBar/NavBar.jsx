import { CgProfile } from "react-icons/cg";
import { useUserContext } from "../../Context/UserContext";
import "../Styles/NavBar.css";

export default function NavBar() {
  const { user } = useUserContext();

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
        {user !== "null" && user !== null ? (
          <a
            href="/profile"
            alt="access to profile page"
            title="access to profile page"
          >
            <CgProfile className="profileLogo" />
          </a>
        ) : (
          <a
            href="/profileaccess"
            alt="access to connection page"
            title="access to connection page"
          >
            <CgProfile className="profileLogo" />
          </a>
        )}
      </div>
    </div>
  );
}
