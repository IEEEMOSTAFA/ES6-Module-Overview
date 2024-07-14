import { useEffect, useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'

function App() {
//   const [count, setCount] = useState(0)

//   const watches = [
//     {Id: 1,name: 'Apple watch',price: 200},
//     {Id: 2,name: 'Samsung watch',price: 200},
//     {Id: 3,name: 'MI watch',price: 200},
//     {Id: 4,name: 'Pixel watch',price: 200},
//   ]
  // const watches = [
  //   {
  //     "id": 1,
  //     "name": "Apple Watch Series 8",
  //     "price": 399
  //   },
  //   {
  //     "id": 2,
  //     "name": "Samsung Galaxy Watch 5",
  //     "price": 279
  //   },
  //   {
  //     "id": 3,
  //     "name": "Garmin Forerunner 945",
  //     "price": 599
  //   },
  //   {
  //     "id": 4,
  //     "name": "Fitbit Versa 3",
  //     "price": 229
  //   },
  //   {
  //     "id": 5,
  //     "name": "Fossil Gen 6",
  //     "price": 299
  //   }
  // ]
  const [watches, setWatches] = useState([]);
  useEffect( () =>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  },[])
  
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
