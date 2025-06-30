import { useState } from 'react'

import './App.css'
// You're using React's useState hook correctly to create a state variable named counter with an initial value of 15.
function App() {
  // let counter = 15
  const [counter, setcounter] = useState(15)
  // You might expect this to increase the counter by 4. However, due to how React batches state updates, all four calls to setcounter(counter + 1) will use the same counter value (15), so the counter will only increase by 1, not 4.
  const addValue = () => {
    setcounter(counter + 1);
    setcounter(counter + 1);
    setcounter(counter + 1);
    setcounter(counter + 1);
  }

  // const addValue = () => {
  //   setcounter((prev) => prev + 1);
  //   setcounter((prev) => prev + 1);
  //   setcounter((prev) => prev + 1);
  //   setcounter((prev) => prev + 1);
  // };
  //Now, each update will work on the latest value of counter, and it will increment by 4 as expected.

  const removeValue = () => {
    setcounter(counter - 1);
  }
  return (
    <>
      <h1>REACT COURSE</h1>
      <h2>Counter Value :{counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button> {" "}
      <button
        onClick={removeValue}
      >Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
