import React, { Component, PureComponent } from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { Button } from 'antd';

@connect(({ test }) => ({
  test
}))
class Test extends PureComponent {

  constructor(props) {
    super(props);
  }


  handleDelect(){
    const { dispatch, effects } = this.props;
    console.log(this.props)
    dispatch({
      type: 'TestPage/delect',
      payload: {
        ID: 123
      }
    })
  }

  render (){

    let question = [];
    fetch('https://opentdb.com/api.php?amount=50')
      .then((response)=> {
        console.log(response.results)
        question =  response.results;
      })
      .then(function(myJson) {
        console.log(123,myJson);
      });
      console.log(question);
      return (
        <div>

          {
            _.map(question, (q, index)=>{
              return (<div key={index}>测试页面 {q.category}</div>)
            })
          }
          <Button onClick={()=>{ this.handleDelect() }}>Delete</Button>
          <TestChildren />
          <Tpl />
        </div>
      )
    }
};

class TestChildren extends Component{
  render(){
    return(
      <div>test</div>
    )
  }
};

const Tpl = ({ dispatch }) => {
  return (
    <div>123</div>
  );
};

export default Test
