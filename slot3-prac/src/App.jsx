import { useState } from "react";

const randomQuoteList = ["Today is a good day, yeh?", "Nothing special :)", "Good luck!"];
const generateRandomQuote = () => {
  return randomQuoteList[Math.floor(Math.random()*randomQuoteList.length)];
}

const Header = () => {
  const name = "Hehe";
  const isLoggedIn = true;
  const list = ["Item1", "Item2", 45];
  const user = {name: "Hehehe", age: 45, gender: "Male"};

  const [follow, setFollow] = useState(false);

  return (
    <>
      <p style={{color:"blue"}}>Just some bullshit stuff</p>
      <p>Today is {new Date().toLocaleDateString()}. Now is {new Date().toLocaleTimeString()}</p>
      <p>Hello {name}</p>
      <h2>{2+3}</h2>
      <h2>{isLoggedIn ? 'Hehe' : "Get lost"}</h2>
      <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      
      <div>
        <h1>User Information</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender}</p>
      </div>

      <img src="https://scrimba.com/articles/content/images/2022/11/How-to-use-Array.map-to-render-a-list-of-items-in-React.png" 
      alt="Just a random image" className="avatar"/>

      <div>
        <h1>Special quote of the day:</h1>
        <p>{generateRandomQuote()}</p>
      </div>

      <button onClick={() => setFollow(!follow)}>
        {!follow ? "Follow me" : "Following"}
      </button>
    </>
  )
}

const products = [
    {
      id: 1,
      name: "Laptop",
      price: 2000,
      stock: true
    },
    {
      id: 2,
      name: "Mouse",
      price: 20,
      stock: false
    }
  ];
  //BT1: Cho mảng các sp. Hiển thị danh sách các sản phẩm, với tình trạng còn hàng hay hết hàng trong stock

  function generateProductList() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
            {products.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.stock ? 'Còn hàng' : 'Hết hàng'}</td>
                </tr>
              )
            })}
          </tbody>
      </table>
    );
  }

  const students = [
      {
          id: 1,
          name: "Nguyen Van A",
          age: 20,
          score: 8.5
      },
      {
          id: 2,
          name: "Tran Thi B",
          age: 21,
          score: 6.8
      },
      {
          id: 3,
          name: "Le Van C",
          age: 19,
          score: 4.2
      },
      {
          id: 4,
          name: "Pham Thi D",
          age: 22,
          score: 9.1
      },
      {
          id: 5,
          name: "Hoang Van E",
          age: 20,
          score: 5.0
      }
  ];
  //BT2: Cho 1 mảng các đối tượng Student (ID, Name, Age, Score): Hiển thị danh sách sinh viên, hiển thị ở cột kết quả là nếu điểm >=8 "Giỏi", điểm >=5 "Khá" Ngược lại là "Trung Bình"

  function generateStudentList() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Score</th>
          </tr>
          </thead>
          <tbody>
            {students.map(std => {
              return (
                <tr>
                  <td>{std.id}</td>
                  <td>{std.name}</td>
                  <td>{std.age}</td>
                  <td>{std.score > 8 ? "Giỏi" : std.score > 5 ? "Khá" : "Trung bình"}</td>
                </tr>
              )
            })}
          </tbody>
      </table>
    );
  }

const App = () => {
  return (
    <>
    <h1>Welcome to react!</h1>
    <p>Hello world</p>
    {/* <Header /> */}
    <h1>Product list:</h1>
    {generateProductList()}
    <h1>Student List:</h1>
    {generateStudentList()}
    </>
  )
}

export default App