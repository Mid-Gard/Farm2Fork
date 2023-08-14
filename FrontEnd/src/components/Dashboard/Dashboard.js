import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="containerr">
        <div className="details">
          <h1>Bevarages</h1>
          <h2>Sold</h2>
          <div className="detailsContent">
            <p>Wheat : 10kg Validy : 2 months</p>
            <p>Rice : 10kg Validy : 2 months</p>
          </div>
          <h2>Left</h2>
          <div className="detailsContent">
            <p>Wheat : 10kg Validy : 2 months</p>
            <p>Rice : 10kg Validy : 2 months</p>
            <p>Coffee : 10kg Validy : 2 months</p>
          </div>
        </div>
        <div className="iot">
          <h1>IOT Device Data</h1>
          <h2>Foundary</h2>
          <div className="detailsContent">
            <p>Cows in farm : 50</p>
            <p>Cows outside farm : 40</p>
            <p>Prgnant Cows : 10</p>
            <p>Unhealthy Cows : 3</p>
          </div>
          <h2>Field</h2>
          <div className="detailsContent">
            <p>Wheat temp : </p>
            <p>Rice field </p>
            <p>Coffee Field</p>
          </div>
        </div>
      </div>
      <div className="containerr">
        <div className="details">
          <h1>Bevarages</h1>
          <h2>Sold</h2>
          <div className="detailsContent">
            <p>Wheat : 10kg Validy : 2 months</p>
            <p>Rice : 10kg Validy : 2 months</p>
          </div>
          <h2>Left</h2>
          <div className="detailsContent">
            <p>Wheat : 10kg Validy : 2 months</p>
            <p>Rice : 10kg Validy : 2 months</p>
            <p>Coffee : 10kg Validy : 2 months</p>
          </div>
        </div>
        <div className="iot">
          <h1>IOT Device Data</h1>
          <h2>Foundary</h2>
          <div className="detailsContent">
            <p>Cows in farm : 50</p>
            <p>Cows outside farm : 40</p>
            <p>Prgnant Cows : 10</p>
            <p>Unhealthy Cows : 3</p>
          </div>
          <h2>Field</h2>
          <div className="detailsContent">
            <p>Wheat temp : </p>
            <p>Rice field </p>
            <p>Coffee Field</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
