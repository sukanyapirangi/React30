import React, { useState } from 'react'


const Counter = () => {
    const [count , setCount] = useState(0)
    const [history, setHistory]= useState([0]);
    const [position, setPosition] = useState(0);

    const currentValue = history[position]

    function plus(){

    }
    function minus(){

    }


  return (
    <div className='flex bg-amber-50-600'>
      <h1>COUNTER WITH UNDO REDO</h1>

      <div className='flex mt-15 justify-center gap-6'>
        <div className='text-7xl font-bold tabular-nums'>
             {currentValue}
        </div>
        <div className='gap-10 flex'>
       <button className='h-10 px-6 bg-gray-400'>Minus</button>
       <button className='h-10 px-6 bg-gray-400'>Plus</button>
       <button className='h-10 px-6 bg-gray-400'>Reset</button>
       </div>
       <div className=''>
        <button>
           Undo
        </button>
       </div>
      </div>
    </div>
  )
}

export default Counter
