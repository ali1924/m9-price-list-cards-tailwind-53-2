import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import NavbarRecap from './components/Navbar/NavbarRecap'
import PriceList from './components/PriceList/PriceList'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <NavbarRecap></NavbarRecap> */}
      <h1 className="text-7xl text-purple-600">
        Hello From Tailwind
      </h1>

      <PriceList></PriceList>
      <Dashboard></Dashboard>

    </div>

  )
}

export default App
