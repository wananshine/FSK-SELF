import React, { Component } from 'react';
import { connect } from 'dva';
import styled from 'styled-components'
import { Drawer, Button } from 'antd';


const ViewBoardGrid = styled.section`
`


@connect()
class ViewBoard extends Component {

  constructor(props) {
    super(props);
  }

  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };


  render (){
    const { visible } = this.state;

    const drawerProps = {
      placement: 'right',
      key: 'right',
      mask: false,
      closable: true
    }
    return (
      <ViewBoardGrid>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
          <Drawer
            { ...drawerProps }
            title="Basic Drawer"
            onClose={this.onClose}
            visible={visible}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
      </ViewBoardGrid>
    )
  }
}


export default ViewBoard
