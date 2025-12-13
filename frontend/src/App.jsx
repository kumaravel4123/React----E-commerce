import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


const App = () =>{
  return(

    <>
    <header>
  
        <Navbar />
    </header>
    <main className='container-fluid mt-1'>

        <Outlet />

    </main>
    
    </>
  );


}


export default App
