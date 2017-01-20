import { applyMiddleware, compose, createStore } from 'redux'

import React from 'react'
import ReactDOM from 'react-dom'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
  
const Counter = ({ 
  value,
  onIncrement,
  onDecrement
 }) => (
  <div> 
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>    
  </div>
)

const store = createStore(counter)

const render = () => {

  const addCounter = (list) => {
    list.push(0)    
    return list
  }

  const testAddCounter = () => {
    const listBefore = []
    const listAfter = [0]

    expect(
      addCounter(listBefore)
    ).toEqual(listAfter)
  }

  testAddCounter()
  console.log('All tests passed.')



  // ReactDOM.render(
  //   <Counter 
  //     value={store.getState()}
  //     onIncrement = {() =>
  //       store.dispatch({
  //         type: 'INCREMENT'
  //       })
  //     }
  //     onDecrement = {() =>
  //       store.dispatch({
  //         type: 'DECREMENT'
  //       })
  //     }  
  //   />,
  //   document.getElementById('root')
  // )
}
store.subscribe(render)
render()
