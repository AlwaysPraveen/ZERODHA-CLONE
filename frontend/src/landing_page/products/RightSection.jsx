import React from 'react'

const RightSection = ({imageURL, productName, productDescription, learnMore}) => {
  return (
    <div className="container">
      <div className="row right-section mt-5 mb-5">
        <div className="col-4 m-auto mt-5 mr-5 right-head">
          <h2 className='left-heading mb-5'>{productName}</h2>
          <p className='left-para'>{productDescription}</p>
          <a href={learnMore}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div className="col-1"></div>
        <div className="col-7 right-img">
          <img src={imageURL} alt="product console" />
        </div>
      </div>
    </div>
  )
}

export default RightSection