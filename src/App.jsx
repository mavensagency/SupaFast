import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header1 from './components/Header/Header1'
import Scrollheader from './components/Header/Scrollheader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header1/>
    <Scrollheader/>
    </>
  )
}

export default App
