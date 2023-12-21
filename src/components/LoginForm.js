import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const LoginForm = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend-roan-ten.vercel.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }), // Ensure to stringify the JSON data
        }
      );

      const data = await response.json();

      if (data.success) {
        // Store user data (in this case, email) in localStorage
        localStorage.setItem("auth", JSON.stringify({ email }));
        // Redirect to home page
        window.location.href = "/home";
      } else {
        console.error("Login failed:", data.message);
        // Handle unsuccessful login, show error message, etc.
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle unexpected errors, show error message, etc.
    }
  };
  //const handleGoogleSignIn = () => {
  // Handle Google Sign In logic here
  //};

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Form
        style={{
          width: "300px",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h2 className="text-center">Log In</h2>

        <Form.Group controlId="formBasicEmail">
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            placeholder="email"
            name=""
            id=""
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="password"
            name=""
            id=""
          />
        </Form.Group>
        <div style={{ marginTop: "10px" }}>
          <Button variant="primary" type="submit" block onClick={submit}>
            Sign In
          </Button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <p className="text-center">
            Don't have an account? <Link to="/signup">signup</Link>
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
