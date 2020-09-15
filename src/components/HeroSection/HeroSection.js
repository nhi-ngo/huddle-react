import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button/Button'

import './HeroSection.scss'

const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  heroBgImg,
  alt,
}) => {
  return (
    <div
      className={lightBg ? 'hero__section' : 'hero__section darkBg'}
      style={{
        backgroundImage: heroBgImg ? 'url(/images/bg-hero-desktop.svg)' : 'null',
      }}
    >
      <div className="hero__container container">
        <div
          className="hero__row"
          style={{
            display: 'flex',
            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
          }}
        >
          <div className="hero__col">
            <div className="hero__col__text-wrapper">
              <div className="hero__col__top-line">{topLine}</div>
              <h1
                className={
                  lightText ? 'hero__col__heading' : 'hero__col__heading dark'
                }
              >
                {headline}
              </h1>
              <p
                className={
                  lightTextDesc
                    ? 'hero__col__description'
                    : 'hero__col__description dark'
                }
              >
                {description}
              </p>
              <Link to="/sign-up">
                <Button buttonSize="btn--wide" buttonColor="pink">
                  {buttonLabel}
                </Button>
              </Link>
            </div>
          </div>
          <div className="hero__col">
            <div className="hero__col__img-wrapper">
              <img src={img} alt={alt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
