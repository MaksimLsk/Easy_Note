import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "../Context/UserContext";
import "../components/Styles/ProfilePage.css";
import notify from "../Notify/notify";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, signout } = useUserContext();

  useEffect(() => {
    if (user === null) {
      navigate("/profileAccess");
    }
  }, [user, navigate]);

  const handleSignout = async () => {
    try {
      await signout(true);
      notify("See you soon !", "success");
    } catch (error) {
      console.error("Error during sign out", error);
    }
  };

  return (
    <div className="component">
      <div className="profile">
        <h3>Firstname</h3>
        <h2>
          <span>{user.user.firstname}</span>
        </h2>
      </div>
      <div className="profile">
        <h3>Lastname</h3>
        <h2>
          <span>{user.user.lastname}</span>
        </h2>
      </div>
      <div className="profile">
        <h3>Email</h3>
        <h2>
          <span>{user.user.email}</span>
        </h2>
      </div>
      <div className="container">
        <button type="button" className="accountBtn" onClick={handleSignout}>
          Sign out
        </button>
      </div>
    </div>
  );
}
