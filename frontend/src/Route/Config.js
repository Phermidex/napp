import React from "react";
import { render } from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Config = () => {
  return (
    <div className="container-whapper config col-sm-12">
      <hr />
      <div className="card">
        <div className="card-box">
          <h1>
            {" "}<i className="fa fa-2x fa-cog" /> Setting of the system
          </h1>
          <br />
          <Tabs>
            <TabList>
              <Tab>Basic information</Tab>
              <Tab>Payments information</Tab>
            </TabList>

            <TabPanel>
              <form>
                <div className="form-group">
                  <label>Company name</label>
                  <input
                    className="form-control"
                    name="companyname"
                    placeholder="Complete this info, please"
                  />
                </div>
                <div className="form-group">
                  <label>Logo</label>
                  <input
                    className="form-control"
                    name="companyname"
                    placeholder="Complete this info, please"
                  />
                </div>
                <div className="form-group">
                  <label>Currency</label>
                  <input
                    className="form-control"
                    name="companyname"
                    placeholder="Complete this info, please"
                  />
                </div>
                <div className="form-group">
                  <label>Admin email</label>
                  <input
                    className="form-control"
                    name="companyname"
                    placeholder="Complete this info, please"
                  />
                </div>
                <div className="form-group">
                  <label>Time zone</label>
                  <input
                    className="form-control"
                    name="companyname"
                    placeholder="Complete this info, please"
                  />
                </div>
              </form>
            </TabPanel>
            <TabPanel>
              <div className="form-group">
                <label>Current plan</label>
                <input
                  className="form-control"
                  name="companyname"
                  placeholder="Complete this info, please"
                />
              </div>
              <div className="form-group">
                <h2>Billing information</h2>
              </div>
              <div className="form-group">
                <label>Address 1</label>
                <input
                  className="form-control"
                  name="companyname"
                  placeholder="Complete this info, please"
                />
              </div>
              <div className="form-group">
                <label>Address 2</label>
                <input
                  className="form-control"
                  name="companyname"
                  placeholder="Complete this info, please"
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  className="form-control"
                  name="companyname"
                  placeholder="Complete this info, please"
                />
              </div>
              <div className="form-group">
                <div className="input-group">
                  <label>State
                  <input
                    className="form-control"
                    name="companyname"
                    placeholder="Complete this info, please"
                  />
                  </label>
                  
                  <label>Zip
                  <input
                    className="form-control"
                    name="companyname"
                    placeholder="Complete this info, please"
                  />
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  className="form-control"
                  name="companyname"
                  placeholder="Complete this info, please"
                />
              </div>
              <div className="form-group">
                <label>Phone number</label>
                <input
                  className="form-control"
                  name="companyname"
                  placeholder="Complete this info, please"
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Config;
