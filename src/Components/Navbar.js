import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className="text">
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.color}`} href="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className={`nav-link active text-${props.color}`} aria-current="page" to="/">{props.home}</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active text-${props.color}`} to="/about">{props.features}</Link>
              </li>
          
            </ul>
            <button type="button" onClick={() => props.toggleMode('dark')} className="btn btn-primary mx-2">Dark Mode</button>
            <button type="button" onClick={() => props.toggleMode('light')} className="btn btn-primary mx-2">Light Mode</button>
            <button type="button" onClick={() => props.toggleMode('pink')} className="btn btn-primary mx-2">Pink Mode</button>
            <button type="button" onClick={() => props.toggleMode('purple')} className="btn btn-primary mx-2">Purple Mode</button>


          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {home: PropTypes.string.isRequired}
Navbar.defaultProps = {home: "homi"}