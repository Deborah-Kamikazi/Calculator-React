import "./App.css";
import { useState } from "react";
function App() {
  const [number, setNumber] = useState("");

  function handle(value){
    if(value === "="){
      setNumber(eval(number))
    }
    else if(value === "AC"){
      setNumber("")
    }
    else {
     setNumber(number+value) 
    }
  }

  return (
    <div className="flex justify-center items-cente my-24">
      <div className="grid grid-cols-4 grid-rows-6 rounded-lg font-semibold text-[24px] overflow-auto">
        <div className="text-right col-span-4 bg-gray-300 p-4 text-3xl">
          {number}
        </div>
        <button className="row-start-2 key" onClick={() => handle("AC")}>
          AC
        </button>
        <button className="row-start-2 key" onClick={() => handle("+/-")}>
          +/-
        </button>
        <button className="row-start-2 key" onClick={() => handle("%")}>
          %
        </button>
        <button
          className="row-start-2 key operation"
          onClick={() => handle("÷")}
        >
          ÷
        </button>
        <button className="key operation" onClick={() => handle("*")}>
          X
        </button>
        <button className="row-start-3 key" onClick={() => handle("7")}>
          7
        </button>
        <button className="row-start-3 key" onClick={() => handle("8")}>
          8
        </button>
        <button className="row-start-3 key" onClick={() => handle("9")}>
          9
        </button>
        <button className="key operation" onClick={() => handle("-")}>
          -
        </button>
        <button className="row-start-4 key" onClick={() => handle("4")}>
          4
        </button>
        <button className="row-start-4 key" onClick={() => handle("5")}>
          5
        </button>
        <button className="row-start-4 key" onClick={() => handle("6")}>
          6
        </button>
        <button className="key operation" onClick={() => handle("+")}>
          +
        </button>
        <button className="row-start-5 key" onClick={() => handle("1")}>
          1
        </button>
        <button className="row-start-5 key" onClick={() => handle("2")}>
          2
        </button>
        <button className="row-start-5 key" onClick={() => handle("3")}>
          3
        </button>
        <button
          className="border-gray-400 col-span-2 border"
          onClick={() => handle("0")}
        >
          0
        </button>
        <button
          className="col-start-3 row-start-6 key"
          onClick={() => handle(".")}
        >
          .
        </button>
        <button
          className="col-start-4 row-start-6 key operation"
          onClick={() => handle("=")}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
