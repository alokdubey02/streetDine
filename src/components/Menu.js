import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      {/* <h2>StreetDine</h2> */}
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create-order"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Create Order
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tables"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Tables
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/employee"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Employee
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/inventory"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Inventory
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kitchen-order"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Kitchen Order
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analytics"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logout"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Log Out
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
