import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <>
    <footer class="bg-dark text-light text-center py-4 mt-5">
    <div class="container">
      <h2 class="mb-2">Grab It Now</h2>
      <p class="mb-3">Your one-step shop for everything you love!</p>

      {/* <!-- Social Icons --> */}
      <div class="mb-3">
        <a href="https://www.instagram.com" target="_blank" class="text-light mx-2 fs-4">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" class="text-light mx-2 fs-4">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" class="text-light mx-2 fs-4">
          <i class="bi bi-twitter-x"></i>
        </a>
      </div>

      {/* <!-- Copyright --> */}
      <div class="small text-secondary">
        &copy; 2025 RollCart. All Rights Reserved.
      </div>
    </div>
           
  </footer>
    </>
  )
}

export default Footer