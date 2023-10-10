'use client'
import { Button } from '@mui/material'
// 1. Import Area
import React, { useEffect, useState } from 'react'

// 2. Define Area


const page = () => {
    //2.1 Hooks area
    const [name4, setName4] = useState('Vikki') //Hook-1

    useEffect(() => { // Hook-2
        console.log(`Hello ${name4} page loaded successfull now you can do anything`)
    }, []);

    //2.2 function definition area
    const mahesh = () => {
        const x = prompt("Please enter your name?")
        console.log(x);
        setName4(x);
    }


    //Function returning JSX
    return (
        <>
            <h1>Hello {name4} </h1>
            <div>This is a test page</div>
            <Button variant='contained' onClick={mahesh}>Enter Your Name</Button>
        </>
    )
}

//3. Export Area
// 3.1 Default Export 
export default page;