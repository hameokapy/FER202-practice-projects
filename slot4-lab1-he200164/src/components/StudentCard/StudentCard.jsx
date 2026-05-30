import { useState } from "react";
import "./StudentCard.css";

const StudentCard = ({student, darkMode, setDarkMode}) => {
  const [status, setStatus] = useState("Online");
  const [likes, setLikes] = useState(0);

  return (
    <div className={`student-card ${darkMode ? "dark" : ""}`}>
      
      <div className="top-bar">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="card-header">
        <img src={student.avatar} alt="avatar" />

        <h2>{student.name}</h2>

        <p className="major-text">
          {student.major}
        </p>

        <span className={`status ${status.toLowerCase()}`}>
          {status === "Online" ? "🟢 Online" : "🔴 Offline"}
        </span>
      </div>

      <div className="student-info">
        <div className="info-row">
          <span>ID</span>
          <strong>{student.id}</strong>
        </div>

        <div className="info-row">
          <span>Class</span>
          <strong>{student.class}</strong>
        </div>
      </div>

      <div className="hobby-section">
        <h3>Hobbies</h3>

        <div className="hobby-tags">
          {student.hobbies.map((hobby, index) => (
            <span key={index} className={`hobby-tag hobby-${index}`}>
              {hobby}
            </span>
          ))}
        </div>
      </div>

      <div className="card-actions">
        <button
          className="primary-btn"
          onClick={() => setLikes((prev) => prev + 1)}
        >
          ❤️ Like ({likes})
        </button>

        <button
          className="secondary-btn"
          onClick={() =>
            setStatus(status === "Online" ? "Offline" : "Online")
          }
        >
          Change Status
        </button>
      </div>
    </div>
  );
};

export default StudentCard;