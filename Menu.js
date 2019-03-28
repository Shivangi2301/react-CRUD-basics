import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContactList from './contactList.js';
import AddContact from './addContact';

class Menu extends Component {
    render() {
        return [          
            <div>
                <Link to="/" >Home</Link>
                <Link to="/contactList">ContactList</Link>
                <Link to="/addContact">Add Contact</Link>
                           
                <Route path="/contactList" component={ContactList} />
                <Route path="/addContact" component={AddContact} />
            </div>
        ]
    }
};

export default Menu;