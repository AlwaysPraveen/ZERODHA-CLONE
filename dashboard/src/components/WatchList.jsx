import React from "react";
import { useState, useContext } from "react";
import  {Tooltip,Grow} from "@mui/material";;
import {KeyboardArrowUp, KeyboardArrowDown, BarChartOutlined, MoreHoriz} from '@mui/icons-material'
import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({stock}) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchlistActions uid={stock.name} />}
    </li>
  )
}

const WatchlistActions = ({uid}) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
            title="Buy (B)"
            placement="top"
            arrow
            TransitionComponent={Grow}
        > <button className="buy" onClick={handleBuyClick}>Buy</button></Tooltip>
        <Tooltip
            title="Sell (S)"
            placement="top"
            arrow
            TransitionComponent={Grow}
        > <button className="sell" onClick={handleSellClick}>Sell</button></Tooltip>
        <Tooltip
            title="Analytics"
            placement="top"
            arrow
            TransitionComponent={Grow}
        > <button className="action"><BarChartOutlined className="icon"/></button></Tooltip>
        <Tooltip
            title="More"
            placement="top"
            arrow
            TransitionComponent={Grow}
        > <button className="action"><MoreHoriz className="icon"/></button></Tooltip>
      </span>
    </span>
  )
}