import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <>
     <h1 className='text-center m-8 font-bold text-3xl'>Todo List App with Redux Toolkit</h1>
     <AddTodo />
     <Todo />
    </>
  )
}

export default App
