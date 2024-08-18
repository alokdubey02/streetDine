import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Analytics from "./components/Analytics";
import CreateOrder from "./components/CreateOrder";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import KitchenOrder from "./components/KitchenOrder";
import Logout from "./components/Logout";
import Menu from "./components/Menu";
import MenuPage from "./components/MenuPage";
import Orders from "./components/Orders";
import Settings from "./components/Settings";
import Tables from "./components/Tables";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <div className="menu-bar">
            <Menu />
          </div>
          <div className="dashboard">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/create-order" element={<CreateOrder />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/kitchen-order" element={<KitchenOrder />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </div>
      {/* <div className="App">
        <div className="menu-bar">
          <Menu />
        </div>
        <div className="dashboard">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/create-order" element={<CreateOrder />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/kitchen-order" element={<KitchenOrder />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div> */}
    </Router>
  );
}

export default App;
