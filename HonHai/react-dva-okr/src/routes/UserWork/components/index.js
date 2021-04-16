import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styled from 'styled-components'



const UserWorkGrid = styled.section`

`

@connect()
class UserWork extends PureComponent {

  constructor(props) {
    super(props);
  }

  render (){
        return (
          <UserWorkGrid>
            <ul>
              UserWorkGrid
            </ul>
          </UserWorkGrid>
        )
    }
}


export default UserWork
