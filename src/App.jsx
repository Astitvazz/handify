import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Content1 from './components/Content1'
import Circularcard from './components/Circularcard'
import Gridcircle from './components/Gridcircle'
import Squarecard from './components/Squarecard'
import Gridsquare from './components/Gridsquare'
import Videos from './components/Videos'
import Testimonials from './components/Testimonials'
import Learnmore from './components/Learnmore'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Content1/>
    <Gridcircle/>
    <Gridcircle/>
    
    <Gridsquare/>
    <Gridcircle/>
    <Gridsquare/>
    <Gridcircle/>
    <Gridcircle/>
    <Videos/>
    <Testimonials/>
    <Learnmore/>
    </>
  )
}

export default App
