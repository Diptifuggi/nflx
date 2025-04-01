import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LumpsumCalculator from './screen/Lumpsum'
// import Lumpsum from './screen/Lumpsum'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LumpsumCalculator />
    </>
  )
}

export default App
