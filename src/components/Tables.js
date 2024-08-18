import React, { useState } from "react";
import "./Tables.css";

function Tables() {
  const [tables, setTables] = useState([
    {
      tableNo: 1,
      seats: 4,
      customerName: "John Doe",
      order: "Pizza",
      noOfPeople: 4,
      totalBill: 500,
      staff: "Alice",
    },
    {
      tableNo: 2,
      seats: 2,
      customerName: null, // Vacant
      order: null, // Vacant
      noOfPeople: null, // Vacant
      totalBill: null, // Vacant
      staff: null, // Vacant
    },
    {
      tableNo: 3,
      seats: 4,
      customerName: "John Doe",
      order: "Pizza",
      noOfPeople: 4,
      totalBill: 500,
      staff: "Alice",
    },
    {
      tableNo: 4,
      seats: 2,
      customerName: null, // Vacant
      order: null, // Vacant
      noOfPeople: null, // Vacant
      totalBill: null, // Vacant
      staff: null, // Vacant
    },
    {
      tableNo: 5,
      seats: 4,
      customerName: "John Doe",
      order: "Pizza",
      noOfPeople: 4,
      totalBill: 500,
      staff: "Alice",
    },
    {
      tableNo: 6,
      seats: 2,
      customerName: null, // Vacant
      order: null, // Vacant
      noOfPeople: null, // Vacant
      totalBill: null, // Vacant
      staff: null, // Vacant
    },
    {
      tableNo: 7,
      seats: 4,
      customerName: "John Doe",
      order: "Pizza",
      noOfPeople: 4,
      totalBill: 500,
      staff: "Alice",
    },
    {
      tableNo: 8,
      seats: 2,
      customerName: null, // Vacant
      order: null, // Vacant
      noOfPeople: null, // Vacant
      totalBill: null, // Vacant
      staff: null, // Vacant
    },
  ]);

  const [selectedTable, setSelectedTable] = useState(null);
  const [newTableNo, setNewTableNo] = useState("");
  const [newSeats, setNewSeats] = useState("");
  const [isVacant, setIsVacant] = useState(true);

  const handleTableClick = (table) => {
    setSelectedTable(table);
  };

  const addTable = () => {
    const newTable = {
      tableNo: parseInt(newTableNo),
      seats: parseInt(newSeats),
      customerName: isVacant ? null : "New Customer",
      order: isVacant ? null : "New Order",
      noOfPeople: isVacant ? null : 1,
      totalBill: isVacant ? null : 0,
      staff: isVacant ? null : "New Staff",
    };

    setTables([...tables, newTable]);
    setNewTableNo("");
    setNewSeats("");
  };

  return (
    <div className="tables-container">
      <h2>Tables</h2>
      <div className="add-table-form">
        <h3>Add a New Table</h3>
        <input
          type="number"
          placeholder="Table No."
          value={newTableNo}
          onChange={(e) => setNewTableNo(e.target.value)}
        />
        <input
          type="number"
          placeholder="Seats"
          value={newSeats}
          onChange={(e) => setNewSeats(e.target.value)}
        />
        <div>
          <label>
            <input
              type="radio"
              name="vacancy"
              checked={isVacant}
              onChange={() => setIsVacant(true)}
            />
            Vacant
          </label>
          <label>
            <input
              type="radio"
              name="vacancy"
              checked={!isVacant}
              onChange={() => setIsVacant(false)}
            />
            Occupied
          </label>
        </div>
        <button onClick={addTable}>Add Table</button>
      </div>
      <div className="tables-layout">
        <div className="tables-grid">
          {tables.map((table) => (
            <div
              key={table.tableNo}
              className={`table-box ${
                table.customerName ? "occupied" : "vacant"
              }`}
              onClick={() => handleTableClick(table)}
            >
              <h3>Table {table.tableNo}</h3>
              <p>Seats: {table.seats}</p>
            </div>
          ))}
        </div>

        <div className="table-details-container">
          {selectedTable ? (
            <div className="table-details">
              <h3>Table Information</h3>
              <div className="dine-options">
                <button className="dine-button">Dine-In</button>
                <button className="dine-button">Take-Away</button>
              </div>
              <p>
                <strong>Table No.:</strong> {selectedTable.tableNo}
              </p>
              <p>
                <strong>No. of Seats:</strong> {selectedTable.seats}
              </p>
              <p>
                <strong>Customer Name:</strong>{" "}
                {selectedTable.customerName || "N/A"}
              </p>
              <p>
                <strong>Order Details:</strong> {selectedTable.order || "N/A"}
              </p>
              <p>
                <strong>Total Bill Amount:</strong> ₹
                {selectedTable.totalBill || "N/A"}
              </p>
              <p>
                <strong>Assigned Staff:</strong> {selectedTable.staff || "N/A"}
              </p>
              <div className="order-buttons">
                <button className="order-button">Current Order</button>
                <button className="order-button">Past Order</button>
              </div>
            </div>
          ) : (
            <div className="no-table-selected">
              <p>Please select a table to see the details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tables;
