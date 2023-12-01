import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* Navigation menu */}
      </nav>
      <div class="jumbotron jumbotron-fluid"> {/* Banner content */} </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="card"> Book an appointment </div>{" "}
        </div>
        <div class="col-sm-4">
          <div class="card"> Find a doctor near you</div>{" "}
        </div>
        <div class="col-sm-4">
          <div class="card">Book online consultation </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
