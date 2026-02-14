import React from 'react'
import Counter from './components/counter'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-grey-900 flex flex-col'>
      <header className='border-b py-4'>
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl font-bold'>
            30 react js projects

          </h1>
        </div>
      </header>
      <main>
        <Counter/>
      </main>
     
    </div>
  )
}

export default App
