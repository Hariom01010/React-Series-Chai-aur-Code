import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div>
      <hr className=' my-12'/>

      <div className='flex justify-around'>
        
        <div className=''>
          <h1 className='text-3xl font-bold'>your <span className='text-red-800'>logo</span></h1>
        </div>

        <div className='flex'>

          <div className='text-left w-[10rem]'>
            <ul>
              <li className='mb-4 font-bold'>Resources</li>
              <li className=' py-2 text-left'><NavLink to="/">Home</NavLink></li>
              <li className=' py-2 text-left'><NavLink to="/about">About</NavLink></li>
              <li className=' py-2 text-left'><NavLink to="/contact">Contact</NavLink></li>
              
            </ul>
          </div>

          <div className='mx-4'>
            <ul>
              <li className='mb-4 font-bold'>Follow Us</li>
              <li className='py-2 text-left'><a href="https://github.com/Hariom01010" target='_blank'>Github</a></li>
              <li className='py-2 text-left'><a href="https://www.instagram.com/hariom_vashista/" target='_blank'>Instagram</a></li>
              <li className='py-2 text-left'><a href="https://www.linkedin.com/in/hariom-vashista-603436226/" target='_blank'>LinkedIn</a></li>
            </ul>
          </div>

        </div>
      </div>




    </div>
    </>
  )
}

export default Footer