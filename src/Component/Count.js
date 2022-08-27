
import React, {useState} from 'react'

export default function Count() {
    const [count, setCount] = useState(0)

const handleCountUp = () => { 
    setCount(count + 1)
}
const handleCountDown = () => {
  setCount(count - 1)
}


  return (
    <>
    <h1>Count: {count}</h1>
    <button type='button' onClick={handleCountUp}>+</button>
    <button type='button' onClick={handleCountDown}>-</button>
    </>
  )
}
