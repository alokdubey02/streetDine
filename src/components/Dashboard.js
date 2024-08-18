import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [selectedToken, setSelectedToken] = useState(null);
  const [newItem, setNewItem] = useState("");
  const [orders, setOrders] = useState([
    {
      tokenNo: 1,
      tableNo: 3,
      orderList: ["Pizza", "Pasta", "Coke"],
      price: 1500,
      itemQuantity: 3,
      paymentType: "Credit Card",
      staff: "Alice",
      type: "Dine In",
    },
    {
      tokenNo: 2,
      tableNo: 5,
      orderList: ["Burger", "Fries", "Pepsi"],
      price: 800,
      itemQuantity: 3,
      paymentType: "Cash",
      staff: "Bob",
      type: "Take Away",
    },
    {
      tokenNo: 3,
      tableNo: 3,
      orderList: ["Pizza", "Pasta", "Coke"],
      price: 1500,
      itemQuantity: 3,
      paymentType: "Credit Card",
      staff: "Alice",
      type: "Dine In",
    },
    {
      tokenNo: 4,
      tableNo: 5,
      orderList: ["Burger", "Fries", "Pepsi"],
      price: 800,
      itemQuantity: 3,
      paymentType: "Cash",
      staff: "Bob",
      type: "Take Away",
    },
    // Add more orders here as needed
  ]);

  const handleTokenClick = (token) => {
    setSelectedToken(token);
  };

  const handleAddItem = () => {
    if (selectedToken) {
      const updatedOrders = orders.map((order) =>
        order.tokenNo === selectedToken.tokenNo
          ? {
              ...order,
              orderList: [...order.orderList, newItem],
              itemQuantity: order.itemQuantity + 1,
              price: order.price + 100, // Assuming each new item adds 100 to the total price
            }
          : order
      );
      setOrders(updatedOrders);
      setNewItem("");
    }
  };

  const handleAcceptCash = () => {
    if (selectedToken) {
      alert(`Cash accepted for Token No: ${selectedToken.tokenNo}`);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="order-cards">
        {orders.map((order) => (
          <div
            key={order.tokenNo}
            className="order-card"
            onClick={() => handleTokenClick(order)}
          >
            <h3>Token No: {order.tokenNo}</h3>
            <p>
              <strong>Table No:</strong> {order.tableNo || "N/A"}
            </p>
            <p>
              <strong>Order List:</strong> {order.orderList.join(", ")}
            </p>
            <p>
              <strong>Price:</strong> ₹{order.price}
            </p>
            <p>
              <strong>Item Quantity:</strong> {order.itemQuantity}
            </p>
            <p>
              <strong>Payment Type:</strong> {order.paymentType}
            </p>
            <p>
              <strong>Assigned Staff:</strong> {order.staff}
            </p>
            <p>
              <strong>Type:</strong> {order.type}
            </p>
          </div>
        ))}
      </div>

      <div className="order-details-container">
        {selectedToken ? (
          <div className="order-details">
            <h3>Table Information</h3>
            <div className="dine-options">
              <button className="dine-button">Dine-In</button>
              <button className="dine-button">Take-Away</button>
            </div>
            <p>
              <strong>Table No.:</strong> {selectedToken.tableNo}
            </p>
            <p>
              <strong>No. of Seats:</strong> {selectedToken.itemQuantity}
            </p>
            <p>
              <strong>Customer Name:</strong>{" "}
              {selectedToken.customerName || "N/A"}
            </p>
            <p>
              <strong>Order Details:</strong>{" "}
              {selectedToken.orderList.join(", ")}
            </p>
            <p>
              <strong>Total Bill Amount:</strong> ₹{selectedToken.price}
            </p>
            <p>
              <strong>Assigned Staff:</strong> {selectedToken.staff || "N/A"}
            </p>
            <div className="add-item">
              <input
                type="text"
                placeholder="Add Item"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
              <button onClick={handleAddItem}>Add</button>
            </div>
            <button className="accept-cash" onClick={handleAcceptCash}>
              Accept Cash
            </button>
          </div>
        ) : (
          <div className="no-order-selected">
            <p>Please select a token to see the details.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
