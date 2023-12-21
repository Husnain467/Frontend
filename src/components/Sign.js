import { useState } from "react";
import { signup } from "../Service/api";

function Signup() {
  const [foormData, setFormData] = useState({
    Name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...foormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { Name, email, password } = foormData;
      await signup({ Name, email, password });
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 border rounded p-4">
          <h2 className="text-center mb-4">Sign Up</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="inputFirstName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                name="firstName"
                value={foormData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                value={foormData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={foormData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
