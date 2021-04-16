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
            数据字典详情空白页
          </div>
        )
    }
}

export default DataDictionaryDetail
