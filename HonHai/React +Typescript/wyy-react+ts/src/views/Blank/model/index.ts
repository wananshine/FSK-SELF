// import modelEnhance from '@/utils/modelEnhance';
const  modelEnhance = (model:any) => {
  const { namespace, state, subscriptions, effects, reducers, enhance } = {
    ...simpleModel,
    ...model
  }
};

export default modelEnhance({
  namespace: 'blank',
});