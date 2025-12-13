import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <>
    <footer className="bg-dark text-light text-center py-4 mt-5">
    <div className="container-fluid">
      <h2 className="mb-2">Grab It Now</h2>
      <p className="">Your one-step shop for everything you love!</p>

      {/* <!-- Copyright --> */}
      <div className="small text-secondary">
        &copy; 2025 RollCart. All Rights Reserved.
      </div>
    </div>
           
  </footer>
    </>
  )
}

export default Footer