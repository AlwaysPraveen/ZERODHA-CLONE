import React from 'react'

const Hero = () => {
  return (
    <div className="container text-center  mt-5 mb-5 product-head ">
      <div className="row">
        <h1 className='product-heading'>Charges</h1>
        <p className='product-subheading'>List of all charges and taxes</p>
      </div>
      <div className="row  mt-5 product-pricing d-flex text-center">
        <div className="col-4 p-4">
          <img src="media\images\pricing0.svg" alt="0" style={{width:'85%'}} />
          <h2 className='fs-3 mb-4'>Free equity delivery</h2>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-4">
          <img src="media\images\intradayTrades.svg" alt="20" style={{width:'85%'}}/>
          <h2 className='fs-3 mb-4'>Intraday and F&O trades</h2>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-4">
          <img src="media\images\pricing0.svg" alt="0" style={{width:'85%'}} />
          <h2 className='fs-3 mb-4'>Free direct MF</h2>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero