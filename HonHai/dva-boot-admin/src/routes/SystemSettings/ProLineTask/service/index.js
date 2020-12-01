import $$ from 'cmn-utils';


//产线任务信息
export async function ApiProductionLineTaskInfo(payload) {
    console.log('产线任务信息:',payload);
    return $$.get(payload.lineId ? `/warehouse/tasktype/list2?lineId=${payload.lineId}` : `/warehouse/tasktype/list`)
}

//新增 产线任务信息
export async function ApiProductionTaskTypeSave(payload) {
    console.log('ApiProductionTaskTypeSave:',payload)
    return $$.post('/warehouse/tasktype', payload)
}



