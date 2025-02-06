import React from 'react'

const Pricing = () => {
  return (
    <div className="container mt-5  " >
      <div className="row">
        <div className="col-4">
          <h2>Unbeatable pricing</h2>
          <p>We pioneered the concept of discount broking and price transparency in India.Flat fees and no hidden charges.</p>
          <a href="" className='mx-5' style={{textDecoration:'none'}}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col border ">
              <h2 className='my-4'>&#x20B9;0</h2>
              <p className='my-4'>Free equity delivery and <br></br> direct mutual funds</p>
            </div>
            <div className="col border p-10">
              <h2 className='my-4'>&#x20B9;20</h2>
              <p className='my-4'>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing