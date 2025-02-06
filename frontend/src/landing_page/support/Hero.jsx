import React from 'react'

const Hero = () => {
  return (
    <div className="container support-hero p-5">
      <div className="row  pt-5 ">
        <div className="col-2 "><a href="" style={{color:'#fff', fontSize:'1.275rem'}}>Support Portal</a></div>
        <div className="col-8"></div>
        <div className="col-2 "><a href="" style={{textDecoration:'underline', color:'#fff', fontSize:'1.275rem'}}>Track Tickets</a></div>
      </div>
      <div className="row mt-5">
        <div className="col-7">
          <div className="support-subhead">Search for an answer or browse help topics to create a ticket</div>
          <div><input type="text"  className='form-control typeahead' placeholder='Eg: How do I activate F&O, why is my ordert getting rejected'  /></div>
          <div className="super-links">
            <p className='quick-links'><a href="" style={{textDecoration:'underline', color:'#fff', fontSize:'1.1rem',marginRight:'1rem'}}>Track account opening</a></p>
            <p className='quick-links'><a href="" style={{textDecoration:'underline', color:'#fff', fontSize:'1.1rem',marginRight:'1rem'}}> Track segment activation</a></p>
            <p className='quick-links'><a href="" style={{textDecoration:'underline', color:'#fff', fontSize:'1.1rem',marginRight:'1rem'}}>Intraday Margins</a></p>
            <p className='quick-links'><a href="" style={{textDecoration:'underline', color:'#fff', fontSize:'1.1rem'}}>Kite user manual</a></p>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <div className="support-subhead mt-5 p-3" style={{marginLeft:'-3.6rem'}}>Featured</div>
          <ol style={{marginLeft:'-2.2rem',marginTop:'-1.4rem'}}>
            <li><a href="" style={{textDecoration:'underline', color:'#fff', fontSize:'1.1rem',}} >Scheduled maintenance downtime for Coin</a></li> <br/>
            <li><a href=""style={{textDecoration:'underline', color:'#fff', fontSize:'1.1rem'}}>BSE StAR mutual fund platform downtime</a></li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Hero