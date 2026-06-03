import React from "react";
import "./StudentCard.css";

class StudentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      status: "Online"
    };
  }

  render() {
    const {darkMode, setDarkMode, student} = this.props;
    const {likes, status} = this.state;

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
            onClick={() => this.setState({ likes: likes + 1 })}
          >
            ❤️ Like ({likes})
          </button>

          <button
            className="secondary-btn"
            onClick={() => this.setState({ status: status === "Online" ? "Offline" : "Online" })}
          >
            Change Status
          </button>
        </div>
      </div>
    );
  }
};

export default StudentCard;