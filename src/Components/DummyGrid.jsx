import React , {Component} from 'react';
import { Table } from 'reactstrap';

class DummyGrid extends Component {
    
    constructor(props) {
        super(props);
        this.state = { jsonResponse: [] }
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => this.setState({ jsonResponse: json }))
    }

    render() { 
        const { jsonResponse } = this.state;
        return ( <div>
 <Table>
      <thead>
        <tr>
          <th>userId</th>
          <th>title</th>
          <th>id</th>
          <th>completed</th>
        </tr>
      </thead>
      <tbody>
       { jsonResponse.map( todo => 
         <tr>
          <th scope="row">{todo.userId}</th>
          <td>{todo.title   }</td>
          <td>{todo.id}</td>
          <td>{todo.completed ? 'completed': 'Left'}</td>
        </tr>)}
      </tbody>
    </Table>
        </div> );
    }
}
 
export default DummyGrid;