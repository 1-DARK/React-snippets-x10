import React, { useContext } from 'react'
import userContext from '../context/Usercontext.js'

function Profile() {
    const { user } = useContext(userContext)
    if (!user) return <h1 className='text-4xl text-amber-50 '>Not Logged in</h1>
    return (
        <div className='text-4xl text-amber-50 gap-4'>
            <h1>  Profile : {user.username}</h1>
            <h1>  Password : {user.password}</h1>
        </div>
    )
}

export default Profile
