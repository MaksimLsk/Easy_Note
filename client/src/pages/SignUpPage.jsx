import { useNavigate, Form } from "react-router-dom";
import SignUpForm from "../components/SignUp/SignUpForm";
import { HandleSignUp } from "../API/HandleSignUp";
import notify from "../Notify/notify";

export default function SignUpPage() {
  const navigate = useNavigate();

  const { formValues, formErrors, handleChange, validateInputs } = SignUpForm({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
      try {
        const response = await HandleSignUp({ user: formValues }); // Pass formValues inside an object with a 'user' property
        if (response.success) {
          notify("Account created, please sign in !", "succes");
          navigate("/signin", { state: { user: formValues } });
        } else {
          console.error("Registration failed: ", response.error);
        }
      } catch (error) {
        console.error("An error occurred during registration: ", error);
      }
    }
  };

  return (
    <div className="component">
      <Form
        method="post"
        className="bodyform"
        id="form"
        onSubmit={handleSubmit}
      >
        <h2>Register</h2>
        <div className="form-group">
          <label className="input-control">
            <input
              className="container"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Firstname"
              value={formValues.firstname}
              onChange={handleChange}
              autoComplete="off"
            />
            {formErrors.firstname && (
              <div className="error">{formErrors.firstname}</div>
            )}
          </label>
          <label className="input-control">
            <input
              className="container"
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Lastname"
              value={formValues.lastname}
              onChange={handleChange}
              autoComplete="off"
            />
            {formErrors.lastname && (
              <div className="error">{formErrors.lastname}</div>
            )}
          </label>
          <label className="input-control">
            <input
              className="container"
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              autoComplete="off"
            />
            {formErrors.email && (
              <div className="error">{formErrors.email}</div>
            )}
          </label>
          <label className="input-control">
            <input
              className="container"
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {formErrors.password && (
              <div className="error">{formErrors.password}</div>
            )}
          </label>
          <label className="input-control">
            <input
              className="container"
              type="password"
              id="password2"
              placeholder="Confirm Password"
              name="password2"
              value={formValues.password2}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {formErrors.password2 && (
              <div className="error">{formErrors.password2}</div>
            )}
          </label>
        </div>
        <button className="accountBtn" id="signupbut" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}
