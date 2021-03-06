import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'

import Button from '../Button/Button'
import ButtonToggle from '../Button/ButtonToggle'

import './Pricing.scss'

const Pricing = () => {
  const [priceToggle, setPriceToggle] = useState(false)

  return (
    <IconContext.Provider value={{ color: '$darkBlue', size: 64 }}>
      <section className="pricing flex">
        <div className="pricing__wrapper">
          <h2 className="pricing__heading">Our Pricing</h2>

          <div className="pricing__toggle flex">
            <p className="pricing__toggle__term">Annually</p>
            <ButtonToggle onPriceToggle={() => setPriceToggle(!priceToggle)} />
            <p className="pricing__toggle__term">Monthly</p>
          </div>

          <div className="pricing__container flex">
            <Link to="/sign-up" className="pricing__card">
              <div className="pricing__card-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>

                <h3 className="tier">Starter</h3>
                {priceToggle ? (
                  <p className="price price-monthly">$19.99</p>
                ) : (
                  <p className="price price-annually">$199.99</p>
                )}

                <ul className="pricing__card-cardFeatures">
                  <li>500 GB Storage</li>
                  <li>2 Users Allowed</li>
                  <li>Send up to 3 GB</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="pink-gradient">
                  Choose Plan
                </Button>
              </div>
            </Link>

            <Link to="/sign-up" className="pricing__card bg-pink">
              <div className="pricing__card-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>

                <h3 className="tier">Gold</h3>
                {priceToggle ? (
                  <p className="price price-monthly">$29.99</p>
                ) : (
                  <p className="price price-annually">$299.99</p>
                )}

                <ul className="pricing__card-cardFeatures">
                  <li>1 TB Storage</li>
                  <li>5 Users Allowed</li>
                  <li>Send up to 10 GB</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Choose Plan
                </Button>
              </div>
            </Link>

            <Link to="/sign-up" className="pricing__card">
              <div className="pricing__card-cardInfo">
                <div className="icon">
                  <GiCrystalize />
                </div>

                <h3 className="tier">Diamond</h3>
                {priceToggle ? (
                  <p className="price price-monthly">$49.99</p>
                ) : (
                  <p className="price price-annually">$499.99</p>
                )}

                <ul className="pricing__card-cardFeatures">
                  <li>2 TB Storage</li>
                  <li>10 Users Allowed</li>
                  <li>Send up to 20 GB</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="pink-gradient">
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  )
}

export default Pricing
