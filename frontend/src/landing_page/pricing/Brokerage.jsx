import React from 'react'

const Brokerage = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center mb-4">
        <p className='fs-4'> <a href="">Calculate your costs upfront</a> using our brokerage calculator</p>
      </div>
      <div className="row fs-5 text-muted"><h3>Charges explained</h3></div>
      <div className="row mt-5">
        <div className="col-6">
          <p className='price-low-head'>Securities/Commodities transaction tax</p>
          <p className='price-low-para'>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
          <p className='price-low-para'>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p> 
          <p className='price-low-head'>Transaction/Turnover Charges</p>
          <p className='price-low-para'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
          <p className='price-low-para'>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
          <p className='price-low-para'>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
          <p className='price-low-para'>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
          <p className='price-low-para'>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
          <p className='price-low-head'>Call & trade</p>
          <p className='price-low-para'>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
          <p className='price-low-head'>Stamp charges</p>
          <p className='price-low-para'>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
          <p className='price-low-head'>NRI brokerage charges</p>
          <ul className='price-low-para'>
            <li>₹100 per order for futures and options.</li>
            <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
          </ul>
          <p className='price-low-head'>Account with debit balance</p>
          <p className='price-low-para'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
          <p className='price-low-head'>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
          <ul className='price-low-para'>
            <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
          </ul>
          <p className='price-low-head'>Margin Trading Facility (MTF)</p>
          <ul className='price-low-para'>
            <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
            <li>MTF Brokerage: 0.03% or Rs. 20/executed order, whichever is lower.</li>
            <li>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
          </ul>
        </div>
        <div className="col-6 ml-5">
          <p className='price-low-head'>GST</p>
          <p className='price-low-para'>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
          <p className='price-low-head'>SEIB Charges</p>
          <p className='price-low-para'>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
          <p className='price-low-head'>DP (Depository participant) charges</p>
          <p className='price-low-para'>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
          <p className='price-low-para'>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
          <p className='price-low-para'>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
          <p className='price-low-head'>Pledging charges</p>
          <p className='price-low-para'>₹30 + GST per pledge request per ISIN.</p>
          <p className='price-low-head'>AMC (Account maintenance charges)</p>
          <p className='price-low-para'>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="">Click here</a></p>
          <p className='price-low-para'>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC,<a href="">Click here</a></p>
          <p className='price-low-head'>Corporate action order charges</p>
          <p className='price-low-para'>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
          <p className='price-low-head'>Off-market transfer charges</p>
          <p className='price-low-para'>₹25 per transaction.</p>
          <p className='price-low-head'>GSPhysical CMR request </p>
          <p className='price-low-para'>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
          <p className='price-low-head'>Payment gateway charges</p>
          <p className='price-low-para'>₹9 + GST (Not levied on transfers done via UPI)</p>
          <p className='price-low-head'>Delayed Payment Charges</p>
          <p className='price-low-para'>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="">Learn more.</a></p>
        </div>
      </div>
      <div className="row">
        <p className='price-low-head'>Disclaimer</p>
        <p className='price-low-para'>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
      </div>
    </div>
  )
}

export default Brokerage