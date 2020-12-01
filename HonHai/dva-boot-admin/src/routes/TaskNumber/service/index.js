import $$ from 'cmn-utils';

//任务次数列表
export async function ApiNumberList(payload) {
    console.log('payload:',payload);
    return $$.get(`/warehouse/part/list?partname=${payload.partname}&count=${payload.count}&pageNum=${payload.pageNum}&pageSize=${payload.pageSize}`)
}

//新增任务次数列表
export async function ApiNumberSave(payload) {
    return $$.post('/warehouse/part', payload)
}

//任务次数修改
export async function ApiNumberUpdate(payload) {
    console.log('payload:',payload);
    return $$.put('/warehouse/part', payload)
}

//任务次数删除
export async function ApiNumberkDel(payload) {
    console.log('payload:',payload)
    return $$.del(`/warehouse/part/${payload.partnameCountId}`)
}

//任务次数取消
export async function ApiNumberCancel(payload) {
    console.log('任务取消:',payload);
    return $$.post(`/warehouse/part/cancel`, payload)
}
