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

    const handleEdit = (indexToDelete) => {
        const newValue = prompt("Enter new value: ", list[indexToDelete]);
        setList(prevList => prevList.map((item, index) => index === indexToDelete ? newValue : item));
    }

    const handleDelete = (indexToDelete) => {
        setList(prevList => prevList.filter((_, index) => index !== indexToDelete))
    }

    return (
        <div className="text-center">
            <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
            <button onClick={() => {
                setList(prev => [...prev, value]);
                setValue("");
            }}>Add list</button>
            <div className="fs-3">List of Items</div>
            <div className="p-3 d-flex gap-2 flex-column">
                {list.map((item, index) => (
                    <div key={index} className="d-flex gap-2 justify-content-center">
                        {item}
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}