import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
 // yeh wala hamesha chalega jab jab comp render hoga 
  useEffect(() => {
    console.log(`component rendered or updated`);
  })

  //yeh wala sirf ek bar chalega 
  useEffect(() => {
    console.log('hi harsh ');
    return () => {
      console.log('component unmounterd: cleanup here because of this -> []');
    }
  }, [])

  useEffect(() => {
    console.log(`name changed to ${name}`);
  }, [name])

  useEffect(() => {
    console.log(`count chanaged to ${count}`);
  }, [count])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-amber-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm flex flex-col items-center">
        <p className="text-2xl font-bold text-blue-600 mb-4">Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl mb-6 transition"
        >
          Increment Count
        </button>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <p className="text-lg text-gray-700">Name: <span className="font-semibold">{name}</span></p>
      </div>
    </div>
  )
}

export default App