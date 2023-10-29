import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasChar, setHasChar] = useState(false);

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(hasNumber){
      str += '0123456789'
    }

    if(hasChar){
      str += "!@#$%^&*(){}[]~`"
    }

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()* str.length)
      pass += str[char]
      
    }

    setPassword(pass)
  }, [length, hasNumber, hasChar, setPassword])


  useEffect(()=>{
    passwordGenerator()
  }, [length, hasChar, hasNumber, passwordGenerator])


  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,21)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <h1 className='text-4xl text-center text-slate-100'>Password Generator</h1>

      <div className="bg-slate-800 my-4 w-{72rem}">

        <div className='flex'>
          <div className='bg-slate-50 m-4 px-4 w-4/5 rounded-md py-2 text-zinc-800 font-medium text-lg text-left'>
            <input className='outline-none text-yellow-800' readOnly type="text" placeholder='Password' value={password}  ref={passwordRef}/>
          </div>
          <button className='bg-cyan-600 hover:bg-cyan-700 m-4 px-4 w-1/5 text-slate-50  rounded-md' onClick={copyPassword}>Copy</button>
        </div>

        <div className='text-yellow-600 flex'>  
          <div className='m-4'>
            <input type="range" min={6} max={20} id="length" className='cursor-pointer' value={length} onChange={(e)=>setLength(e.target.value)}/>
            <label htmlFor="length" className='mx-4 text-lg'>Length: {length}</label>
          </div>

          <div className='m-4'>
            <input type="checkbox" id="number" onChange={()=> setHasNumber((prev)=>!prev)}/>
            <label htmlFor="number" className='mx-4 text-lg'>Number</label>
          </div>

          <div className='m-4'>
            <input type="checkbox" id="character" onChange={()=> setHasChar((prev)=>!prev)}/>
            <label htmlFor="character" className='mx-4 text-lg'>Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
