import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/snoopy/iconn.png'
import './App.css'
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className='flex justify-center items-center gap-4 mb-8'>
          <a href="https://vite.dev" target="_blank" rel="noopener">
            <img src={viteLogo} className="logo h-24 w-24 hover:drop-shadow-lg transition-all" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener">
            <img src={reactLogo} className="logo react h-24 w-24 hover:drop-shadow-lg transition-all" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Vite + React
        </h1>
        
        <div className="card mb-8">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="
              px-6 py-3 rounded-lg font-medium
              bg-blue-500 hover:bg-blue-600 
              dark:bg-blue-600 dark:hover:bg-blue-700 
              text-white transition-colors duration-200
              shadow-md hover:shadow-lg
            "
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Edit <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-md font-comic">
          Click on the Vite and React logos to learn more. Use the theme toggle in the top-right corner!
        </p>
      </div>
    </div>
  )
}

export default App
