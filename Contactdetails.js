import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Contactdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    componentWillMount(){
        alert("Helloo");
    }

    componentDidMount() {
        console.log("props: ", this.props.match)
        this.EmployeeDetails();
    }

    EmployeeDetails() {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
            .then(results => { this.setState({ employees: results }) });
    }
    render() {
        alert("Hello");
        return (
            <h2>Contact Details</h2>
        )
    }
};

export default withRouter(Contactdetails);