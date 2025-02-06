import React from 'react'

const Stats = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h2 className='fs-2 mb-5'>Trust with confidence</h2>
          <h3 className='fs-4'>Customer-first always</h3>
          <p className='text-muted mb-5'>That's why 1.3+ crore customers trust zerodha with 3.5+ lakh crores worth of equity investments</p>
          <h3 className='fs-4'>No spam or gimmicks</h3>
          <p className='text-muted mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you see at your pace, the way you like.</p>
          <h3 className='fs-4'>The zerodha universe</h3>
          <p className='text-muted mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h3 className='fs-4'>Do better with money</h3>
          <p className='text-muted mb-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-7">
          <img src='media\images\ecosystem.png' alt='ecosystem' style={{width:'95%'}}></img>
          <div className="text-center"><a href="" className='mx-5' style={{textDecoration:'none'}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
            
            <a href="" className='mx-5' style={{textDecoration:'none'}}>Try kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats