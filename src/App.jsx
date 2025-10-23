import React, { useState } from "react";
import "./App.css";

// Display Component Function
function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      disabled
    />
  );
}

// Button Component Function
function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
 
  return (
    <div className="container">
      <div className="calculator">
        <h1 className="header">CHARLENE LUGTU - IT3A</h1>
        <Display value="10 Things That Require Zero Talent" />
        <div className="buttons">
          <Button label="7 - Being Coachable" />
          <Button label="8 - Doing A Little Extra" />
          <Button label="9 - Being Prepared" />

          <Button label="4 - Having A Positive Attitude" />
          <Button label="5 - Being Passionate" />
          <Button label="6 - Using Good Body Language" />

          <Button label="1 - Being on Time" />
          <Button label="2 - Making An Effort" />
          <Button label="3 - Being High Energy" />

          <Button label="CHARLENE LUGTU" />
          <Button label="0 - Having A Strong Work Ethic" />
          <Button label="C-PCIT9" />
        </div>
      </div>
    </div>
  );
}