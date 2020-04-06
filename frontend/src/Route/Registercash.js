import React from "react";

const Registercash = () => {
    if(localStorage.getItem('sessionApp') === "false"){
        window.location.href = "/login";
      }else{
        return(
            <div className="container-whapper pos col-sm-12">
              <div className="media actived-tab">
              <div className="card">
                    <div className="card-body">
                    <h2>Cash controls</h2>
                        <div className="btn-group">
                            <input className="form-control disabled" value="STORE X" readOnly/>
                            <input className="form-control" value="USER X" readOnly/>
                        </div>
                        <hr/>
                        <button className="btn btn-danger">Close day</button>
                        <button className="btn btn-primary">Open day</button>
                    </div>
              </div>
                  <div className="card">
                    <div className="card-body">
                    <h2>Invoice list from today</h2>
                    <table className="table">
                        <thead>
                            <th>No.</th>
                            <th>Store</th>
                            <th>User open</th>
                            <th>Amount opened</th>
                            <th>Amount closed</th>
                            <th>Date Opened</th>
                            <th>Date close</th>
                            <th>Print</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>....</td>
                                <td>....</td>
                                <td>....</td>
                                <td>....</td>
                                <td>....</td>
                                <td>....</td>
                                <td>....</td>
                                <td>
                                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pay options
                                </button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a class="dropdown-item" href="#">Cash</a>
                                <a class="dropdown-item" href="#">Credit card / Debit card</a>
                                </div>
                                </td>
                            </tr>
                        </tbody>
                  </table>
                    <table className="table">
                        <thead>
                            <th>No.</th>
                            <th>Store</th>
                            <th>User open</th>
                            <th>Amount opened</th>
                            <th>Amount closed</th>
                            <th>Date Opened</th>
                            <th>Date close</th>
                            <th>Print</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>....</td>
                                <td>....</td>
                                <td>....</td>
                                <td>....</td>
                                <td>....</td>
                                <td>....</td>
                                <td>....</td>
                                <td><button className="btn btn-ligth"><i className="fa fa-print"></i> Print report</button></td>
                            </tr>
                        </tbody>
                  </table>
                    </div>
                  </div>
              </div>
              </div>
        )
      }
    
}

export default Registercash;