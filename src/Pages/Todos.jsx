import React , {Component} from 'react';
import Grid from '../Components/Grid';

class Todos extends Component {
    
    constructor(props) {
        super(props);
        this.state = { jsonResponse: [] }
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => this.setState({ jsonResponse: json }))
    }

    render() { 
      const headers = ['userId', 'title', 'id', 'completed']
        const { jsonResponse } = this.state;
        return ( <div>
          <Grid headers={headers} data={jsonResponse}></Grid>
        </div> );
    }
}
 
export default Todos;