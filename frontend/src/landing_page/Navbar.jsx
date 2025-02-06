import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor:'#FFF'}}>
    <div className="container mb-4">
      <Link className="navbar-brand" to="/"><img src='media\images\logo.svg' alt='Logo' className='logo'></img> </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex" role="search">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" to="/signup">Signup</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " aria-disabled="true" to='products'>Products</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " aria-disabled="true" to='pricing'>Pricing</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " aria-disabled="true" to='support'>Support</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " aria-disabled="true" ><i class="fa-solid fa-bars"></i></Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
</nav>
  )
}

export default Navbar