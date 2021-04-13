import $$, { request } from 'cmn-utils';

const REQUEST = '@request';
const REQUEST_SUCCESS = '@request_success';
const REQUEST_ERROR = '@request_error';
/**
 * 如果单纯想改变一个状态可以在页面中用这个action
 * dispatch({
 *   type: 'crud/@change',
 *   payload: {
 *     showModal: true,
 *   },
 *   success: () => {
 *     console.log('state updated!')
 *   }
 * })
 */
const CHANGE_STATE = '@change';
const CHANGE_STATE_SUCCESS = '@change_success';

export const simpleModel = {
  namespace: $$.randomStr(4),
  enhance: true,
  state: {},
  effects: {},
  reducers: {}
};

export default model => {
  const { namespace, state, subscriptions, effects, reducers, enhance } = {
    ...simpleModel,
    ...model
  };
  if (!enhance) {
    return { namespace, state, subscriptions, effects, reducers };
  }
  return {
    namespace,
    state,
    subscriptions,
    effects: {
      // get old effect
      ...effects,

      /**
       * payload 如果传入数组形式的payload，会合并结果后调用一次渲染
       * success 在dispatch结束后得到成功的回调
       * error 在dispatch结束后得到失败的回调
       * afterResponse 模拟reduce中的操作，可以让我们有机会处理反回的数据，不能有副作用的方法
       */
      *[REQUEST]({ payload, success, error, afterResponse }, { call, put }) {

      },

      *[CHANGE_STATE]({ payload, success }, { put }) {

      }

    },

    reducers: {}
  }
}
