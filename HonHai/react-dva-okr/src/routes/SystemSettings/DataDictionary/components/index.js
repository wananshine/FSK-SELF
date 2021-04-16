import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect()
class DataDictionary extends PureComponent {

  constructor(props) {
    super(props);
  }

  render (){
        return (
          <div>
            DataDictionary空白页
          </div>
        )
    }
}

export default DataDictionary
