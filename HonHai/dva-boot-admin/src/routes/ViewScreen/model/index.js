import { routerRedux } from 'dva';
import $$ from 'cmn-utils';
import modelEnhance from '@/utils/modelEnhance';
import PageHelper from '@/utils/pageHelper';
import { ApiDataProduct, ApiDataTimeUpdate } from '../service';
import { ApiLineInfo } from "../../SystemSettings/LineInformation/service";

let LOADED = false;
export default modelEnhance({
    namespace: 'ViewScreenData',  //ViewScreenData

    state: {
        pageData: {},
        employees: []
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                const url = '/sign/view_screen';
                if (pathname === url && !LOADED) {
                    LOADED = true;
                    dispatch({
                        type: 'init',
                        payload: {
                            pageNum: 1,
                            pageSize: 10,
                            startDate: '',
                            endDate: '',
                            time: '',
                            partName: '',
                            line: '',
                            lotNo: ''
                        }
                    });
                }else if(pathname !== url){
                    LOADED = false;
                }
            });
        }
    },

    effects: {
        // 进入页面加载
        *init({ payload }, { call, put, select }) {

            const response = yield call(ApiDataProduct, payload);
            if(response && response && response.code === 200){
                yield put({
                    type: 'dataScreenSuccess',
                    payload: {
                        ...payload,
                        pageData: response,
                        pageNum: 1,
                        pageSize: 10
                    },
                });
            }

            yield put({
                type: '@request',
                afterResponse: resp => resp.data,
                payload: {
                    valueField: 'employees',
                    url: ApiDataProduct
                }
            });

            const res = yield call(ApiDataTimeUpdate, payload);
            console.log('ApiDataTimeUpdate',res)
            if(res && res && res.code === 200 && res.data && res.data[0]){
                yield put({
                    type: 'dataTimeSuccess',
                    payload: {
                        ...res.data
                    }
                });
            }


        },
        // 获取分页数据
        *getPageInfo({ payload }, { call, put }) {
            const response = yield call(ApiDataProduct, payload);
            if(response && response.code === 200){
                yield put({
                    type: 'dataScreenSuccess',
                    payload: {
                        pageData: response,
                        pageNum: 1,
                        pageSize: 10,
                        startDate: '',
                        endDate: '',
                        time: '',
                        partName: '',
                        line: '',
                        lotNo: ''
                    },
                });
            }
        },
        // 保存 之后查询分页
        *save({ payload }, { call, put, select, take }) {
            const { values, success } = payload;
            const { pageData } = yield select(state => state.crud);
            // put是非阻塞的 put.resolve是阻塞型的
            yield put.resolve({
                type: '@request',
                payload: {
                    notice: true,
                    url: '/crud/save',
                    data: values
                }
            });

            yield put({
                type: 'getPageInfo',
                payload: { pageData }
            });
            success();
        },
        // 修改
        *update({ payload }, { call, put }) {},
        // 删除 之后查询分页
        *remove({ payload }, { call, put, select }) {
            const { records, success } = payload;
            const { pageData } = yield select(state => state.crud);
            yield put({
                type: '@request',
                payload: {
                    notice: true,
                    url: '/crud/bathDelete',
                    data: records.map(item => item.id)
                }
            });
            yield put({
                type: 'getPageInfo',
                payload: { pageData }
            });
            success();
        },
        // 获取员工列表
        *getEmployees({ payload }, { call, put }) {
            yield put({
                type: '@request',
                afterResponse: resp => resp.data,
                payload: {
                    valueField: 'employees',
                    url: '/crud/getWorkEmployee'
                }
            });
        }
    },

    reducers: {
        dataScreenSuccess(state, { payload }) {
            return {
                ...state,
                pageData: payload.pageData,
                pageNum: payload.pageNum,
                pageSize: payload.pageSize,
                startDate: payload.startDate,
                endDate: payload.endDate,
                time: payload.time,
                partName: payload.partName,
                line: payload.line,
                lotNo: payload.lotNo
            };
        },
        dataTimeSuccess(state, { payload }){
            return {
                ...state,
                timingData: payload
            };
        }
    }
});