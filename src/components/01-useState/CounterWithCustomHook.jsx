import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounterWithCustomHook = () => {

  const {counter,increment,decrement,reset}= useCounter();

  return (
    <div>
        <h1>Counter With Hook: { counter }</h1>
        <hr />

        <button className='btn' onClick={increment}>+1</button>
        <button className='btn' onClick={decrement}>-1</button>
        <button className='btn' onClick={reset}>reset</button>
    </div>
  )
}
