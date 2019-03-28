import React, { Component } from 'react';
import Contactdetails from './Contactdetails.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class contactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    this.EmployeeList();
  }
  EmployeeList() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(results => {
        this.setState({ employees: results })
        .catch(
          error => { console.log(error); }
        );
      });

  }
  onDelete(e) {

  }

  render() {
    console.log(this.state.employees);
    const persons = this.state.employees.map((item, i) => (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <Link to={"/Contactdetails/" + item.id} >{item.name}</Link>
                <Route exact path={"/Contactdetails/:id"} component={Contactdetails}></Route>
              </td>
              <td>
                <button onClick={this.onDelete}>
                  Delete
                                </button>
              </td>
            </tr>

          </tbody>
        </table>
        {/* <Link to="/">Delete</Link> */}
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{persons}</div>
      </div>
    );
  }
};

export default withRouter(contactList);