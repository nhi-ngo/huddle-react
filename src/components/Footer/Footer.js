import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa'

import Button from '../Button/Button'

import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer-wrapper flex">
      <section className="footer-subscription flex">
        <h3 className="footer-subscription__heading">
          Join our exclusive membership to receive the latest news and trends
        </h3>
        <h4 className="footer-subscription__subheading">
          You can unsubscribe at any time.
        </h4>
        <div className="input-area">
          <form>
            <input
              className="footer-subscription__form-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>

      <section className="footer-links">
        <div className="footer-links__container">
          <div className="footer-links__items">
            <h2 className="footer-links__items-heading">About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-links__items">
            <h2 className="footer-links__items-heading">Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Career</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-links__container">
          <div className="footer-links__items">
            <h2 className="footer-links__items-heading">Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-links__items">
            <h2 className="footer-links__items-heading">Social Media</h2>
            <Link to="//www.github.com/nhiyngo" target="_blank">
              Github
            </Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </section>

      <section className="social-media">
        <div className="social-media__container">
          <div className="logo">
            <Link to="/" className="social-media__logo">
              <img src="images/logo-white.svg" alt="logo" />
            </Link>
          </div>
          <small className="website-rights">HUDDLE © 2020</small>
          <div className="social-media__icons">
            <Link
              className="social-media__icons-link"
              to="//www.github.com/nhiyngo"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </Link>
            <Link
              className="social-media__icons-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-media__icons-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-media__icons-link"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-media__icons-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
