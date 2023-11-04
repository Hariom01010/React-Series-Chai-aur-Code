import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../features/todo/todoSlice'


function AddTodo() {

    const [todoMsg, setTodoMsg] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addTodo(todoMsg))
        setTodoMsg("")
    }

  return (
    <>
        <form onSubmit={handleSubmit} className='mb-28 mt-[8rem] flex justify-center'>
            <input type="text" className='text-black p-2 w-[30rem] text-lg rounded-l-lg shadow-inner bg-slate-200 outline-none' onChange={(e)=>{setTodoMsg(e.target.value)}}  placeholder='Write Todo...'/>
            <button type="submit" className='bg-green-600 p-2 rounded-r-lg text-lg'>Add Note</button>
        </form>
    </>
  )
}

export default AddTodo