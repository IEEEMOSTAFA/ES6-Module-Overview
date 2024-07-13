import { useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  const watches = [
    {Id: 1,name: 'Apple watch',price: 200},
    {Id: 2,name: 'Samsung watch',price: 200},
    {Id: 3,name: 'MI watch',price: 200},
    {Id: 4,name: 'Pixel watch',price: 200},
  ]

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.Id} watch={watch}></Watch>)
      }
      
      {/* <Watch></Watch> */}
    </>
  )
}

export default App
