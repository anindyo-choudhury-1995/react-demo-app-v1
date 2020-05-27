import React, { Component } from "react";
import "./create.css";

class Create extends Component {
  render() {
    return (
      <div className="CreateContainer">
        <div className="Heading">
          My Service Requests - Solution Engineering
        </div>
        <div className="TwoColumns">
          <div className="Columns">
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Opportunity</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Account</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Country</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Language Of Delivery</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
          </div>
          <div className="Columns">
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Customer Deadline*</div>
              <div className="ColumnItemRight">
                <input type="date" />
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Primary Pillar*</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Additional Pillar</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Platform</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Attachments</div>
              <div className="ColumnItemRight">
                <button>Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
