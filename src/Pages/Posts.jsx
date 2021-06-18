import React, { Component } from 'react';
import Grid from '../Components/Grid';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { jsonResponse: [] }
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({ jsonResponse: json }))
    }
    render() { 
        const { jsonResponse } = this.state;
        const headers = ['userId', 'id', 'title', 'body']
        return ( <div>
            <Grid headers={headers} data={this.state.jsonResponse}></Grid>
        </div> );
    }
}
 
export default Posts;