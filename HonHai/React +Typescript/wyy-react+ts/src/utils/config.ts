import React from 'react';
// import store from 'cmn-utils/lib/store';


/**
 * 应用配置 如请求格式，反回格式，异常处理方式，分页格式等
 */
export default {
  /**
   * HTML的title模板
   */
  htmlTitle: 'DBAdmin - {title}',

  // 异步请求配置
  request: {
    prefix: '/api',

    // 每次请求头部都会带着这些参数
    withHeaders: () => ({
      token: "11231231",
    }),

    /**
     * 因为modelEnhance需要知道服务器反回的数据，
     * 什么样的是成功，什么样的是失败，如
     * {status: true, data: ...} // 代表成功
     * {status: false, message: ...} // 代表失败
     * 实际中应该通过服务端反回的response中的
     * 成功失败标识来进行区分
     */
    afterResponse: (response:any) => {
      const { status, message } = response;
      if (status) {
        return response;
      } else {
        throw new Error(message);
      }
    },
    errorHandle: (err:any) => {
      // 请求错误全局拦截
      if (err.name === 'RequestError') {
        console.log('err')
      }
    }
  },

  // 路由加载效果
  router: {
    loading: '123'
  },
}
