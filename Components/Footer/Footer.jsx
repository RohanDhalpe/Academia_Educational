import React from 'react'
import './Footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import IMG from '../../assets/logo.png'
import logo from '../../assets/logo/map2procoder_logo.png';

const Footer = () => {
  return (
    <footer id='foot'>
      <div className="logo_div">
      <img src={logo} className="logo_img"></img>
      </div>
      <a href='#' className='footer__logo'>
        Academia
      </a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#About'>About us</a></li>
        <li><a href='#contact'>Contact us</a></li>
      </ul>

      <div className="footer__socials">
        {/* <a href='' target='_blank'><FaFacebookSquare/></a> */}
        <a href='mailto:' target='_blank'><AiOutlineMail/></a>
        <a href='https://github.com/RohanDhalpe' target='_blank'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; Academia 2023 | All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer