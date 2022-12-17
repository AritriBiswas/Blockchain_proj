import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
          
          <ul className='navList'>
          <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/mycharities">My Charities</Link>
              </li>
              <li>
                  <Link to="/createfund">Create Charity</Link>
              </li>
             
          </ul>
      </nav>
  )
}
