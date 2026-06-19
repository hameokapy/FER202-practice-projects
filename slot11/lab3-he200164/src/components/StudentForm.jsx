import { useEffect, useState } from "react";

export default function StudentForm({onSubmit, editingStudent, onCancelEdit}) {
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
        if (!formData.name.trim() || !formData.age || !formData.major.trim()) return;

        onSubmit(formData);
        
        setFormData({ name: "", age: "", major: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nhập tên..."
            />
            <input
                type="number"
                min={0}
                max={100}
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Nhập tuổi..."
                style={{width:'100px'}}
            />
            <input
                value={formData.major}
                onChange={handleInputChange}
                placeholder="Nhập chuyên ngành..."
            />
            <button type="submit">
                {editingStudent ? "Edit" : "Add"} Student
            </button>
            {editingStudent && (
                <button type="button" onClick={onCancelEdit}>
                    Cancel
                </button>
            )}
        </form>
    )
}