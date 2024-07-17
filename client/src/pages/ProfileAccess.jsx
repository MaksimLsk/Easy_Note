import "../components/Styles/ProfilePage.css";

export default function ProfileAccess() {
  return (
    <div className="connectionPage">
      <button className="accountBtn" type="button">
        <a href="signin" className="btn-link">
          Sign in
        </a>
      </button>
      <button className="accountBtn" type="button">
        <a href="/signup" className="btn-link">
          Create an account
        </a>
      </button>
    </div>
  );
}
