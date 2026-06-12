import {  useState } from "react";

export default function Exe2() {
    const fakeData = ["React", "NodeJS", "MongoDB", "Express", "Angular", "VueJs"];
    const [inputValue, setInputValue] = useState("");

    const filteredList = fakeData.filter(item =>
        item.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div className="text-center">
            <label htmlFor="searchInput">Search: </label>
            <input type="text" name="searchInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <ul className="list-unstyled">
                {filteredList.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}