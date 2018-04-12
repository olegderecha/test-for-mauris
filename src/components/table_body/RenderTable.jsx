import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'; 
import 'semantic-ui-css/semantic.min.css';
import './index.css';

class RenderTable extends Component {
  
render () {
  const rows = [
    [ 1, 'продукт 1', 400, 5 ],
    [ 2, 'продукт 2', 330, 7 ],
    [ 3, 'продукт 3', 320, 9 ], 
    [ 4, 'продукт 4', 370, 3 ],
    [ 5, 'продукт 5', 380, 2 ],
    [ 6, 'продукт 6', 340, 1 ],
    [ 7, 'продукт 7', 300, 4 ],
    [ 8, 'продукт 8', 300, 5 ],
    [ 9, 'продукт 9', 500, 6 ],
    [ 10, 'продукт 10', 510, 9 ],
    [ 11, 'продукт 11', 490, 1 ],
    [ 12, 'продукт 12', 510, 3 ],
    [ 13, 'продукт 13', 510, 5 ],
    [ 14, 'продукт 14', 510, 4 ],
    [ 15, 'продукт 15', 510, 1 ],
    [ 16, 'продукт 16', 510, 2 ],
    [ 17, 'продукт 17', 510, 7 ],
    [ 18, 'продукт 18', 510, 2 ],
    [ 19, 'продукт 19', 510, 3 ],
  ];

  return (
    <div>
      <Table celled={true}>
        {rows.map((row, index) => 
          <Table.Body key={index}>
              <Table.Row>
                <Table.Cell className='tdata'>{row[0]}</Table.Cell>
                <Table.Cell className='tdata'>{row[1]}</Table.Cell>
                <Table.Cell className='tdata'>{row[2]}</Table.Cell>
                <Table.Cell className='tdata'>{row[3]}</Table.Cell>
              </Table.Row>  
          </Table.Body> ) 
        }
      </Table>
    </div>
    )
  }
}

export default RenderTable;