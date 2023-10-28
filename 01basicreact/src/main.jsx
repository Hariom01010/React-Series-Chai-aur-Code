import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return <> 
    <h1>Custom App</h1>
  </>
}

// const ReactElement = {
//   type: "a",
//   props: {
//       href: "https://www.google.com",
//       target: "_blank"
//   },
//   children: "Click Me to visit google"
// }

const anotherElement = (
  <a href="https://www.google.com" targer = "_blank">Visit Google</a>
)

const firstName = " | Hariom "
const lastName = "Vashista"

const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  "click me to visit google",
  firstName,
  lastName
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp />
    // anotherElement
    reactElement
    // <App />
)
