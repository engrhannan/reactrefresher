import React, { Component } from 'react';
import Grid from '../Components/Grid';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { jsonResponse: [] }
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ jsonResponse: json }))
    }
    render() { 
        const headers = ['id','email', 'name', 'username', ]
        const { jsonResponse } = this.state
        return (<Grid data={jsonResponse} headers={headers}></Grid>);
    }
}
 
export default Users;