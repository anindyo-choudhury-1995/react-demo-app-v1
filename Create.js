import React, { Component } from "react";
import "./create.css";

class Create extends Component {
  render() {
    return (
      <div className="CreateContainer">
        <div className="Heading">
          My Service Requests - Solution Engineering
        </div>
        <div className="ActionBar">
          <button>
            Submit Service Request
          </button>
          <button>
            Cancel
          </button>
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
        <div className="DescriptionBox">
          <div>
            Description*
          </div>
          <div className="DescriptionTextarea">
            <textarea />
          </div>
        </div>
        <div className="ServicesBox">
          <div>
            Services*
          </div>
          <div>
            <b>Customer Workshop or Cloud Day -</b> One or many customer workshop or event focused on highlighting compelling and differentiated positioning of Oracle Solution and Capabilities.
          </div>
        </div>
        <div>
          <button>
            Change Service Selection
          </button>
        </div>
        <div className="QuestoionsBox">
          <div>
            Questions*
          </div>
          <div>
            <div className="QuestionAnswers">
              <div className="Question">
              Any other information for this service request? (e.g. additional products, business context)?*
              </div>
              <div className="Answer">
                <textarea />
              </div>
            </div>
            <div className="QuestionAnswers">
              <div className="Question">
              Does this require on site resources?*
              </div>
              <div className="Answer">
                <textarea />
              </div>
            </div>
            <div className="QuestionAnswers">
              <div className="Question">
              What is the timeline identified to begin the service?*
              </div>
              <div className="Answer">
                <textarea />
              </div>
            </div>
            <div className="QuestionAnswers">
              <div className="Question">
              What needs to be highlighted for the customer?*
              </div>
              <div className="Answer">
                <textarea />
              </div>
            </div>
            <div className="QuestionAnswers">
              <div className="Question">
              Who are the key customer stakeholders and personas to target?*
              </div>
              <div className="Answer">
                <textarea />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
