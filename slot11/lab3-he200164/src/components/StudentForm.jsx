import { useEffect, useState } from "react";

export default function StudentForm({onSubmit, editingStudent, onCancelEdit, majorList}) {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        major: ""
    });

    useEffect(() => {
        const load = () => {
            if (editingStudent) {
                setFormData(editingStudent);
            } else {
                setFormData({ name: "", age: "", major: "" });
            }
        }
        load();
    }, [editingStudent]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!formData.name.trim() || !formData.age || !formData.major.trim()) {
            alert("Cannot leave any input field empty!")
            return;
        }
        if(window.confirm("Are you sure to add new student?")) {
            onSubmit(formData);
            
            setFormData({ name: "", age: "", major: "" });

        }
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
            <input
                className="flex-fill"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter name..."
            />
            <input
                className="flex-fill"
                name="age"
                type="number"
                min={0}
                max={100}
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Enter age..."
            />
            <select
                className="flex-fill"
                name="major"
                value={formData.major}
                onChange={handleInputChange}
            >
                <option value="">
                    -- Select major --
                </option>
                
                {majorList.map((major, index) => (
                    <option key={index} value={major}>
                        {major}
                    </option>
                ))}
            </select>
            <div className="text-center">
            <button type="submit">
                {editingStudent ? "Edit" : "Add"} Student
            </button>
            {editingStudent && (
                <button type="button" onClick={onCancelEdit}>
                    Cancel
                </button>
            )}
            </div>
        </form>
    )
}