import { useState } from 'react'


function App() {
  let [color, setColor] = useState("green")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
            onClick={() => setColor("black")}
            className='outline-none px-4 py-1
            rounded-full text-white shadow-lg'
            style={{backgroundColor:"black"}}>black
          </button>
          <button 
            onClick={() => setColor("Gray")}
            className='outline-none px-4 py-1
            rounded-full text-white shadow-lg'
            style={{backgroundColor:"Gray"}}>Gray
          </button>
          <button 
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1
            rounded-full text-white shadow-lg'
            style={{backgroundColor:"red"}}>red
          </button>
          <button 
            onClick={() => setColor("Orange")}
            className='outline-none px-4 py-1
            rounded-full text-white shadow-lg'
            style={{backgroundColor:"Orange"}}>Orange
          </button>
          <button 
            onClick={() => setColor("Yellow")}
            className='outline-none px-4 py-1
            rounded-full text-teal shadow-lg'
            style={{backgroundColor:"Yellow"}}>Yellow
          </button>
          <button 
            onClick={() => setColor("Green")}
            className='outline-none px-4 py-1
            rounded-full text-white shadow-lg'
            style={{backgroundColor:"Green"}}>Green
          </button>
          <button 
            onClick={() => setColor("Teal")}
            className='outline-none px-4 py-1
            rounded-full text-white shadow-lg'
            style={{backgroundColor:"Teal"}}>Teal
          </button>
          <button 
            onClick={() => setColor("Blue")}
            className='outline-none px-4 py-1
            rounded-full text-white shadow-lg'
            style={{backgroundColor:"Blue"}}>Blue
          </button>
          <button 
            onClick={() => setColor("Indigo")}
            className='outline-none px-4 py-1
            rounded-full text-white shadow-lg'
            style={{backgroundColor:"Indigo"}}>Indigo
          </button>
          <button 
            onClick={() => setColor("Purple")}
            className='outline-none px-4 py-1
            rounded-full text-white shadow-lg'
            style={{backgroundColor:"Purple"}}>Purple
          </button>
          <button 
            onClick={() => setColor("Pink")}
            className='outline-none px-4 py-1
            rounded-full text-white shadow-lg'
            style={{backgroundColor:"Pink"}}>Pink
          </button>
          <button
            onClick={() => setColor("white")}
            className='outline-none px-4 py-1
            rounded-full text-black shadow-lg'
            style={{backgroundColor:"white"}}>white
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
