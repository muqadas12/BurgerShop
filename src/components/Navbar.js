import React from 'react'
import logo from "../assets/logo1.png"
function Navbar() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img style={{width:'170px',marginLeft:'230px'}} src={logo} alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav" style={{marginLeft:'350px',fontFamily:'Timesnewroman' }}>
      <a className="nav-item nav-link text-dark font-weight-bold text-uppercase text-center" href="#">Header<span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link text-dark font-weight-bold text-uppercase" href="#">Products</a>
      <a className="nav-item nav-link text-dark font-weight-bold text-uppercase" href="#">About</a>
      <a className="nav-item nav-link text-dark font-weight-bold text-uppercase" href="#">Contact</a>

    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
