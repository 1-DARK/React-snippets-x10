import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
//  In JavaScript (especially in React or plain HTML with JS), an onChange function is used to detect and handle changes to form elements like inputs, selects, or textareas.
function App() {

  const [length, setLength] = useState(6)

  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false);

  const handleReload = () => {
    window.location.reload();
  };

  const generatepass = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, password])
  //useRef hook
  const passwordRef = useRef(null)
  useEffect(() => {
    generatepass()
  }, [length])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
    setCopied(true);
  }, [password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Captcha Generator</h1>
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
          <button className='outline-none bg-blue-300 text-white px-3 py-0.5 shrink-0'
            onClick={handleReload}
          > Refresh</button>
        </div>
        <div className='flex text-sm gap-x-2'>
        </div>
      </div>

    </>
  )
}

export default App
