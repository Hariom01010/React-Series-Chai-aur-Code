import React, {useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { updateTodo, removeTodo } from '../features/todo/todoSlice'

function Todo() {

    const [value, setTodoMsg] = useState("")
    const [isEditable, setIsEditable] = useState(false)
    const todos = useSelector((state)=> { return state.todos})
    const dispatch = useDispatch()

    const update = ()=>{
        setIsEditable(!isEditable)
    }

    return (
        <>
            {todos.map((todo)=>{
              return  <li key={todo.id} className='list-none bg-slate-600 w-[50rem] my-4 mx-auto text-left px-8 py-3 rounded-md flex justify-between mb-8'>
                    {isEditable? <input type="text" value={todo.text} className='' onChange={(e)=>{setTodoMsg(e.target.value)}}  placeholder='Write Todo...'/>: <span className='mr-[25rem] text-lg'>{todo.text}</span>}
                    <button className="bg-red-800 px-3 rounded-md hover:bg-red-900" onClick={()=> dispatch(removeTodo(todo.id))}>X</button>
                    <button className="bg-red-800 px-3 rounded-md hover:bg-red-900" onClick={update}>🖊</button>
                
                </li>
            })}
        </>
    )
}

export default Todo