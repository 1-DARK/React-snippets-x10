import { useState } from 'react'
import './App.css'

function App() {
  const [color, Setcolor] = useState('olive')
  // function changecolor(color) {
  //   Setcolor(color)
  // }
  return (
    <>
      <div className='w-full h-screen duration-200 bg-black' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
            <button
              onClick={() => Setcolor('red')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >Red</button>
            <button
              onClick={() => Setcolor('green')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >Green</button>
            <button
              onClick={() => Setcolor('blue')}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
