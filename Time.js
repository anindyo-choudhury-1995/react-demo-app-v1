import React, { Component } from "react";
import "./time.css";
  const nums = [1,2,3];
class Time extends Component {

  render() {
    return (
      <div className="TimeContainer">
        <div className="BorderDiv">
          <div className="TopBar">
            <div className="Title">Manage Time</div>
            <button className="ShowMyList">Show My List</button>
          </div>
          <hr />
          <div className="DateBar">
            <div>
              <input type="date" />{" "}
              <a className="LastEmptyWeek">Last Empty Week</a>
            </div>
            <div>
              <b>Time Entry Period:</b> 30-MAY-2020 - 05-JUN-2020
            </div>
          </div>
          <div className="HourDisplay">
            <div className="Hour">
              <b>Service Hours:</b> 0
            </div>
            <div className="Hour">
              <b>Non Service Hours:</b> 0
            </div>
            <div className="Hour">
              <b>Time off:</b> 0
            </div>
            <div className="Hour">
              <b>Total Hours:</b> 0
            </div>
          </div>
          <div className="TimeEntryTable">
            <table>
              <thead>
              <tr>
                <th>Service Request</th>
                <th>Activity</th>
                <th>Task Type</th>
                <th>Delivery Type</th>
                <th>
                  Sat <br />
                  (30 MAY)
                </th>
                <th>
                  Sun <br />
                  (24 MAY)
                </th>
                <th>
                  Mon <br />
                  (25 MAY)
                </th>
                <th>
                  Tue <br />
                  (2 JUN)
                </th>
                <th>
                  Wed <br />
                  (27 MAY)
                </th>
                <th>
                  Thu <br />
                  (28 MAY)
                </th>
                <th>
                  Fri <br />
                  (29 MAY)
                </th>
                <th>Note</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              { 
                nums.map((num, index) => (
              <tr key={index}>
                <th>
                  <select name="cars" id="cars">
                    <option value="">Select Service Request</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </th>
                <th>
                  <select name="cars" id="cars">
                    <option value="">Select Activity</option>
                    <option value="volvo">Day 1 Onboarding</option>
                    <option value="saab">Technical Support</option>
                    <option value="opel">Cloud Coaching</option>
                  </select>
                </th>
                <th>
                  <select name="cars" id="cars">
                    <option value="">Task Type</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </th>
                <th>
                  <select name="cars" id="cars">
                    <option value="">Delivery Type</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                
                </th>
                <th>
                  <input className="TimeCell" type="number"/>
                </th>
                <th>
                  <input className="TimeCell" type="number" />
                </th>
                <th>
                  <input className="TimeCell" type="number" />
                </th>
                <th>
                  <input className="TimeCell" type="number" />
                </th>
                <th>
                  <input className="TimeCell" type="number" />
                </th>
                <th>
                  <input className="TimeCell" type="number" />
                </th>
                <th>
                  <input className="TimeCell" type="number" />
                </th>
                <th><button>Note</button></th>
                <th><button>Delete</button></th>
              </tr>
                ))
              }
              </tbody>
              

            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Time;
