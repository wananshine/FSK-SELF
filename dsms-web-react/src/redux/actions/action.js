
/*action*/
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";
const RESET = "counter/RESET";
const FETCHED_SKUS = "counter/FETCHED_SKUS"


export function increment() {
    return {type: INCREMENT}
}
export function decrement() {
    return {type: DECREMENT}
}
export function reset() {
    return {type: RESET}
}



/*
 初始化state
 */
const initState = {
  txt: null
};


/*
 reducer
 */
export default function reducer(state = initState, action) {
  switch (action.type) {
    case FETCHED_SKUS:
      return {
        ...state,
        txt: action.result
      };
    default:
        return state
    }
}

export function fetchedSkus(result) {
    console.info(result)
    return { type: FETCHED_SKUS, result };
}
  
export function tempSaveSkusOrder(saveData) {
    console.log(2)
    return async(dispatch, state) =>{
      try {
        //dispatch(fetchedSkus(result.data.skus));
        dispatch(fetchedSkus('暂时保存成功'));
        // dispatch({
        //     type: UPDATED_PRICES,
        //     result: result.data.updatePriceFromExcel
        //   });
      } catch (e) {
        // dispatch();
      } finally {
        // dispatch();
      }
    }
}