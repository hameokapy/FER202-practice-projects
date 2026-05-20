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

const App = () => {
  return (
    <>
    <h1>Welcome to react!</h1>
    <p>Hello world</p>
    <Header />
    </>
  )
}

export default App