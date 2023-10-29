import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("#212121")
  

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='flex justify-center'>
        <div className='fixed flex flex-wrap top-12 px-4 bg-slate-50 rounded-md'>

          <button className='m-2 bg-red-500 border text-slate-100 px-4 rounded-md' onClick={()=> setColor("red")}>Red</button>
          <button className='m-2 bg-yellow-200 px-4 rounded-md' onClick={()=> setColor("yellow")}>Yellow</button>
          <button className='m-2 bg-orange-400 px-4 text-slate-100 rounded-md' onClick={()=> setColor("orange")}>Orange</button>
          <button className='m-2 bg-blue-500 px-4 text-slate-100 rounded-md' onClick={()=> setColor("blue")}>Blue</button>
          <button className='m-2 bg-cyan-500 px-4 rounded-md' onClick={()=> setColor("cyan")}>Cyan</button>
          <button className='m-2 bg-green-500 px-4 rounded-md' onClick={()=> setColor("green")}>Green</button>
          <button className='m-2 bg-violet-400 px-4 rounded-md text-slate-100' onClick={()=> setColor("violet")}>Violet</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
