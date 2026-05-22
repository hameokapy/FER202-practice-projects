import { useState } from 'react'
import './App.css'

const student = {
    avatar: "https://img.magnific.com/free-vector/cheerful-girl-cute-yellow-dresses_24877-81517.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Le Thu Ha",
    id: "HE200164",
    class: "SE2007",
    major: "Software Engineering",
    hobbies: ["Badminton", "Gaming", "Chilling"]
  };

const Headers = () => {

  const [status, setStatus] = useState("Online");
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("light");

  return (
    <div className={`${mode} student-card`}>
      <img src={student.avatar} alt="student avatar" />
      <h2>Full name: {student.name}</h2>
      <p>Student ID: {student.id}</p>
      <p>Class: {student.class}</p>
      <p>Major: {student.major}</p>
      <ul>
        <p>Hobbies:</p>
        {student.hobbies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Status: {status}</p>
      <button onClick={() => setStatus(status === "Online" ? "Offline" : "Online")}>Change status</button>
      <button onClick={() => setCount((count) => count + 1)}>Like</button>
      <button onClick={() =>  {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        changeMode(newMode);
        return;
      }}>Dark/Light mode</button>
      <p>Total likes: {count}</p>
    </div>
  )
}

const changeMode = (mode) => {
  if(mode==="light") {
    document.getElementById("root").className = "light";
    document.querySelectorAll("p").className="light";
  } else if (mode === 'dark') {
    document.getElementById("root").className = "dark";
    document.querySelectorAll("p").className="dark";
  }
}

function App() {
  return (
    <>
      <Headers />
    </>
  )
}

export default App
