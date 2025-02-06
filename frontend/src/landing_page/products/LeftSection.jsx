import React from 'react'

const LeftSection = ({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) => {
  return (
    <div className="container ">
      <div className="row m-auto mt-5 left-section mb-5">
        <div className="col-7">
          <img src={imageURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-4 m-auto mt-5 ml-5">
          <h2 className='left-heading mb-5'>{productName}</h2>
          <p className='left-para'>{productDescription}</p>
          <div className='my-3 left-tag mb-4' >
            <a href={tryDemo} >Try demo <i class="fa-solid fa-arrow-right-long"></i></a>
            <a href={learnMore} style={{marginLeft:'20%'}} className='mb-5'>Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div>
            <a href={googlePlay}> <img src="media\images\googlePlayBadge.svg" alt="playstore" /></a>
            <a href={appStore} style={{marginLeft:'5%'}}><img src="media\images\appstoreBadge.svg" alt="appstore" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection