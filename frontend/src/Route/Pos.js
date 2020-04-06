import React from "react";
import empty from "../assets/icons/pos.png";

const Pos = () => {
  if (localStorage.getItem("sessionApp") === "false") {
    window.location.href = "/login";
  } else {
    return (
      <div className="container-whapper pos col-sm-12">
          <hr/>
        <div className="media actived-tab">
          <div className="col-sm-12">
             <div className="card all">
             <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <form>
                <div className="form-group">
                  <label>Search customer</label>
                  <input className="form-control" type="text" />
                </div>
              </form>
              <div>
                <table className="table">
                  <thead>
                    <th>Code</th>
                    <th>Description</th>
                    <th>Cant</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>....</td>
                      <td>....</td>
                      <td>....</td>
                      <td>....</td>
                      <td>....</td>
                    </tr>
                    <tr>
                      <td>....</td>
                      <td>....</td>
                      <td>....</td>
                      <td>....</td>
                      <td>....</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3">&nbsp;</td>
                      <td>Subtotal</td>
                      <td>....</td>
                    </tr>
                    <tr>
                      <td colSpan="3">&nbsp;</td>
                      <td>Discounts</td>
                      <td>....</td>
                    </tr>
                    <tr>
                      <td colSpan="3">&nbsp;</td>
                      <td>Impts</td>
                      <td>....</td>
                    </tr>
                    <tr>
                      <td colSpan="3">&nbsp;</td>
                      <td>Total</td>
                      <td>....</td>
                    </tr>
                  </tfoot>
                </table>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-success">
                    Contado
                  </button>
                  <button type="button" className="btn btn-primary">
                    Credito
                  </button>
                </div>
              </div>
            </div>
             </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Products</h5>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search products..."
                  />
                </div>

                <div className="card results">
                  <div className="card-body">
                    <div className="card cart-item">
                      <div className="card-body">
                        <img src={empty} />
                        <h3>Item title</h3>
                        <h5>STOCK (5)</h5>
                        <span className="price-tag">0.00</span>
                        <div className="input-group">
                          <input
                            type="number"
                            className="form-control"
                            min="1"
                            max="5"
                          />
                        </div>
                        <div className="input-group">
                          <button className="btn btn-primary btn-block">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="devword">
          Development by{" "}
          <a href="https://github.com/Phermidex/serachJokes">Phermidex</a>
        </p>
      </div>
    );
  }
};

export default Pos;
