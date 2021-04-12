import React, { Component, PureComponent } from 'react';
import { connect, router } from 'dva';
import Blank from './components'
import Model from './model';


//这里的example表示后面用this.props.example获取state（根节点）中exmpale命名空间（model的example.js中的state所有数据）的数据
const mapStateToProps = (state) => Model


//通过这种方式来把model层的数据传递到当前组件了
// @connect(({ blank }) =>(blank))
@connect()
class Test extends Component {
  render (){
        return (
            <div>
                 <p>空白页</p>
            </div>
        )
    }
}
export default Test;

// export default connect(mapStateToProps)(Blank);
