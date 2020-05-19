import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import QS from 'qs'

import { Loading, message } from 'antd';




//请求带token设置
let AUTH_TOKEN = '';

const dataType = "application/x-www-form-urlencoded;charset=UTF-8"
// const dataType = "application/json" 
// const dataType = "multipart/form-data" 
// const dataType = "application/octet-stream"

const defaultTimeout = 30000
//设置超时时间
axios.defaults.timeout = defaultTimeout;

// post请求头
axios.defaults.headers.post['Content-Type'] = dataType;
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// axios.defaults.headers.common["Authorization"] = "121323458fskfsfwerfwehui";


// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = 'https://www.baidu.com';}
// else if (process.env.NODE_ENV == 'debug') {
//     axios.defaults.baseURL = 'https://www.ceshi.com';
// }
// else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = 'https://www.production.com';
// }


//请求拦截(请求发出前处理请求)
axios.interceptors.request.use(
    config => {
        //将token放入header，这里用Vuex把token放在store中，取出
        // const token = '';
        return config; 
    },
    error =>{
        if(error.message.includes('timeout')){   // 判断请求异常信息中是否含有超时timeout字符串
            console.log("错误回调", error);
            message.error('网络错误');
        }
        message.error('网络错误');
        return Promise.error(error);  // reject这个错误信息
    }
)

// 响应拦截器及异常处理（处理响应数据）
axios.interceptors.response.use( 
    response => {
        console.log(response)
        if(response.state === 200){
            return Promise.resolve(response);
        }else{
            //这个地方可以由后台编辑状态码区分不同情况，做不同的逻辑处理
            switch (response.data.code){
                case 10004:
                    // <Redirect to='/login' />
                    break;
                default:
                    return Promise.reject(response);
                    break;
            }

        }
    },
    error => {
        //请求失败，这个地方可以根据error.response.status统一处理一些界面逻辑，比如status为401未登录,可以进行重定向
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    //err.message = '请求错误'
                    // <Redirect to='/login' />   
                    break;
                case 401:
                    // 401: 未登录
                    // 未登录则跳转登录页面，并携带当前页面的路径
                    // 在登录成功后返回当前页面，这一步需要在登录页操作。  
                    // <Redirect to='/login' />
                    break;
                case 403:
                    // 403: '登录过期，请重新登录',
                     // 清除token     
                    // localStorage.removeItem('token');     
                    // store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {      
                        // <Redirect to='/login' />    
                    }, 1000);   
                    console.log(403)
                    break;
                case 404:
                    // 404请求不存在
                    console.log('http:'+404);
                    break;
                case 408:
                    //err.message = '请求超时'
                    console.log(408)
                    break;
                case 500:
                    //err.message = '服务器内部错误'
                    console.log(500)
                    break;
                case 501:
                    //err.message = '服务未实现'
                    console.log(501)
                    break;
                case 502:
                    //err.message = '网关错误'
                    console.log(502)
                    break;
                case 503:
                    //err.message = '服务不可用'
                    console.log(503)
                    break;
                case 504:
                    //err.message = '网关超时'
                    console.log(504)
                    break;
                case 505:
                    //err.message = 'HTTP版本不受支持'
                    console.log(505)
                    break;
                default:
                    console.log('default');
                    console.log('axios response 拦截器 error:',error)
                    break;   
            } 
        }
        return Promise.reject(error.response);  

    }
)

//对外接口
export const request = ({ method, url, params }) => {
    if (['Get', 'GET', 'get'].includes(method)) {
        return fetch(url, params);
    }else if(['Post','POST','post'].includes(method)){
        return post(url, params);
    }else if(['allAxios'].includes(method)){
        return allAxios(params);
    }else{
        console.log("请设置请求类型")
    }
}

// 封装get方法
const fetch = (url, params) =>{
    return new Promise((resolve, reject) =>{
        axios.get(url, params).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err);
        })
    });
}

// 封装post方法
const post = (url, params) =>{
    console.log("method-post-1-1:", params)
    return new Promise((resolve, reject) =>{
        //url, QS.stringify(params)
        axios.post(url, params, {
            headers: {
                'content-type': 'application/json',
                // "token":'14a1347f412b39f'  //token换成从缓存获取
            },
        }).then(res =>{
            console.log('res:',res)
            resolve(res.data);
        }).catch(err =>{
            reject(err.data);
        })
          
    });
}

// 封装一起请求
const allAxios = (params) =>{
    return new Promise((resolve, reject) =>{
        axios.all(params)
            .then(
                axios.spread((area, acct, perms) => {
                    console.log('全部加载完成')
                })
            )
            .catch(err => {
                console.log(err.response)
            });
    });



}




// 封装patch方法
const patch = (url, params = {}) =>{
    return new Promise((resolve, reject) =>{
        axios.patch(url, params).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err.data);
        })
          
    });
}

// 封装put方法
const put = (url, params)=>{
    return new Promise((resolve, reject) =>{
        axios.put(url, params).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err.data);
        })
          
    });
}


function getJSON (url) {
    return new Promise( (resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(this.responseText, this)
                } else {
                    var resJson = { code: this.status, response: this.response }
                    reject(resJson, this)
                }
            }
        }

        xhr.send()
    })
}



function postJSON(url, data) {
    console.log('postJSON:',url, data)
    return new Promise( (resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open("POST", url, true)
        //  application/x-www-form-urlencoded
        //  multipart/form-data
        // application/json
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // xhr.send(JSON.stringify(data))
        xhr.send(QS.stringify(data))
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText), this)
                } else {
                    var resJson = { code: this.status, response: this.response }
                    reject(resJson, this)
                }
            }
        } 
    })
}


// module.exports = {
//     getJSON: getJSON,
//     postJSON: postJSON
// }

export { postJSON, getJSON };






