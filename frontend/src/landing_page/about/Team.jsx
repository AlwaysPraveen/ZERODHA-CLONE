import React from 'react'

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5   text-muted ">
        <h2 className='text-center about-heading-crew'>People</h2>
      </div>
      <div className="row p-5 about-people ">
        <div className="col-6 p-5 text-center">
          <img src='media\images\nithinKamath.jpg' alt='Nithin' className='about-people-img'></img>
          <h5 className='mt-4'>Nithin Kamnath</h5>
          <h7>Founder, CEO</h7>
        </div>
        <div className="col-6 p-5">
          <p className='about-para'> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p className='about-para'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). </p>
          <p className="about-para">Playing basketball is his zen.</p>
          <p className='about-para'>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
      </div>

      <div className="row p-5   text-muted ">
        <h2 className='text-center about-heading-crew'>ZERODHA CLONE DEVELOPED BY </h2>
      </div>
      <div className="row p-5 about-people ">
        <div className="col-6 p-5 text-center">
          <img src='media\images\1708233018267.jpg' alt='Praveen' className='about-people-img'></img>
          <h5 className='mt-4'>Thatikonda Praveen Kumar</h5>
          <h7>Full Stack Developer (MERN)</h7>
        </div>
        <div className="col-6 p-5">
          <p className='about-para'>I am a passionate graduate aiming to make a mark in the IT and web development field. With a solid foundation in programming and a keen eye for design, I aspires to create innovative solutions that enhance user experiences.</p>
          <p className='about-para'> I am constantly expanding my skill set, staying updated with the latest technologies and trends in the industry.</p>
          <p className="about-para">Outside of coding, Playing Cricket keeps me grounded and inspired.</p>
          <p className='about-para'>Connect on <a href="https://www.linkedin.com/in/thatikonda-praveen-kumar-7414812b2/">LinkedIn</a> / <a href="https://github.com/AlwaysPraveen">gitHub</a> / <a href="https://www.instagram.com/_alwayspraveen_/">Instagram</a></p>
        </div>
      </div>
    </div>
  )
}

export default Team