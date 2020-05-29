import React, { Component } from "react";
import "./create.css";

class Create extends Component {
  countries = [{"label":"Afghanistan","value":"AF"},{"label":"Aland Islands","value":"AX"},{"label":"Albania","value":"AL"},{"label":"Algeria","value":"DZ"},{"label":"American Samoa","value":"AS"},{"label":"Andorra","value":"AD"},{"label":"Angola","value":"AO"},{"label":"Anguilla","value":"AI"},{"label":"Antarctica","value":"AQ"},{"label":"Antigua and Barbuda","value":"AG"},{"label":"Argentina","value":"AR"},{"label":"Armenia","value":"AM"},{"label":"Aruba","value":"AW"},{"label":"Australia","value":"AU"},{"label":"Austria","value":"AT"},{"label":"Azerbaijan","value":"AZ"},{"label":"Bahamas","value":"BS"},{"label":"Bahrain","value":"BH"},{"label":"Bangladesh","value":"BD"},{"label":"Barbados","value":"BB"},{"label":"Belarus","value":"BY"},{"label":"Belgium","value":"BE"},{"label":"Belize","value":"BZ"},{"label":"Benin","value":"BJ"},{"label":"Bermuda","value":"BM"},{"label":"Bhutan","value":"BT"},{"label":"Bolivia","value":"BO"},{"label":"Bosnia and Herzegovina","value":"BA"},{"label":"Botswana","value":"BW"},{"label":"Bouvet Island","value":"BV"},{"label":"Brazil","value":"BR"},{"label":"British Indian Ocean Territory","value":"IO"},{"label":"Brunei Darussalam","value":"BN"},{"label":"Bulgaria","value":"BG"},{"label":"Burkina Faso","value":"BF"},{"label":"Burundi","value":"BI"},{"label":"Cabo Verde","value":"CV"},{"label":"Cambodia","value":"KH"},{"label":"Cameroon","value":"CM"},{"label":"Canada","value":"CA"},{"label":"Cayman Islands","value":"KY"},{"label":"Central African Republic","value":"CF"},{"label":"Chad","value":"TD"},{"label":"Chile","value":"CL"},{"label":"China","value":"CN"},{"label":"Christmas Island","value":"CX"},{"label":"Cocos (Keeling) Islands","value":"CC"},{"label":"Colombia","value":"CO"},{"label":"Comoros","value":"KM"},{"label":"Congo","value":"CG"},{"label":"Congo, The Democratic Republic of the","value":"CD"},{"label":"Cook Islands","value":"CK"},{"label":"Costa Rica","value":"CR"},{"label":"Cote d'Ivoire","value":"CI"},{"label":"Croatia","value":"HR"},{"label":"Cyprus","value":"CY"},{"label":"Czech Republic","value":"CZ"},{"label":"Denmark","value":"DK"},{"label":"Djibouti","value":"DJ"},{"label":"Dominica","value":"DM"},{"label":"Dominican Republic","value":"DO"},{"label":"Ecuador","value":"EC"},{"label":"Egypt","value":"EG"},{"label":"El Salvador","value":"SV"},{"label":"Equatorial Guinea","value":"GQ"},{"label":"Eritrea","value":"ER"},{"label":"Estonia","value":"EE"},{"label":"Ethiopia","value":"ET"},{"label":"Falkland Islands (Malvinas)","value":"FK"},{"label":"Faroe Islands","value":"FO"},{"label":"Fiji","value":"FJ"},{"label":"Finland","value":"FI"},{"label":"France","value":"FR"},{"label":"French Guiana","value":"GF"},{"label":"French Polynesia","value":"PF"},{"label":"French Southern Territories","value":"TF"},{"label":"Gabon","value":"GA"},{"label":"Gambia","value":"GM"},{"label":"Georgia","value":"GE"},{"label":"Germany","value":"DE"},{"label":"Ghana","value":"GH"},{"label":"Gibraltar","value":"GI"},{"label":"Greece","value":"GR"},{"label":"Greenland","value":"GL"},{"label":"Grenada","value":"GD"},{"label":"Guadeloupe","value":"GP"},{"label":"Guam","value":"GU"},{"label":"Guatemala","value":"GT"},{"label":"Guernsey","value":"GG"},{"label":"Guinea","value":"GN"},{"label":"Guinea-Bissau","value":"GW"},{"label":"Guyana","value":"GY"},{"label":"Haiti","value":"HT"},{"label":"Heard Island and McDonald Islands","value":"HM"},{"label":"Holy See (Vatican City State)","value":"VA"},{"label":"Honduras","value":"HN"},{"label":"Hong Kong","value":"HK"},{"label":"Hungary","value":"HU"},{"label":"Iceland","value":"IS"},{"label":"India","value":"IN"},{"label":"Indonesia","value":"ID"},{"label":"Iran, Islamic Republic of","value":"IR"},{"label":"Iraq","value":"IQ"},{"label":"Ireland","value":"IE"},{"label":"Isle of Man","value":"IM"},{"label":"Israel","value":"IL"},{"label":"Italy","value":"IT"},{"label":"Jamaica","value":"JM"},{"label":"Japan","value":"JP"},{"label":"Jersey","value":"JE"},{"label":"Jordan","value":"JO"},{"label":"Kazakhstan","value":"KZ"},{"label":"Kenya","value":"KE"},{"label":"Kiribati","value":"KI"},{"label":"Korea, Democratic People's Republic of","value":"KP"},{"label":"Korea, Republic of","value":"KR"},{"label":"Kosovo","value":"XK"},{"label":"Kuwait","value":"KW"},{"label":"Kyrgyzstan","value":"KG"},{"label":"Lao People's Democratic Republic","value":"LA"},{"label":"Latvia","value":"LV"},{"label":"Lebanon","value":"LB"},{"label":"Lesotho","value":"LS"},{"label":"Liberia","value":"LR"},{"label":"Libya","value":"LY"},{"label":"Liechtenstein","value":"LI"},{"label":"Lithuania","value":"LT"},{"label":"Luxembourg","value":"LU"},{"label":"Macao","value":"MO"},{"label":"Macedonia, The Former Yugoslav Republic of","value":"MK"},{"label":"Madagascar","value":"MG"},{"label":"Malawi","value":"MW"},{"label":"Malaysia","value":"MY"},{"label":"Maldives","value":"MV"},{"label":"Mali","value":"ML"},{"label":"Malta","value":"MT"},{"label":"Marshall Islands","value":"MH"},{"label":"Martinique","value":"MQ"},{"label":"Mauritania","value":"MR"},{"label":"Mauritius","value":"MU"},{"label":"Mayotte","value":"YT"},{"label":"Mexico","value":"MX"},{"label":"Micronesia, Federated States of","value":"FM"},{"label":"Moldova","value":"MD"},{"label":"Monaco","value":"MC"},{"label":"Mongolia","value":"MN"},{"label":"Montenegro","value":"ME"},{"label":"Montserrat","value":"MS"},{"label":"Morocco","value":"MA"},{"label":"Mozambique","value":"MZ"},{"label":"Myanmar","value":"MM"},{"label":"Namibia","value":"NA"},{"label":"Nauru","value":"NR"},{"label":"Nepal","value":"NP"},{"label":"Netherlands","value":"NL"},{"label":"Netherlands Antilles","value":"AN"},{"label":"New Caledonia","value":"NC"},{"label":"New Zealand","value":"NZ"},{"label":"Nicaragua","value":"NI"},{"label":"Niger","value":"NE"},{"label":"Nigeria","value":"NG"},{"label":"Niue","value":"NU"},{"label":"Norfolk Island","value":"NF"},{"label":"Northern Mariana Islands","value":"MP"},{"label":"Norway","value":"NO"},{"label":"Oman","value":"OM"},{"label":"Pakistan","value":"PK"},{"label":"Palau","value":"PW"},{"label":"Palestine, State of","value":"PS"},{"label":"Panama","value":"PA"},{"label":"Papua New Guinea","value":"PG"},{"label":"Paraguay","value":"PY"},{"label":"Peru","value":"PE"},{"label":"Philippines","value":"PH"},{"label":"Pitcairn","value":"PN"},{"label":"Poland","value":"PL"},{"label":"Portugal","value":"PT"},{"label":"Puerto Rico","value":"PR"},{"label":"Qatar","value":"QA"},{"label":"Reunion","value":"RE"},{"label":"Romania","value":"RO"},{"label":"Russian Federation","value":"RU"},{"label":"Rwanda","value":"RW"},{"label":"Saint Helena, Ascension and Tristan da Cunha","value":"SH"},{"label":"Saint Kitts and Nevis","value":"KN"},{"label":"Saint Lucia","value":"LC"},{"label":"Saint Vincent and the Grenadines","value":"VC"},{"label":"Samoa","value":"WS"},{"label":"San Marino","value":"SM"},{"label":"Sao Tome and Principe","value":"ST"},{"label":"Saudi Arabia","value":"SA"},{"label":"Senegal","value":"SN"},{"label":"Serbia","value":"RS"},{"label":"Seychelles","value":"SC"},{"label":"Sierra Leone","value":"SL"},{"label":"Singapore","value":"SG"},{"label":"Slovakia","value":"SK"},{"label":"Slovenia","value":"SI"},{"label":"Solomon Islands","value":"SB"},{"label":"Somalia","value":"SO"},{"label":"South Africa","value":"ZA"},{"label":"South Georgia and the South Sandwich Islands","value":"GS"},{"label":"South Sudan","value":"SS"},{"label":"Spain","value":"ES"},{"label":"Sri Lanka","value":"LK"},{"label":"Sudan","value":"SD"},{"label":"Suriname","value":"SR"},{"label":"Svalbard and Jan Mayen","value":"SJ"},{"label":"Swaziland","value":"SZ"},{"label":"Sweden","value":"SE"},{"label":"Switzerland","value":"CH"},{"label":"Syrian Arab Republic","value":"SY"},{"label":"Taiwan","value":"TW"},{"label":"Tajikistan","value":"TJ"},{"label":"Tanzania, United Republic of","value":"TZ"},{"label":"Thailand","value":"TH"},{"label":"Timor-Leste","value":"TL"},{"label":"Togo","value":"TG"},{"label":"Tokelau","value":"TK"},{"label":"Tonga","value":"TO"},{"label":"Trinidad and Tobago","value":"TT"},{"label":"Tunisia","value":"TN"},{"label":"Turkey","value":"TR"},{"label":"Turkmenistan","value":"TM"},{"label":"Turks and Caicos Islands","value":"TC"},{"label":"Tuvalu","value":"TV"},{"label":"Uganda","value":"UG"},{"label":"Ukraine","value":"UA"},{"label":"United Arab Emirates","value":"AE"},{"label":"United Kingdom","value":"GB"},{"label":"United States","value":"US"},{"label":"United States Minor Outlying Islands","value":"UM"},{"label":"Uruguay","value":"UY"},{"label":"Uzbekistan","value":"UZ"},{"label":"Vanuatu","value":"VU"},{"label":"Venezuela","value":"VE"},{"label":"Viet Nam","value":"VN"},{"label":"Virgin Islands, British","value":"VG"},{"label":"Virgin Islands, U.S.","value":"VI"},{"label":"Wallis and Futuna","value":"WF"},{"label":"Western Sahara","value":"EH"},{"label":"Yemen","value":"YE"},{"label":"Zambia","value":"ZM"},{"label":"Zimbabwe","value":"ZW"}];
  languages = [{"label":"English","value":"ENGLISH"},{"label":"Chinese","value":"CHINESE"},{"label":"Arabic","value":"ARABIC"},{"label":"Astro-Bavarian","value":"ASTRO_BAVARIAN"},{"label":"Czech","value":"CZECH"},{"label":"Danish","value":"DANISH"},{"label":"Dutch","value":"DUTCH"},{"label":"Finnish","value":"FINNISH"},{"label":"French","value":"FRENCH"},{"label":"German","value":"GERMAN"},{"label":"Greek","value":"GREEK"},{"label":"Hindi","value":"HINDI"},{"label":"Hungarian","value":"HUNGARIAN"},{"label":"Italian","value":"ITALIAN"},{"label":"Japanese","value":"JAPANESE"},{"label":"Lhanda/Punjabi","value":"LHANDA_PUNJABI"},{"label":"Polish","value":"POLISH"},{"label":"Portuguese","value":"PORTUGUESE"},{"label":"Romanian","value":"ROMANIAN"},{"label":"Russian","value":"RUSSIAN"},{"label":"Serbian","value":"SERBIAN"},{"label":"Spanish","value":"SPANISH"},{"label":"Swedish","value":"SWEDISH"},{"label":"Turkish","value":"TURKISH"},{"label":"Ukrainian","value":"UKRAINIAN"}];
  pillars = [{"label":"SaaS - Vertical - Pillar","value":"SaaS_Vertical_Pillar"},{"label":"SaaS - Services Automation - Pillar","value":"SaaS_Services_Automation_Pilla"},{"label":"SaaS - Sales Automation - Pillar","value":"SaaS_Sales_Automation_Pillar"},{"label":"SaaS - Marketing Sales Automation - Pillar","value":"SaaS_Marketing_Sales_Automatio"},{"label":"SaaS - HCM - Pillar","value":"SaaS_HCM_Pillar"},{"label":"SaaS - ERP&EPM - Pillar","value":"SaaS _ERP_EPM_Pillar"},{"label":"SaaS - Advanced Cloud Services - Pillar","value":"SaaS_Advanced_Cloud_Services_P"},{"label":"PaaS & IaaS - Universal Credit - Pillar","value":"PaaS_IaaS_Universal_Credit_Pil"},{"label":"PaaS - Middleware - Pillar","value":"PaaS_Middleware_Pillar"},{"label":"PaaS - Database - Pillar","value":"PaaS_Database_Pillar"},{"label":"PaaS - Cloud Priority Service - Pillar","value":"PaaS_Cloud_Priority_Service_Pi"},{"label":"License - Vertical Applications - Pillar","value":"License_Vertical_Applications_"},{"label":"License - Middleware - Pillar","value":"License_Middleware_Pillar"},{"label":"License - Database - Pillar","value":"License_Database_Pillar"},{"label":"License - Applications - Horizontal - Pillar","value":"License_Applications_Horizonta"},{"label":"IaaS - Public Cloud - Pillar","value":"IaaS_Public_Cloud_Pillar"},{"label":"IaaS - Private Cloud - Pillar","value":"IaaS_Private_Cloud_Pillar"},{"label":"IaaS - Managed Cloud Services - Pillar","value":"IaaS_Managed_Cloud_Services_Pi"},{"label":"Hardware - ZFS and Flash Storage - Pillar","value":"Hardware_ZFS_Flash_Storage_Pil"},{"label":"Hardware - Tape - Pillar","value":"Hardware_Tape_Pillar"},{"label":"Hardware - Backup Recovery (ZDLRA) - Pillar","value":"Hardware - Backup Recovery (ZD"},{"label":"DaaS - Pillar","value":"DaaS - Pillar"},{"label":"Hardware - Database Appliance","value":"Hardware - Database Appliance"},{"label":"Hardware - Engineered Systems - Pillar","value":"Hardware - Engineered Systems"},{"label":"Hardware - SPARC - Pillar","value":"Hardware - SPARC - Pillar"}];
  platforms = [{"label":"NO Platform or ALL Platform","value":"NO_ALL_PLATFORM"},{"label":"Applications Development","value":"APPLICATIONS_DEVELOPMENT"},{"label":"Apps on IaaS","value":"APPS_IAAS"},{"label":"Business Analytics/Big Data","value":"BUSINESS_ANALYTICS_BIG_DATA"},{"label":"Cloud@Cust, ExaCM","value":"CLOUD_CUST_EXACM"},{"label":"Engineered Systems","value":"ENGINEERED_SYSTEMS"},{"label":"IaaS, Cloud Infrastructure (OCI)","value":"IAAS_OCI"},{"label":"Info / Data Management","value":"INFO_DATA_MGMT"},{"label":"Integration","value":"INTEGRATION"},{"label":"IT Ops Mgmt","value":"IT_OPS_MGMT"},{"label":"OCI-C to OCI","value":"OCI_C_OCI"},{"label":"SAP","value":"SAP"},{"label":"Security","value":"SECURITY"},{"label":"Servers & Storage","value":"SERVER_STORAGE"},{"label":"SaaS - Cloud Tech Ops","value":"SAAS_CLOUD_TECH_OPS"},{"label":"SaaS-CX","value":"SAAS_CX"},{"label":"SaaS-ERP/EPM/SCM","value":"SAAS_ERP_EPM_HCM"},{"label":"SaaS-HCM","value":"SAAS_HCM"},{"label":"SaaS-Oracle Marketing Cloud","value":"SAAS_OMC"},{"label":"CEGBU Applied Technology","value":"CEGBU_APPLIED_TECHNOLOGY"},{"label":"RGBU Enterprise","value":"RGBU_Enterprise"},{"label":"RGBU OmniChannel","value":"RGBU_OmniChannel"}];
  render() {
    return (
      <div className="CreateContainer">
        <div className="Heading">
          My Service Requests - Solution Engineering
        </div>
        <div className="ActionBar">
          <button className="CreateButton">
            Submit Service Request
          </button>
          <button className="CreateButton">
            Cancel
          </button>
        </div>
        <div className="TwoColumns">
          <div className="Columns">
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Opportunity</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="">Select Opportunity</option>
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
                  <option value="">Select Account</option>
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
                <option value="">Select Country</option>
                {this.countries.map((country, i) => {
                  return (
                    <option key={i} value={country.value}>{country.label}</option>
                  )
                })}
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Language Of Delivery</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                <option value="">Select Language</option>
                  {this.languages.map((language, i) => {
                  return (
                    <option key={i} value={language.value}>{language.label}</option>
                  )
                })}
                </select>
              </div>
            </div>
          </div>
          <div className="Columns">
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Customer Deadline*</div>
              <div className="ColumnItemRight">
                <input className="CustomerDeadline" type="date" />
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Primary Pillar*</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                <option value="">Select Primary Pillar</option>
                  {this.pillars.map((pillar, i) => {
                  return (
                    <option key={i} value={pillar.value}>{pillar.label}</option>
                  )
                })}
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Additional Pillar</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                <option value="">Select Additional Pillar</option>
                  {this.pillars.map((pillar, i) => {
                  return (
                    <option key={i} value={pillar.value}>{pillar.label}</option>
                  )
                })}
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Platform</div>
              <div className="ColumnItemRight">
                <select name="cars" id="cars">
                  <option value="">Select Platform</option>
                  {this.platforms.map((platform, i) => {
                  return (
                    <option key={i} value={platform.value}>{platform.label}</option>
                  )
                })}
                </select>
              </div>
            </div>
            <div className="ColumnItems">
              <div className="ColumnItemLeft">Attachments</div>
              <div className="ColumnItemRight">
                <button className="CreateButton">Add/View</button>
              </div>
            </div>
          </div>
        </div>
        <div className="DescriptionBox">
          <div>
            <b>Description*</b>
          </div>
          <div className="DescriptionTextarea">
            <textarea />
          </div>
        </div>
        <div className="ServicesBox">
          <div>
            <b>Services*</b>
          </div>
          <div className="ServiceListing">
            <div className="ServiceItem">
              <b>Customer Workshop or Cloud Day -</b> One or many customer workshop or event focused on highlighting compelling and differentiated positioning of Oracle Solution and Capabilities.
            </div>
            <div className="ServiceItem">
              <b>Consumption Service -</b> One or many customer workshop or event focused on highlighting compelling and differentiated positioning of Oracle Solution and Capabilities.
            </div>
            <div className="ServiceItem">
              <b>Opportunity Pursuit -</b> One or many customer workshop or event focused on highlighting compelling and differentiated positioning of Oracle Solution and Capabilities.
            </div>
            <div className="ServiceItem">
              <b>Expansion/Renewal Services  -</b> One or many customer workshop or event focused on highlighting compelling and differentiated positioning of Oracle Solution and Capabilities.
            </div>
          </div>
        </div>
        {/*<div className="ChangeServiceBox">
          <button className="CreateButton">
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
        </div>*/}
      </div>
    );
  }
}

export default Create;
