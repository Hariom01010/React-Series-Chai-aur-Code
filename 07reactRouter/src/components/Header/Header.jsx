import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

function Header() {

    const [theme,setTheme] = useState("dark")

    const changeTheme = ()=>{
        if(theme == "dark"){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }

  return (
    <>
        <header className='shadow-md'>
            <nav className='flex justify-around'>
                <div className='m-3'>
                    <h1 className='text-3xl font-bold'>your <span className='text-red-800'>logo</span></h1>
                </div>

                <div className='m-4'>
                    <ul className='flex justify-between font-medium '>
                        <li className='px-4 py-2'><NavLink to="/" className={({isActive})=>`${isActive? "text-orange-700": "text-slate-50"}`}>Home</NavLink></li>
                        <li className='px-4 py-2'><NavLink to="/about" className={({isActive})=>`${isActive? "text-orange-700": "text-slate-50"}`}>About</NavLink></li>
                        <li className='px-4 py-2'><NavLink to="/contact" className={({isActive})=>`${isActive? "text-orange-700": "text-slate-50"}`}>Contact</NavLink></li>
                        <li className='px-4 py-2'><NavLink to="/github" className={({isActive})=>`${isActive? "text-orange-700": "text-slate-50"}`}>Github</NavLink></li>
                    </ul>
                </div>

                <div className='flex'>
                    <div className='m-6'>
                        <label className="relative inline-flex items-center cursor-pointer ">
                            <input type="checkbox" value="" className="sr-only peer outline-none" onChange={changeTheme}/>
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{theme == "dark" ? "🌑" : "☀"}</span>
                        </label>
                    </div>

                    <button className='bg-red-800 text-slate-50 rounded-md px-4 py-2 m-4'>Get Started</button>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header