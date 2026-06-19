import { useReducer, useState, useEffect } from "react";
import studentReducer, { ACTIONS } from "./reducers/studentReducer";
import useLocalStorage from "./hooks/useLocalStorage";
import { useTheme } from "./contexts/ThemeContext";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const initialStudents = [
    { id: 1718928000000, name: "Nguyễn Văn A", age: 21, major: "Software Engineering" },
    { id: 1718928000001, name: "Trần Thị B", age: 20, major: "Information Technology" }
];

export default function App() {
    const { darkMode, toggleTheme } = useTheme();

    const [storedStudents, setStoredStudents] = useLocalStorage("students", initialStudents);

    const [students, dispatch] = useReducer(studentReducer, storedStudents);

    useEffect(() => {
        setStoredStudents(students);
    }, [students, setStoredStudents]);

    const [editingStudent, setEditingStudent] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterMajor, setFilterMajor] = useState("All Majors");

    const handleAddOrEdit = (studentData) => {
        if (editingStudent) {
            dispatch({ type: ACTIONS.UPDATE_STUDENT, payload: studentData });
            setEditingStudent(null); 
        } else {
            dispatch({ type: ACTIONS.ADD_STUDENT, payload: studentData });
        }
    };

    const handleDelete = (id) => {
        dispatch({ type: ACTIONS.DELETE_STUDENT, payload: id });
    };

    const handleEditClick = (student) => {
        setEditingStudent(student);
    };

    const displayedStudents = students.filter((student) => {
        const matchName = student.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchMajor = filterMajor === "All Majors" || student.major === filterMajor;
        return matchName && matchMajor;
    });

    return (
        <div 
            style={{ 
                padding: "20px", 
                minHeight: "100vh",
                background: darkMode ? "#333" : "#fff", 
                color: darkMode ? "#fff" : "#000" 
            }}
        >
            <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <h2>Student Management</h2>
                <button onClick={toggleTheme}>
                    Toggle {darkMode ? "Light" : "Dark"} Mode
                </button>
            </header>

            <StudentForm 
                onSubmit={handleAddOrEdit} 
                editingStudent={editingStudent} 
                onCancelEdit={() => setEditingStudent(null)} 
            />

            <hr style={{ margin: "20px 0" }} />

            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <select 
                    value={filterMajor} 
                    onChange={(e) => setFilterMajor(e.target.value)}
                >
                    <option value="All Majors">All Majors</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Business Administration">Business Administration</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Software Engineering">Software Engineering</option>
                </select>
            </div>

            <p><strong>Total students showing:</strong> {displayedStudents.length}</p>

            <StudentList 
                students={displayedStudents} 
                onEdit={handleEditClick} 
                onDelete={handleDelete} 
            />
        </div>
    );
}