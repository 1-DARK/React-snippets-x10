import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
//  In JavaScript (especially in React or plain HTML with JS), an onChange function is used to detect and handle changes to form elements like inputs, selects, or textareas.
function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false);
  const generatepass = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, password])
  //useRef hook
  const passwordRef = useRef(null)
  useEffect(() => {
    generatepass()
  }, [length, numberAllowed, charAllowed])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
    setCopied(true);
  }, [password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-amber-50 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
          > {copied ? 'Copied!' : 'Copy'}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value, setCopied(false)) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>

            <input
              type="checkbox"
              defaultChecked={numberAllowed} //defaultChecked={numberAllowed} is typically used in React with checkboxes or radio buttons to set their initial checked state.
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev, setCopied(false));
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>

            <input
              type="checkbox"
              defaultChecked={charAllowed} //defaultChecked={numberAllowed} is typically used in React with checkboxes or radio buttons to set their initial checked state.
              id="charallow"
              onChange={() => {
                setCharAllowed((prev) => !prev, setCopied(false));
              }}
            />
            <label htmlFor="charallow">Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
