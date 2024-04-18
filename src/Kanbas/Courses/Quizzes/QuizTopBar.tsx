import React from "react";
import "./index.css";

function QuizTopBar() {
  return (
    <div>
      <div className="top-bar">
        <input
          type = "text"
          placeholder = "Search for Quiz"
          className = "search-input" />

        <button type="button" className="d-flex justify-content-end" id="add-quiz">
          + Quiz
        </button>
      </div>
      <hr/>
    </div>
    

  )
}
export default QuizTopBar;