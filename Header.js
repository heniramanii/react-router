import React from 'react'
import { NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
         <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <NavLink class="nav-link" to={'/'}>Home</NavLink>
              </li>


              <li class="nav-item dropdown">
                <NavLink class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contact
                </NavLink>
                <ul class="dropdown-menu">
                  <li><NavLink to={'/contact/contact1'} class="dropdown-item" >Contact 1</NavLink></li>
                  <li><NavLink to={'/contact/contact2'} class="b v   -item">Contact 2</NavLink></li>

                </ul>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to={'/about'}>About</NavLink>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header