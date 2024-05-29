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
          <h1>testing</h1>
        </div>
      </div>
    </>
  )
}

export default App
