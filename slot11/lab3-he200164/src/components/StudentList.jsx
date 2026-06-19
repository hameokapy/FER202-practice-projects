import StudentItem from "./StudentItem";

export default function StudentList({ students, onEdit, onDelete }) {
    if (students.length === 0) {
        return <p>Không có sinh viên nào.</p>;
    }

    return (
        <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%", textAlign: "left" }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Major</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <StudentItem 
                        key={student.id} 
                        student={student} 
                        onEdit={onEdit} 
                        onDelete={onDelete} 
                    />
                ))}
            </tbody>
        </table>
    );
}