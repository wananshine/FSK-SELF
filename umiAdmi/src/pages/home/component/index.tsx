import React from 'react';
import {  HomeModelState, ConnectProps, Loading, connect  } from 'umi';
import { Button } from 'antd'
// import style from './index';


const style = {
    canvas: {
        boxShadow: '0 0 10px #999',
        margin: '0 auto'
    }
}


interface PageProps extends ConnectProps {
  home: HomeModelState;
  loading: boolean;
}

const HomePage: FC<PageProps> = ({ home, dispatch }) => {
  const { name } = home;
  return <div >Hello {name}</div>;
};


export default connect(({ home, loading }: { home: HomeModelState; loading: Loading }) => ({
  home,
  loading: loading.models.home,
}))(HomePage);


// export default class Home extends React.PureComponent{

//     state = {}

//     componentDidMount() {}


//     render() {

//         return(
//             <div style={{textAlign: 'center', margin: '10px auto'}}>
//                 home
//             </div>
//         )
//     }
// }


