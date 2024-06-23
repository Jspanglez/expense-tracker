import React from "react";
import "./App.css";
import AddBtn from "./AddBtn";
interface Props {
  elements: { name: string; details: string }[];
  addElement: () => void;
  myFunction: () => void;
}

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <span className="sidebar-header">
        <p className="sidebar-heading">Your Expenses</p>
        <AddBtn />
      </span>
      <div className="sidebar-list">
        <li>Item</li>
      </div>
    </div>
  );
};

export default Sidebar;
