import React from "react";
import { Link } from 'react-router-dom';

import "./Notfound.css"

const Notfound = () => {
   return(
    <>
       <h2 className="error">404 Error Found</h2>
       <Link to="/" className="btn btn-primary btn-center">Home</Link>
       </>
   );
}

export default Notfound;