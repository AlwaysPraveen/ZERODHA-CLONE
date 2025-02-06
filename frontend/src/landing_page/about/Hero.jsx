import React from 'react'

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mb-5 mt-5 text-muted">
        <h2 className='text-center about-heading'>We pioneered the discount broking model in India.<br/>Now, we are breaking ground with our technology.</h2>
      </div>
      <div className="row p-5 mt-5 border-top">
        <div className="col-6 p-5">
          <p className='about-para'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
          <p className='about-para'>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
          <p className='about-para'>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
        </div>
        <div className="col-6 p-5">
          <p className='about-para'> In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
          <p className='about-para'><a href="">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets. </p>
          <p className='about-para'> And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="">blog</a> or see what the media is <a href="">saying about us.</a> </p>
        </div>
      </div>
    </div>
  )
}

export default Hero