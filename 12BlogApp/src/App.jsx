import { useEffect, useState } from 'react'
import { Header, Footer } from './components'
import { useDispatch } from "react-redux"
import authService from './appwrite/auth_service'
import { login, logout } from './store/authSlice'
import './App.css'



function App() {

  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userdata) => {
      if(userdata){
        dispatch(login({userdata}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setIsLoading(false))
  }, [])

  if(isLoading){
    return(
      <>
        <h1>Still Loading Data...</h1>
      </>
  )}else{
    return(
      <>
        <Header />
          <h1> Data is loaded</h1>
        <Footer />
      </>
    )
  }
}

export default App
