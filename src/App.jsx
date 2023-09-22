import { useState } from 'react'
import './App.css'
import arr from './data';
import NewsParent from './NewsParent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {arr.map((data, index) => (
        <NewsParent key={index} title={data.title} content={data.content} />
       )) 
       
       }
    </>
  )
}

export default App
