import $$ from 'cmn-utils';


/**
 * 当第一次加载完页面时为true
 * 可以用这个值阻止切换页面时
 * 多次初始化数据
 */
let LOADED = false;
export default {
  namespace: 'DataDictionary',

  state: {
    pageData: []
  },

  subscriptions: {

    setup({ dispatch, history }){

      history.listen(({ pathname }) => {
          const url = '/';
          if (pathname === url && !LOADED) {
              LOADED = true;
              dispatch({
                  type: 'init',
                  payload: {},
              });
          }else if(pathname !== url){
              LOADED = false;
          }
      });
    }
  },

  effects: {
    // 进入页面加载
    *init({ payload }, { call, put, select }) {},

  },

  reducers: {},
};
