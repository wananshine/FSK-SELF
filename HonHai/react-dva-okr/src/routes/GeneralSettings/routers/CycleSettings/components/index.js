import React, { PureComponent } from 'react';
import { connect } from 'dva';


@connect()
class DataDictionaryDetail extends PureComponent {

  constructor(props) {
    super(props);
  }

  render (){
        return (
          <div>
            周期设置空白页
          </div>
        )
    }
}

export default DataDictionaryDetail
