import React from 'react'

const Footer = () => {
  const linkStyle = {
    fontWeight:'500',
    color:' #424242',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
  };
  return (
    <div className="container border-top">
      <div className="row my-5">
        <div className="col m-2">
          <img src='media/images/logo.svg' alt='logo' style={{width:'50%'}}></img>
          <p className='mt-3'>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
        </div>
        <div className="col">
          <h5 className='fs-5 footer-head'>Company</h5> <br/>
          <a href="" style={linkStyle} className='footer-list'>Contact us</a>
          <a href="" style={linkStyle} className='footer-list'>Support portal</a>
          <a href="" style={linkStyle} className='footer-list'>Z-Connect blog</a>
          <a href="" style={linkStyle} className='footer-list'>List of charges</a>
          <a href="" style={linkStyle} className='footer-list'>Downloads & resources</a>
          <a href="" style={linkStyle} className='footer-list'>Videos</a>
          <a href="" style={linkStyle} className='footer-list'>Market overview</a>
          <a href="" style={linkStyle} className='footer-list'>How to file a complaint?</a>
          <a href="" style={linkStyle} className='footer-list'>Status of your complaints</a>
        </div>
        <div className="col">
          <h5 className='fs-5 footer-head '>Support</h5> <br></br>
          <a href="" style={linkStyle} className='footer-list'>Contact us</a>  
          <a href="" style={linkStyle} className='footer-list'>Support portal</a>  
          <a href="" style={linkStyle} className='footer-list'>Z-Connect blog</a>  
          <a href="" style={linkStyle} className='footer-list'>List of charges</a>  
          <a href="" style={linkStyle} className='footer-list'>Downloads & resources</a> 
          <a href="" style={linkStyle} className='footer-list'>Videos</a>  
          <a href="" style={linkStyle} className='footer-list'> Market overview</a>  
          <a href="" style={linkStyle} className='footer-list'>How to file a complaint?</a>  
          <a href="" style={linkStyle} className='footer-list'>Status of your complaints</a>  
        </div>
        <div className="col">
          <h5 className='fs-5 footer-head '>Account</h5> <br/>
          <a href="" style={linkStyle} className='footer-list'>Open an account</a> 
          <a href="" style={linkStyle} className='footer-list'>Fund transfer</a>  
        </div>
      </div>
      <p className='text-muted footer-para'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href=''>complaints@zerodha.com</a>, for DP related to <a href=''>dp@zerodha.com.</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
      <p className='text-muted footer-para'>Procedure to file a complaint on <a href=''>SEBI SCORES:</a> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
      <p className='text-muted footer-para'><a href="">Smart Online Dispute Resolution</a> | <a href=''>Grievances Redressal Mechanism</a></p>
      <p className='text-muted footer-para'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
      <p className='text-muted footer-para'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
      <p className='text-muted footer-para'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href=''>create a ticket here.</a></p>
      <div className="footer-graveyard-links text-center">
        <ul>
          <li><a href="" >NSE</a></li>
          <li><a href="">BSE</a></li>
          <li><a href="">MCX</a></li>
          <li><a href="">Terms & conditions</a> </li>
          <li><a href="">Policies & procedures</a> </li>
          <li><a href="">Privacy policy</a></li>
          <li><a href="">Disclosure </a></li>
          <li><a href="">For investor's attention</a></li>
          <li><a href="">Investor charter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer