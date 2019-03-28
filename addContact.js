import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class addContact extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            salary: '',
            age: ''
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeSalary(e) {
        this.setState({
            salary: e.target.value
        });
    }
    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        //alert(`name: ${this.state.name} salary: ${this.state.salary} age: ${this.state.age}`);

        fetch('http://dummy.restapiexample.com/api/v1/create', {
            method: 'POST',
            headers: new Headers(),
            body: JSON.stringify({ "name": `${this.state.name}`, "salary": `${this.state.salary} `, "age": `${this.state.age}` })
        })
            .then(response => response.json())
            .then((response) => console.log("data: ", response))
            .then((response) => alert("Data Inserted Successfully"))
            .then(results => { this.setState({ employees: results }) });

        this.state = {
            name: '',
            salary: '',
            age: ''
        }
    }
    render() {
        return [
            <h2>Add Contact</h2>,
            <form onSubmit={this.onSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>Employee name: </label>
                            </td>
                            <td>
                                <input type="text" name="name" value={this.state.name} onChange={this.onChangeName} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Employee salary: </label>
                            </td>
                            <td>
                                <input type="text" name="salary" value={this.state.salary} onChange={this.onChangeSalary} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Employee age: </label>
                            </td>
                            <td>
                                <input type="text" name="age" value={this.state.age} onChange={this.onChangeAge} />
                            </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                <input type="submit" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        ]
    }
};

export default addContact;