import React from 'react'
import DisplayTime from './components/DisplayTime'

const App = () => {
  return (
    <center className='flex flex-col h-[300px] w-[300px] bg-blue-200 mx-auto my-auto'>
      <h1 className='text-blue-500 '>Digital Clock</h1>
      <DisplayTime/>
    </center>
  )
}

export default App