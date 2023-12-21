import React, { useState } from "react";
import "./contactLeft.css"; // Add your own CSS file for styling

const ContactLeft = () => {
  const [suggestion, setSuggestion] = useState("");
  const [submittedSuggestion, setSubmittedSuggestion] = useState("");

  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
  };

  const handleSubmit = () => {
    // Add your logic to handle the submission, e.g., sending the suggestion to a server
    console.log("Suggestion submitted:", suggestion);

    // Update the state with the submitted suggestion
    setSubmittedSuggestion(suggestion);

    // Clear the input after submission (optional)
    setSuggestion("");
  };

  return (
    <div className="contact-left-container">
      <h2>Contact Us</h2>
      <p>
        Have questions, suggestions, or just want to chat about cars? We're here for you! Reach out to us using the contact information below. Your feedback is valuable to us.
      </p>
      <ul className="contact-list">
        <li className="contact-item">Contact: +92 123 456789</li>
        <li className="contact-item">Email: autocenter@gmail.com</li>
        <li className="contact-item">Location: Islamabad</li>
        <li className="contact-item">Address: G-10 Markaz, Islamabad</li>
        <li className="contact-item">Timings: 10AM to 7PM</li>
      </ul>
      <textarea
        name="suggestion"
        className="suggestion-box"
        placeholder="Your Suggestions"
        value={suggestion}
        onChange={handleSuggestionChange}
      ></textarea>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      {submittedSuggestion && (
        <div className="submitted-suggestion">
          <p>Thank you for your suggestion:</p>
          <p>{submittedSuggestion}</p>
        </div>
      )}
    </div>
  );
};

export default ContactLeft;
