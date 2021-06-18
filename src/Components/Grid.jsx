import { Table } from 'reactstrap';

const Grid = ({ data, headers }) => {

    return (<div>
        <Table>
            <thead>
                <tr>
                    {headers.map((h, i) => <th key={i} >{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((d, index) => <tr key={index}>
                    {
                        headers.map((h, i) => <td>  {`${d[h]}`}  
                        </td>)
                    }
                </tr>)
                }
            </tbody>
        </Table>
    </div>);
}

export default Grid;