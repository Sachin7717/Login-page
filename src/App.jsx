import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Login">
        <div className="box">
          Username<input type="text" />
        </div>
      </div>
    </>
  )
}

export default App
