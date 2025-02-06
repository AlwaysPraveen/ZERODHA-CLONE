import React from 'react'

const Hero = () => {
  return (
    <div className="container p-5 ">
        <div className="row text-center ">
          <div className="container text-center my-5">
            <img src='media/images/homeHero.png' alt="Dashboard preview" className="img-fluid w-75" />
          </div>
          <h1 className='mt-5'>Invest in Everything</h1>
          <p>Online platform to invest in stocks,derivatives,mutual funds and more</p>
          <button className='p-2 btn btn-primary fs-5 signup_btn ' >Signup for free</button>
        </div>
    </div>
  )
}

export default Hero