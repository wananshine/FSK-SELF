export default {
  namespace: 'blank',
  state: {
    blank: 'blank'
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
