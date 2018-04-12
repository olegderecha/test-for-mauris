import React, { Component } from 'react';
import './index.css';
import RenderTableHeader from '../table_head/renderTableHeader';
import RenderTable from '../table_body/RenderTable';
import { Button } from 'semantic-ui-react';

class MyTable extends Component {
  onloadData = () => {
    console.log('clicked');
  }

  render (){  
    return (
      <div className='main'>
        <Button onClick={this.onloadData} className='add_btn'>add</Button>
        <div className='table'>
          <RenderTableHeader />
          <RenderTable/>
        </div>
        <section className='btn_group'>
          <Button>prev</Button>
          <Button>next</Button>
        </section>
      </div>
    )
  }
}

export default MyTable;