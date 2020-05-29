import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="HomeContainer">
        <div className="Greeting">Good Afternoon, User!</div>
        <div className="NavMenu">
          <div className="MenuItem">Sales & Services</div>
        </div>
        <h5 className="Apps">APPS</h5>
        <div className="AppsListing">
          <Link to="/create">
            <div className="ListingItem">
              <div className="ListingItemIcon"><div className="CreateServiceRequest"></div></div>
              <div className="ListingItemText">Create Service Request</div>
            </div>
          </Link>
          <Link to="/time">
            <div className="ListingItem">
              <div className="ListingItemIcon"><div className="ManageTime"></div></div>
              <div className="ListingItemText">Manage Time</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;

// <Link to="/list">
//             <div className="ListingItem">
//               <div className="ListingItemIcon"><div className="MyServiceRequest"></div></div>
//               <div className="ListingItemText">My Service Requests</div>
//             </div>
//           </Link>