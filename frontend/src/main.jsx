import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css'
import Notfound from './pages/Notfound.jsx';
import ProductDetails from './pages/ProductDetails.jsx';


import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';
import { CurrencyProvider } from './context/CurrencyContext.jsx';



const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {path: "/", element: <Home />},
      {path: "about", element: <About />},
      {path: "contact", element: <Contact />},
      {path: "product/:id", element:<ProductDetails />}
    ],
    // errorElement: <Notfound />,
  },
])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ErrorBoundary>
      <CurrencyProvider>
        <RouterProvider router={router} />
      </CurrencyProvider>
    </ErrorBoundary>
  </StrictMode>,

// <StrictMode>
//   <ErrorBoundary>
//     <CurrencyProvider>
//       <RouterProvider router={router} />
//     </CurrencyProvider>
//   </ErrorBoundary>
// </StrictMode>,



)
