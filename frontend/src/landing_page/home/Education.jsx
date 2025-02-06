import React from 'react'

const Education = () => {
  return (
    <div className="container  " style={{ marginTop: '7rem' }}>
      <div className="row">
        <div className="col-6">
          <img src="media\images\education.svg" alt="education" />
        </div>
        <div className="col-6 mt-5">
          <h2 className='fs-2 mb-5'>Free and open market education</h2>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href=""  style={{textDecoration:'none'}}>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
          <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href=""  style={{textDecoration:'none'}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education