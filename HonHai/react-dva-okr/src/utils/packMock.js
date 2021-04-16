// http://www.wheresrhys.co.uk/fetch-mock/api
// http://mockjs.com/
import $$ from 'cmn-utils';
import Mock from 'mockjs';
import config from '@/config';
const mock = Mock.mock;


export default (...mocks) => {
  mocks.forEach(mockFile => {
    let mockAPIs = {};
    if ($$.isFunction(mockFile)) {
      mockAPIs = mockFile({ mock });
    } else if ($$.isObject(mockFile)) {
      mockAPIs = mockFile;
    } else {
      throw new Error('mock file require both Function or Object');
    };

    for(const key in mockAPIs){
      fetch(key).then(function(response) {
          // console.log(123123, response)
          // console.log(mockAPIs[key]())
      });
    };

  })
}
