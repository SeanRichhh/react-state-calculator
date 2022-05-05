import "./App.css"
import {useState} from "react"


function App() { 
// NumOne is the variable storing the current value
// setNumberOne is a function that accepts a new value, which then passes to the numOne
  const [numOne, setNumberOne] = useState(0)
  // opSign is the variable storing the current value
 // setOpSign is a function that accepts a new value, which then passes to the opSign
  
  const [opSign, setOpSign] = useState("+")
// NumTwo is the variable storing the current value
// setNumberTwo is a function that accepts a new value, which then passes to the numTwo
  const [numTwo, setNumberTwo] = useState(0)
  const [sumOf, setSumOf] = useState(0)

  const sumOfCalucator = () => {
    if (opSign === "+") {
      setSumOf(Number(numOne) + Number(numTwo));
    }
    if (opSign === "-") {
      setSumOf(Number(numOne) - Number(numTwo));
    }
    if (opSign === "*") {
      setSumOf(Number(numOne) * Number(numTwo));
    }
    if (opSign === "÷") {
      setSumOf(Number(numOne) / Number(numTwo));
    }
  };



  return (
    <div className="calculator">
        <div className="panel">
          <p>{numOne}</p>
          <div className="numbers">
            <button onClick={() => setNumberOne(1)}>1</button>
            <button onClick={() => setNumberOne(2)}>2</button>
            <button onClick={() => setNumberOne(3)}>3</button>
            <button onClick={() => setNumberOne(4)}>4</button>
            <button onClick={() => setNumberOne(5)}>5</button>
            <button onClick={() => setNumberOne(6)}>6</button>
            <button onClick={() => setNumberOne(7)}>7</button>
            <button onClick={() => setNumberOne(8)}>8</button>
            <button onClick={() => setNumberOne(9)}>9</button>
            <button onClick={() => setNumberOne(0)}>0</button>
            <button onClick={() => setNumberOne("")}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{opSign}</p>
          <div className="numbers">
            <button onClick={() => setOpSign("+")}>+</button>
            <button onClick={() => setOpSign("-")}>-</button>
            <button onClick={() => setOpSign("*")}>*</button>
            <button onClick={() => setOpSign("÷")}>÷</button>
            <button onClick={() => setOpSign("")}>clear</button>
          </div>
        </div>

        <div className="panel">
          <p>{numTwo}</p>
          <div className="numbers">
          <button onClick={() => setNumberTwo(1)}>1</button>
            <button onClick={() => setNumberTwo(2)}>2</button>
            <button onClick={() => setNumberTwo(3)}>3</button>
            <button onClick={() => setNumberTwo(4)}>4</button>
            <button onClick={() => setNumberTwo(5)}>5</button>
            <button onClick={() => setNumberTwo(6)}>6</button>
            <button onClick={() => setNumberTwo(7)}>7</button>
            <button onClick={() => setNumberTwo(8)}>8</button>
            <button onClick={() => setNumberTwo(9)}>9</button>
            <button onClick={() => setNumberTwo(0)}>0</button>
            <button onClick={() => setNumberTwo("")}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{sumOf}</p>
          <div>
            <button onClick={() => sumOfCalucator("")}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
