import {
    LoadingSystemProperties,
    LoginApi
} from '../../api/api'

/*action*/
const LOADING_LANGUAGE = "login/LOADING_LANGUAGE"


export function fetchSysLanguage(result) {
    return { type: LOADING_LANGUAGE, result: result}
}


/*初始化state*/
const initState = {
    loginLanguage:null,
    sysLanguage: null
};


/*reducer*/
export default function reducer(state = initState, action) {
    console.log(action)
    switch (action.type) {
        case LOADING_LANGUAGE:
        return {
            ...state,
            loginLanguage: action.result.loginpage,
            sysLanguage: action.result.systemProperties,
        };
        default:
            return state
    }
}
  
//系统语言
export function fetchLoadingLanguage(data) {
    return async(dispatch, state) =>{
        try {
            console.log('语言参数：',data)
            state.languageVal = data;
            const port = window.location.port ? ':'+window.location.port : ''
            const url = window.location.protocol + '//' + window.location.hostname + port + window.location.pathname
            LoadingSystemProperties({
                params: data,
                url:  window.location.protocol + '//' +window.location.hostname + (window.location.port ? ':'+window.location.port : '')
            }).then((res) => {
                if (res.status === 200) {
                    //dispatch(fetchSysLanguage(res.data.data));
                    dispatch({
                        type: LOADING_LANGUAGE,
                        result: res.data.data
                      });
                    for(let i in state.sysLanguage){
                        console.log(i, ':', state.sysLanguage[i])
                    }
                }else{
                }
            }).catch((err)=>{
                console.log(err)
            }).finally(() => { 

            })
      } catch (e) {
        // dispatch();
      } finally {
        // dispatch();
      }
    }
}

export const fetchLogin = (data) => { 
    return async (dispatch, state) => { 
        try {
            LoginApi({
                passWord: "Xufen0002",
                sign: "9c7afcbd5b09300d2c777633ba73abb0",
                timestamp: "2019-12-13 15:32:04",
                type: "2",
                url: "http://10.130.200.222:3001/",
                userName: "xufen0002",
            }).then(res => { 

            }).catch(err => { 

            }).finally(() => { 

            })
        } catch{

        } finally { 

        }
    }
}