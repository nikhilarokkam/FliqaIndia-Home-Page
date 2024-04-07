import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/services'>Wedding</Link>
            </li>
            <li>
              <Link to='/portfolio'>Photography</Link>
            </li>
            <li>
              <Link to='/portfolio'>Film</Link>
            </li>
            <li>
              <Link to='/graphic-design'>Graphics</Link>
            </li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link to='/learning'>Course</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>CONTACT</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
