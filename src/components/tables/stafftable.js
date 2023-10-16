const StaffTable = () =>{




    return (
        <div className="row my-4">
        <div className="col-md-12">
          <div className="card shadow">
            <div className="card-body">
              <table className="table datatables" id="dataTable-1">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Department</th>
                    <th>Company</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                    <td>368</td>
                    <td>Imani Lara</td>
                    <td>(478) 446-9234</td>
                    <td>Asset Management</td>
                    <td>Borland</td>
                    <td>9022 Suspendisse Rd.</td>
                    <td>High Wycombe</td>
                    <td>Jun 8, 2019</td>
                    <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="text-muted sr-only">Action</span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Edit</a>
                        <a className="dropdown-item" href="#">Remove</a>
                        <a className="dropdown-item" href="#">Assign</a>
                      </div>
                    </td>
                  </tr>
                 
                  <tr>
                    
                    <td>427</td>
                    <td>Clark Dennis</td>
                    <td>(239) 172-7907</td>
                    <td>Human Resources</td>
                    <td>Finale</td>
                    <td>Ap #978-3375 Adipiscing Av.</td>
                    <td>High Level</td>
                    <td>Sep 16, 2020</td>
                    <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="text-muted sr-only">Action</span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Edit</a>
                        <a className="dropdown-item" href="#">Remove</a>
                        <a className="dropdown-item" href="#">Assign</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> 
      </div> 
        )
}
export default StaffTable