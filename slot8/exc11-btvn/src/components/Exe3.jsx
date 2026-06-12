import { useState } from "react"

export default function Exe3() {
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState("");
    
    const handleCompute = () => {
        const num1 = Number(firstNum);
        const num2 = Number(secondNum);
        let finalValue = 0;

        switch (operator) {
            case '+': finalValue = num1 + num2; break;
            case '-': finalValue = num1 - num2; break;
            case '*': finalValue = num1 * num2; break;
            case '/': finalValue = num2 !== 0 ? num1 / num2 : "Lỗi chia cho 0"; break;
            default: finalValue = 0;
        }

        setResult(finalValue);
    }

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-3">
                    <label className="form-label" htmlFor="first">First: </label>
                </div>
                <div className="col-6">
                    <input className="form-control" type="number" id="first" value={firstNum} onChange={(e) => setFirstNum(e.target.value)}/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-3">
                    <label className="form-label" htmlFor="second">Second: </label>
                </div>
                <div className="col-6">
                    <input className="form-control" type="number" id="second" value={secondNum} onChange={(e) => setSecondNum(e.target.value)}/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-3">
                    <label className="form-label" htmlFor="operator">Operator: </label>
                </div>
                <div className="col-6">
                    <select className="form-select text-center" name="operator" id="operator" value={operator} onChange={e => setOperator(e.target.value)}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                </div>
            </div>
            <div className="text-center mb-3">
                <button onClick={handleCompute}>Compute</button>
                {/* 
                    Không truyền tham số → Viết tên hàm: {handleCompute}
                    Có truyền tham số → Dùng arrow function: {() => handleDelete(index)} 
                */}
            </div>
            <div className="row mb-3">
                <div className="col-3">
                    <label className="form-label" htmlFor="result">Result: </label>
                </div>
                <div className="col-6">
                    <input className="form-control" type="text" id="result" value={result} readOnly/>
                </div>
            </div>
        </div>
    )
}