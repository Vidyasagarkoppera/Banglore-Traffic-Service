import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Asserts/Images/logo.jpg'
import ContactUs from './ContactUs'
import '../Asserts/Css/Index.css'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand text-white fw-bold">
            <img src={logo} alt="" id='businessLogo' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pages">
              <li className="nav-item">
                <Link to={'/'} className="nav-link text-white fw-bold" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/allServices'} className="nav-link text-white fw-bold">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/contactUs'} className="nav-link text-white fw-bold">
                  Contact Info
                </Link>
              </li>
            </ul>
            <ul className='d-flex navbar-nav  navSocialMedial'>
              <li className="nav-item socialMedias me-2">
                <a href='https://instagram.com/kv_sagar__?igshid=NTdlMDg3MTY=' target={'_blank'} className="instagram">
                <i class="fa-brands fa-instagram fs-4"></i>
                </a>
                <a href='https://www.facebook.com/kv.sagar.16' target={'_blank'} className="facebook">
                <i class="fa-brands fa-facebook-f fs-4"></i>
                </a>
                <a href='https://twitter.com/kvsagar02?t=8tSmDGrHbLBorRU84Znfhg&s=09' target={'_blank'} className="twitter">
                <i class="fa-brands fa-twitter fs-4"></i>
                </a>
                <a href='https://www.linkedin.com/in/k-vidya-sagar-67761a254' target={'_blank'} className="linkedin">
                <i class="fa-brands fa-linkedin fs-4"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header