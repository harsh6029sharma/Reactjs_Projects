import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <center className="relative top-[40px]">
      <center className="h-[400px] w-[400px] bg-amber-200 rounded-3xl">
        <h2 className=" m-auto text-4xl text-blue-500">Counter App</h2>
        <div className=" text-4xl h-[200px] w-[200px] flex justify-center items-center">
          counter:{count}
        </div>
        <button
          onClick={() => increase()}
          className="bg-blue-300 m-2.5 p-3 rounded-3xl cursor-pointer"
        >
          Increase
        </button>
        <button
          onClick={() => decrease()}
          className="bg-red-300 m-2.5 p-3 rounded-3xl cursor-pointer"
        >
          Decrease
        </button>
        <button
          onClick={() => reset()}
          className="bg-yellow-300 m-2.5 p-3 rounded-3xl cursor-pointer"
        >
          Reset
        </button>
      </center>
    </center>
  );
};

export default App;
