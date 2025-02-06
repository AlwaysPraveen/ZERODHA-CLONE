import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const OrderCard = ({ order }) => {
  return (
    <div className="card mb-3 " style={{ width: "18rem" }}>
      <div className="card-body text-center">
        <h5 className="card-title text-muted">{order.name}</h5>
        <p className="card-text"><strong>Quantity:</strong> {order.qty}</p>
        <p className="card-text"><strong>Price:</strong> ${order.price}</p>
        <p className="card-text"><strong>Mode:</strong> {order.mode}</p>
      </div>
       <hr></hr>
    </div>
  );
};

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allOrders")
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Orders</h2>
      {allOrders.length > 0 ? (
        <div className="d-flex flex-wrap gap-3">
          {allOrders.map(order => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn btn-primary">Get started</Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
