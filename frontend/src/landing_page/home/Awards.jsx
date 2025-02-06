import React from 'react'

const Awards = () => {
  return (
    <div className="container  p-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src='media/images/largestBroker.svg' alt='Awards'></img>
        </div>
        <div className="col-6 p-5">
          <h1 className='mb-4'>Largest stock broker in India</h1>
          <p className='mb-4'>2+ millio Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in: </p>
          <div className="row mb-2">
            <div className="col-6 ">
              <ul>
                <li className='home_list'>Futures and Options</li>
                <li className='home_list'>Commodity derivatives</li>
                <li className='home_list'>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className='home_list'>stocks & IPOs</li>
                <li className='home_list'>Direct mutual funds</li>
                <li className='home_list'>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src='media\images\pressLogos.png' alt='logo' style={{width:'90%'}} className='mt-4'></img>
        </div>
      </div>
    </div>
  )
}

export default Awards