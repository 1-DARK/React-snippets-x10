import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((response) => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setdata(data)
    //         })
    // }, [])
    const data = useLoaderData()
    return (
        <div className='text-center text-3xl m-4 bg-gray-600 text-white p-4'>
            <img
                className="object-center mx-auto rounded-full shadow-lg"
                src={data.avatar_url}
                width={300}
                alt="Avatar"
            />
            <p>{data.login}</p>
            Github Followers : {data.followers}


        </div>
    )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}