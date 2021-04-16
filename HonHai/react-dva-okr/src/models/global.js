import $$ from 'cmn-utils';
import modelEnhance from '@/utils/modelEnhance';
import { menu } from '@/_mocks_/user'

export default modelEnhance({
  namespace: 'global',

  state: {
    menu: [],
    flatMenu: [],
  },

  subscriptions: {

    // history 相关
    setup({ dispatch, history }) {

    }

    // socket相关
    // socket({dispatch}){},

    // keyboard 输入
    //keyEvent(dispatch) {
      // key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
    //},

  },

  effects: {

    //
    *getMenu({ payload }, { call, put, select }) {

      const response = yield call(getMenu, payload);
      if(response.length>0){

        const loopMenu = (menu, pitem = {}) => {
          menu.forEach(item => {
            if (pitem.path) {
              item.parentPath = pitem.parentPath ? pitem.parentPath.concat(pitem.path) : [pitem.path];
            }
            if (item.children && item.children.length) {
              loopMenu(item.children, item);
            }
          });
        }
        loopMenu(response);

        yield put({
            type: 'dataMenuSuccess',
            payload: {
                ...payload,
                menu: response
            }
        });
      }


    }

  },

  reducers: {
    dataMenuSuccess(state, { payload }) {
      console.log(state);
      return {
          ...state,
          menu: payload.menu
      };
    }

  }
});


export async function getMenu(payload) {
  return new Promise((resolve, reject)=>{
    resolve(menu)
  })
  // return $$.post('user/menu', payload);
}
