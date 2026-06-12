import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Exe7() {
  // 1. Quản lý 2 state theo đề bài
  const [items, setItems] = useState([
    "Apple 🍎",
    "Banana 🍌",
    "Orange 🍊",
    "Grapes 🍇",
  ]);
  const [draggingItem, setDraggingItem] = useState(null);

  // Sự kiện khi bắt đầu kéo
  const handleDragStart = (index) => {
    setDraggingItem(index); // Lưu lại vị trí item đang kéo
  };

  // Sự kiện khi đang kéo đè lên item khác (Để thực hiện hoán đổi vị trí lập tức)
  const handleDragOver = (e, targetIndex) => {
    e.preventDefault(); // Bắt buộc phải có để kích hoạt drop công thức

    if (draggingItem === null || draggingItem === targetIndex) return;

    // Sử dụng thuật toán splice để sắp xếp lại danh sách
    const updatedItems = [...items]; // Sao chép mảng gốc để tránh mutate state trực tiếp
    const [movedItem] = updatedItems.splice(draggingItem, 1); // Bước 1: Cắt phần tử cũ ra
    updatedItems.splice(targetIndex, 0, movedItem); // Bước 2: Thêm vào vị trí mới

    setDraggingItem(targetIndex); // Cập nhật lại index mới của item đang kéo
    setItems(updatedItems); // Cập nhật lại state danh sách mới
  };

  // Sự kiện khi kết thúc kéo thả
  const handleDragEnd = () => {
    setDraggingItem(null); // Reset trạng thái về null
  };

  return (
    <Container>
        <h1>Exericse 7: </h1>
        <Container className="w-75 text-center">
            <h3>Drag and Drop List</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item, index) => (
                <li
                    key={item}
                    draggable // Bật tính năng kéo cho thẻ li
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragEnd={handleDragEnd}
                    style={{
                    padding: "10px",
                    margin: "5px 0",
                    backgroundColor: draggingItem === index ? "#e0e0e0" : "#f0f0f0", // Đổi màu khi đang kéo
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    cursor: "grab",
                    opacity: draggingItem === index ? 0.5 : 1, // Làm mờ item đang được kéo
                    }}
                >
                    {item}
                </li>
                ))}
            </ul>
      </Container>
    </Container>
  );
}
