import React, { Component } from 'react';
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="HomeContainer">
        <div className="Greeting">
          Good Afternoon, Anindyo Choudhury!
        </div>
        <div className="NavMenu">
          <div className="MenuItem">
            Sales & Services
          </div>
        </div>
        <h5 className="Apps">APPS</h5>
        <div className="AppsListing">
          <div className="ListingItem">
            Create Service Request
          </div>
          <div className="ListingItem">
            My Service Requests
          </div>
          <div className="ListingItem">
            Manage Time
          </div>
        </div>
      </div>
    )
  }
}

export default Home