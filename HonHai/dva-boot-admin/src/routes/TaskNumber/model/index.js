import modelEnhance from '@/utils/modelEnhance';
import { routerRedux } from 'dva';
import $$ from 'cmn-utils';
import {ApiNumberList, ApiNumberSave, ApiNumberUpdate, ApiNumberkDel} from '../service';
import {ApiTaskOption, ApiTaskCancel} from '../../TaskManage/service';
import { ApiLocationInfo } from "../../SystemSettings/LocInformation/service";
import {ApiLineInfo} from "../../SystemSettings/LineInformation/service";



/**
 * 当第一次加载完页面时为true
 * 可以用这个值阻止切换页面时
 * 多次初始化数据
 */
let LOADED = false;
export default modelEnhance({
    namespace: 'TaskNumberData',

    state: {
        pageData: [],
        employees: []
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                const url = '/task_number';
                if (pathname === url && !LOADED) {
                    LOADED = true;
                    dispatch({
                        type: 'init',
                        payload: {
                            pageNum: 1,
                            pageSize: 10,
                            partname: '',
                            count: 0
                        },
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
            const response = yield call(ApiNumberList, payload);
            if(response && response.code === 200){
                yield put({
                    type: 'dataNumberSuccess',
                    payload: {
                        ...payload,
                        pageData: response,
                        pageNum: payload.pageNum,
                        pageSize: payload.pageSize,
                        partname: payload.partname || '',
                        count: payload.count || 0
                    },
                });
            }

            const taskTypeResult = yield call(ApiTaskOption, {
                dictType: 'task_type',
                pageNum: '',
                pageSize: ''
            });
            if(taskTypeResult && taskTypeResult.code === 200){
                yield put({
                    type: 'dataTypeSuccess',
                    payload: {
                        ...payload,
                        typeOptions: taskTypeResult.rows,
                    },
                });
            }

            const taskLevelResult = yield call(ApiTaskOption, {
                dictType: 'task_level',
                pageNum: '',
                pageSize: ''
            });
            if(taskLevelResult && taskLevelResult.code === 200){
                yield put({
                    type: 'dataLevelSuccess',
                    payload: {
                        ...payload,
                        levelOptions: taskLevelResult.rows,
                    },
                });
            }

            const locResult = yield call(ApiLocationInfo, {
                pageNum: '',
                pageSize: ''
            });
            if(locResult && locResult.code === 200){
                yield put({
                    type: 'dataLocSuccess',
                    payload: {
                        ...payload,
                        locOptions: locResult.rows,
                    },
                });
            }

            const partNameData = yield call(ApiLineInfo, {
                dictType: 'warehouse_partName',
                pageNum: '',
                pageSize: ''
            });
            if(partNameData && partNameData.code === 200){
                yield put({
                    type: 'dataPartNameSuccess',
                    payload: {
                        pNameOptions: partNameData.rows,
                        pNameTotal: partNameData.total
                    },
                });
            }

        },
        // 获取分页数据
        *getPageInfo({ payload }, { call, put }) {
            const response = yield call(ApiNumberList, payload);
            if(response && response.code === 200){
                yield put({
                    type: 'dataNumberSuccess',
                    payload: {
                        pageData: response,
                        pageNum: payload.pageNum,
                        pageSize: payload.pageSize || 10,
                        partname: payload.partname || '',
                        count: payload.count || ''
                    },
                });
            }
        },
        // 保存 之后查询分页
        *save({ payload }, { call, put, select, take }) {

            try {
                const response = yield call(ApiNumberSave, payload);
                const res = yield select(state => state.TaskNumberData);
                yield put({
                    type: 'getPageInfo',
                    payload: res
                });
            } catch (e) {

            }
        },

        // 修改
        *update({ payload }, { call, put, select }) {
            try {
                const response = yield call(ApiNumberUpdate, payload);
                console.log('update:',response);
                const res = yield select(state => state.TaskNumberData);
                yield put({
                    type: 'getPageInfo',
                    payload: res
                });


            } catch (e) {

            }
        },
        // 删除 之后查询分页
        *remove({ payload }, { call, put, select }) {

            try {
                const response = yield call(ApiNumberkDel, payload);
                console.log('ApiNumberkDel',response, payload);
                const res = yield select(state => state.TaskNumberData);
                yield put({
                    type: 'getPageInfo',
                    payload: res
                });

            } catch (e) {

            }
            // const { records, success } = payload;
            // const { pageData } = yield select(state => state.TaskNumberData);
            // yield put({
            //     type: '@request',
            //     payload: {
            //         notice: true,
            //         url: '/TaskNumberData/bathDelete',
            //         data: records.map(item => item.id)
            //     }
            // });
            // yield put({
            //     type: 'getPageInfo',
            //     payload: { pageData }
            // });
            // success();
        },

        //取消
        *cancel({ payload }, { call, put, select }){
            try {
                const response = yield call(ApiTaskCancel, payload);
                const res = yield select(state => state.TaskNumberData);
                yield put({
                    type: 'getPageInfo',
                    payload: res
                });

            } catch (e) {

            }
        },

        // 获取员工列表
        *getEmployees({ payload }, { call, put }) {
            // yield put({
            //     type: '@request',
            //     afterResponse: resp => resp.data,
            //     payload: {
            //         valueField: 'employees',
            //         url: '/TaskNumberData/getWorkEmployee'
            //     }
            // });
        }
    },

    reducers: {
        dataNumberSuccess(state, { payload }) {
            console.log(payload);
            return {
                ...state,
                pageData: payload.pageData,
                pageNum: payload.pageNum,
                pageSize: payload.pageSize,
                partname: payload.partname || '',
                count: payload.count || ''
            };
        },
        dataTypeSuccess(state, { payload }) {
            return {
                ...state,
                ...payload
            };
        },
        dataLevelSuccess(state, { payload }) {
            return {
                ...state,
                ...payload
            };
        },
        dataLocSuccess(state, { payload }) {
            return {
                ...state,
                ...payload
            };
        },
        dataPartNameSuccess(state, { payload }){
            return {
                ...state,
                pNameData: payload
            };
        }
    }
});
