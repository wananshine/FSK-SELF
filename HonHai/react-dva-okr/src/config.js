import React from 'react';
import LoadingPage from '@/components/Loading/LoadingPage'

// 系统通知, 定义使用什么风格的通知，normal或antdNotice
// const notice = normal;

/**
 * 应用配置 如请求格式，反回格式，异常处理方式，分页格式等
 */
export default {
    /**
     * HTML的title模板
     */
    htmlTitle: 'Ping - {title}',


    // 路由加载效果
    router: {
      loading: <LoadingPage loading />
    },

    /**
     * 系统通知
     */
    // notice


    /**
     * 模拟数据时包装反回数据
     * 因为，后端反回数据时一般都会在外边包装一层状态信息
     * 如成功时：
     * {
     *   status: true,
     *   data: responseData
     * }
     * 或出错时：
     * {
     *   status: false,
     *   code: 500,
     *   message: '用户名或密码错误'
     * }
     * 这里就是配置这两个函数，为了我们模拟数据时可以少写几行代码的 orz...
     */
     mock: {
        toSuccess: response => ({
            status: true,
            data: response
        }),

        toError: message => ({
            status: false,
            message: message
        })
     }
};
