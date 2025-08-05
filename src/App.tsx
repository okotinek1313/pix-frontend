import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vite + React + TypeScript + Tailwind CSS
          </h1>
          <p className="text-gray-600">
            A modern React development stack with Tailwind CSS
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Counter Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Interactive Counter
            </h2>
            <p className="text-gray-600 mb-4">
              Test state management with simple buttons
            </p>
            
            <div className="space-y-4">
              <div className="text-2xl font-mono text-center p-4 bg-gray-100 rounded-lg">
                Count: {count}
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setCount(count + 1)}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Increment
                </button>
                <button 
                  onClick={() => setCount(count - 1)}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Decrement
                </button>
                <button 
                  onClick={() => setCount(0)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Input Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Input Component
            </h2>
            <p className="text-gray-600 mb-4">
              Test controlled input with live feedback
            </p>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Type something..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">You typed:</p>
                <p className="font-mono text-gray-800">
                  {inputValue || 'Nothing yet...'}
                </p>
              </div>
              <button 
                onClick={() => setInputValue('')}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Clear Input
              </button>
            </div>
          </div>
        </div>

        {/* Tech Stack Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Tech Stack
          </h2>
          <p className="text-gray-600 mb-4">
            Technologies used in this project
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'React 18',
              'TypeScript', 
              'Vite',
              'Tailwind CSS',
              'ESLint',
              'PostCSS',
              'Autoprefixer',
              'Hot Reload'
            ].map((tech) => (
              <div 
                key={tech}
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-center text-sm font-medium text-gray-700 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
