import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


const App = () =>{
  return(

    <>
    <header>
  
        <Navbar />
    </header>
    <main className='container-fluid mt-4 p-5'>

        <Outlet />

    </main>
    <footer>
         <Footer />
    </footer>
    </>
  );


}


export default App
