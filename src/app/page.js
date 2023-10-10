"use client"

// 1. Import Area
// Import DefaultImport from 'somelibrary/  ./../somelocation'
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import { Button } from '@mui/material';


// 2. Define Area
// If a variable defined outside the function defination then it called global variable
let name = 'Mahesh';

function Home() {
  //2.1 Hooks Area
  let name2 = 'Rakesh';

  // const [variable, setVariable] = useState(intialData);
  const [name3, setName3] = useState('Ravi');

  useEffect(() => { // Hook-2
    console.log(`Hello ${name2} page loaded successfull now you can do anything`)
}, []);

//2.2 function definition area
const rohit = () => {
    const x = prompt("Please enter your name?")
    console.log(x);
    setName3(x);
}

  // every function may return something
  // 2 every function return some html i.e JSX 
  return (
    <main>
      <h1>Hello {name} </h1>
      <h1>Hello {name2} </h1><hr/> 
      <h1>Hello {name3} </h1>
      <Button variant='contained' onClick={rohit}>Enter Your Name</Button>
    </main>
  )
}

// 3. Export Area
// 3.1 default Export 
export default Home;