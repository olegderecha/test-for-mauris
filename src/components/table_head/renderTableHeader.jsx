import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'; 
import 'semantic-ui-css/semantic.min.css';
import './index.css';

class RenderTableHeader extends Component {
  render () {
    const heads = { id: 'id', name: 'product', price: 'price', quantity: 'quantity' };
    return (
      <div>
        <Table celled={true} className='table_head'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell active className='hdata'>{heads.id}</Table.HeaderCell>
              <Table.HeaderCell active className='hdata'>{heads.name}</Table.HeaderCell>
              <Table.HeaderCell active className='hdata'>{heads.price}</Table.HeaderCell>
              <Table.HeaderCell active className='hdata'>{heads.quantity}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>  
        </Table> 
      </div>
    )
  }
}

export default RenderTableHeader;