import React from 'react'

const Universe = () => {
  return (
    <div className="container">
      <div className="row text-center mb-5" >
        <h2 className='mb-4' >The Zerodha Universe</h2>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
      </div>
      <div className="row p-4 products-down text-center" >
        <div className="col-4 p-3">
          <img src="media\images\zerodhaFundhouse.png" alt="found house" style={{width:'70%'}} />
          <p className=' text-muted img-para mt-2'>Our asset management venture <br></br>that is creating simple and transparent index <br></br>funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\sensibullLogo.svg" alt="found house" style={{width:'70%'}}/>
          <p className='text-muted img-para mt-3'>Options trading platform that lets you <br></br>create strategies, analyze positions, and examine <br></br>data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\goldenpiLogo.png" alt="found house" style={{width:'70%'}} />
          <p className='text-muted img-para mt-2'>Investment research platform <br></br>that offers detailed insights on stocks,<br></br>sectors, supply chains, and more.</p>
        </div>
      </div>
      <div className="row p-4 products-down text-center" >
        <div className="col-4 p-3">
          <img src="media\images\streakLogo.png" alt="found house" style={{width:'70%'}} />
          <p className=' text-muted img-para mt-2'>Systematic trading platform <br/>that allows you to create and backtest<br/>strategies without coding.</p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\smallcaseLogo.png" alt="found house" style={{width:'70%'}}/>
          <p className='text-muted img-para mt-2'>Thematic investing platform <br/>that helps you invest in diversified <br/>baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\dittoLogo.png" alt="found house" style={{width:'50%'}} />
          <p className='text-muted img-para mt-2'>Personalized advice on life <br/>and health insurance. No spam <br/>and no mis-selling.</p>
        </div>
      </div>
      <div className="text-center mb-5">
        <button className='p-2 btn btn-primary fs-5 signup_btn text-center mb-3' >Signup up for free</button>
      </div>
    </div>
  )
}

export default Universe