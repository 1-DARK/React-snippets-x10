import React, { useState, useContext } from 'react'
import userContext from '../context/Usercontext.js'

const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const { setuser } = useContext(userContext);

    const handlesubmit = (e) => {
        e.preventDefault()
        setuser({ username, password }) // or send only username, up to your app logic
    };

    return (
        <div className="max-w-sm mx-auto mt-20 p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Login</h2>

            <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setusername(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
                className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                onClick={handlesubmit}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
                Submit
            </button>
        </div>

    )
}

export default Login
