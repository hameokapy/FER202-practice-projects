export default function StudentItem({ student, onEdit, onDelete }) {
    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.major}</td>
            <td>
                <button onClick={() => onEdit(student)}>Edit</button>
                <button onClick={() => onDelete(student.id)}>Delete</button>
            </td>
        </tr>
    );
}