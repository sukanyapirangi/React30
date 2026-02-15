import React, { useState } from 'react'

const Dropdown = () => {

    const [isopen, setIsopen] = useState(false)
  return (
    <div className='flex flex-col pt-[150px] justify-center bg-gray-400'>
      <h1>close dropdown on outside click</h1>
      <div className='relative'>
        <button variant = {'outline'} className={'w-full justify-between'}>
            Select an option 
            {/* <ChevronDown/> */}
        </button>

      </div>

    </div>
  )
}

export default Dropdown;
