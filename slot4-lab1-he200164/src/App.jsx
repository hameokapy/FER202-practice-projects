import { useState } from "react";
import "./App.css";
import StudentCard from "./components/StudentCard/StudentCard";
import student from "./data/student";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`app-container ${
        darkMode ? "dark-bg" : "light-bg"
      }`}
    >
      <StudentCard
        student={student}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
}

export default App;