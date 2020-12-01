import $$ from 'cmn-utils';

export async function ApiDataProduct(payload) {
    // delete $$.requestHeaders('Authorization');
    $$.requestHeaders('Authorization', 'undefined');
    return $$.get(`/warehouse/data/list2?startDate=${payload.startDate}&endDate=${payload.endDate}&time=${payload.time}&partName=${payload.partName}&line=${payload.line}&lotNo=${payload.lotNo}&pageNum=${payload.pageNum}&pageSize=${payload.pageSize}`);
}

export async function ApiDataTimeUpdate(payload) {
    // delete $$.requestHeaders('Authorization');
    $$.requestHeaders('Authorization', 'undefined');
    return $$.get(`/system/dict/data/dictType/refresh_time`);
}