import { useRef, useState } from "react"

export default function Exe1() {

    // C1:
    // const [list, setList] = useState([]);
    // const inputRef = useRef();
    // return (
    //     <>
    //         <input type="text" ref={inputRef} />
    //         <button onClick={() => {
    //             const initialValue = inputRef.current.value;
    //             setList(prev => [...prev, initialValue]);
    //             inputRef.current.value = "";
    //         }}>Add list</button>
    //         <div>
    //             {list.map((item, index) => (
    //                 <p key={index}>{item}</p>
    //             ))}
    //         </div>
    //     </>
    // )

    // C2:
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");

    return (
        <>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
            <button onClick={() => {
                setList(prev => [...prev, value]);
                setValue("");
            }}>Add list</button>
            <div>
                {list.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </>
    )
}