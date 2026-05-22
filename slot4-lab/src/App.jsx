import "./App.css";

import StudentCard from "./components/StudentCard/StudentCard";

import student from "./data/student";

function App() {
  return (
    <div className="app-container">
      <StudentCard student={student} />
    </div>
  );
}

export default App;