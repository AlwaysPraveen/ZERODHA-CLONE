import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg border-bottom" 
      style={{
        backgroundColor: '#FFF',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        paddingTop:'2.7rem',
        paddingBottom:'1.3rem',
      }}
    >
      <div className="container mb-4">
        <Link className="navbar-brand" to="/">
          <img src='media/images/logo.svg' alt='Logo' className='logo' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to='products'>Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to='pricing'>Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to='support'>Support</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true"><i className="fa-solid fa-bars"></i></Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;