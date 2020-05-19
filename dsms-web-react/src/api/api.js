import React from 'react'
import { request, postJSON } from './http'
import axios from "axios/index";
// import QS from 'qs'
console.log("开发环境:",process.env.NODE_ENV)

// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = 'http://localhost:8090/dsms/api/';}
// else if (process.env.NODE_ENV == 'debug') {
//     axios.defaults.baseURL = 'http://parkapi.flnetiot.com/dsms/api/';
// }
// else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = 'http://parkapi.flnetiot.com/dsms/api/';
// }


// const ApiUrl = "http://parkapi.flnetiot.com/dsms/api/"

// const ApiUrl1 = "http://10.134.163.87/dsms/jwt/"
// const ApiUrl2 = "http://10.134.163.87/dsms/api/"

// const ApiUrl1 = "dsms/jwt/"
// const ApiUrl2 = "dsms/api/"

const ApiUrl1 = "http://10.134.130.110/dsms/jwt/";
const ApiUrl2 = "http://10.134.130.110/dsms/api/";

// const ApiUrl1 = "http://123.58.33.166/dsms/jwt/"
// const ApiUrl2 = "http://123.58.33.166/dsms/api/"

// const ApiUrl1 = "http://10.130.200.251:9090/jwt/"   //小龙
// const ApiUrl2 = "http://10.130.200.251:9090/api/"   //小龙

// const ApiUrl1 = "http://10.205.2.95:8090/jwt/"   //小军
// const ApiUrl2 = "http://10.205.2.95:8090/api/"   //小军

// const ApiUrl1 = "http://10.130.202.179:9090/jwt/"   //刘明
// const ApiUrl2 = "http://10.130.202.179:9090/api/"   //刘明

// const ApiUrl1 = "http://10.130.202.253:8090/dsms/jwt/"   //青春
// const ApiUrl2 = "http://10.130.202.253:8090/dsms/api/"   //青春


//用户 USER
const loginUrl = ApiUrl1 + "login"  //登录
const userRolesUrl = ApiUrl2 + "user/userRoles"  //获取用户权限
const sendEmailUrl = ApiUrl1 + "send/mail"   //发送邮件
const verifyUrl = ApiUrl1 + "send/verifyCode"  //图形验证码
const checkVerifyCodeUrl = ApiUrl1 + "send/checkVerifyCode"  //验证验证码
const mailVerifyCodeUrl = ApiUrl1 + "send/mailVerifyCode"  //邮箱验证码
const checkTicketUrl =  ApiUrl1 + "checkTicket"  //验证超链接有效性
const checkEmailByUrl = ApiUrl1 + "checkEmailByUrl"  //域名下的邮箱是否存在

const updatePwdUrl = ApiUrl2 + "user/resetPassword"
const checkUserNameUrl =  ApiUrl2 + "user/checkUserNameUnique"  //验证输入的账号是否唯一
const checkEmailUrl = ApiUrl2 + "user/checkEmailUnique"   //验证邮箱是否唯一
const updataEmailUrl = ApiUrl2 + "user/updateEmail"  //更新邮箱
const updateUserImageUrl = ApiUrl2 +"user/updateUserImage"


//公用 PUBLIC
const languageUrl = ApiUrl2 + "system/LoadingSystemProperties?i18n_language="  //系统-加载系统语言信息
const categoryUrl =  ApiUrl2 + "product/category?languageCode="  //商品分类
const areaUrl = ApiUrl2 + "system/area?languageCode="  //区域


//文件 FILE
const uploadFilesUrl = ApiUrl2 + "file/uploadFiles"
const doDownloadUrl = ApiUrl2 + "file/doDownload"

//公告
const bulletinUrl = ApiUrl2 + "bulletin/list"
const bulletinDetailUrl = ApiUrl2 + "bulletin/bulletin"


//组织机构维护
const findCustUrl = ApiUrl2 + "customer/findHeadCustomer"  //查询初始化最上层机构信息
const searchCustUrl = ApiUrl2 + "customer/findCustomerById/"  //通过ID查询机构
const findChildCustUrl = ApiUrl2 + "customer/findChildCustomerById/"  //通过ID查询该机构下面的所有子机构
const addCustUrl = ApiUrl2 + "customer/addCustomer"   //添加机构
const delCustUrl = ApiUrl2 + "customer/delCustomer/"  //删除机构
const updateCustUrl = ApiUrl2 + "customer/updateCustomer"  //编辑机构
const searchCustClassUrl = ApiUrl2 + "customer/customerClass"  //查詢客戶類型
const checkCustomerNameUrl = ApiUrl2 + "customer/checkCustomerNameUnique"  //校验客户名称是否唯一
const checkCustomerEmailUrl = ApiUrl2 + "customer/checkCustomerEmailUnique"  //校验客户邮箱是否唯一


//经销价格维护
const salePriceListUrl = ApiUrl2 + "saleprice/salepriceList"  //查询初始化最上层机构信息
const subCustomerListUrl = ApiUrl2 + "saleprice/subCustomerList"
const searchSaleProductListUrl = ApiUrl2 + "saleprice/customerProductList"  //查询商品列表
const findSalepriceByIdWithPageUrl = ApiUrl2 + "saleprice/findSalepriceByIdWithPage"  //详情商品列表
const addSalePriceUrl = ApiUrl2 + "saleprice/addSaleprice"  //增加定价单
const updateSalepriceUrl = ApiUrl2 + "saleprice/updateSaleprice"  //修改定价单
const findSalepriceByIdUrl = ApiUrl2 + "saleprice/findSalepriceById/" // 通过id查询定价
const deleteSalePriceUrl = ApiUrl2 + "saleprice/deleteSaleprice/" // 删除定价单
const deleteSalePriceProductUrl = ApiUrl2 + "saleprice/deleteSalepriceProduct"  //删除定价单中的商品
const updateSalePriceStatusUrl = ApiUrl2 + "saleprice/updateSalepriceStatus"  //启用/禁用定价
const addSalePriceProductUrl = ApiUrl2 + "saleprice/addSalepriceProduct"  //加入定价车
const getSalePriceCartUrl = ApiUrl2 + "saleprice/getSalepriceCart"  //获取定价车商品
const saveAndStartUseSalePriceUrl = ApiUrl2 + "saleprice/saveAndStartUseSaleprice"  //保存并启用
const updateSalepriceWithoutCheckUrl = ApiUrl2 + "saleprice/updateSalepriceWithoutCheck"  //批量调价确定




//简易询价
const simInquiryPtUrl = ApiUrl2 + "simpleInquiry/getProductList/"  //从询价车获取商品列表
const addToCartUrl = ApiUrl2 + "simpleInquiry/addToCart"  //添加商品到询价车
const delToCartUrl = ApiUrl2 + "simpleInquiry/deleteProductFromCart"  //从询价车删除商品
const getPtFromCartUrl = ApiUrl2 + "simpleInquiry/getProductListFromCart"  //从询价车获取商品列表
const getSalesOrgUrl = ApiUrl2 + "simpleInquiry/getSalesOrgInfo"  //简易询价获取供货商信息
const createInquiryUrl = ApiUrl2 + "simpleInquiry/updateInquiryProduct"   //创建询价单
const modifireCartPtInfoUrl = ApiUrl2 + "simpleInquiry/modifireCartProductInfo" //更改采购车里商品数量，说明


//询价单管理
const getInquiryNoteListUrl = ApiUrl2 + "inquiry/getInquiryNoteList"   //询价单管理查询询价单
const getInpuiryPtListByHeadNoUrl =  ApiUrl2 + "inquiry/getInpuiryProductListByInquiryHeadNO"  //询价单详情页根据询价单号查询询价单单身
const selectProductByProductCodeUrl = ApiUrl2 + "inquiry/selectProductByProductCode"  //询价单详情页根据询价单号查询询价单单身
const currencyCodeAndStandardPriceUrl = ApiUrl2 + "inquiry/getCurrencyCodeAndStandardPrice"  //询价单管理 询价单详情页根据商品ID，规格ID查询币种，标准价格
const updateInquiryStatusByIdUrl = ApiUrl2 + "inquiry/updateInquiryStatusById"   //询价单管理编辑提交
const deleteInquiryOrderUrl = ApiUrl2 + "inquiry/deleteInquiryOrder" //删除询价单
const updateInquiryOrderRemarkUrl = ApiUrl2 + "inquiry/updateInquiryOrderRemark/"  //改备注
const getINquiryInfoUrl = ApiUrl2 + "inquiry/getINquiryInfo" //获取询价单供应商
const exportNquiryPdfUrl = ApiUrl2 + "export/inquiryOrder"  //询价单导出
const addPtToInpuiryOrderUrl = ApiUrl2 + "inquiry/addProductToInpuiryOrder"  //添加商品到询价单
const createInquiryOrderUrl = ApiUrl2 + "inquiry/createInquiryOrderOneStep"  //新增询价单
const updateInquiryOrderPageSaveUrl = ApiUrl2 + "inquiry/updateInquiryOrderPageSave"  //更新询价单
const getInquiryProductListUrl = ApiUrl2 + "inquiry/getProductList"  //获取商品列表


//简易下单
const salesOrgInfoUrl = ApiUrl2 + "car/salesOrgInfo"  //下单供应商查询
const findOrderDetailUrl = ApiUrl2 + "car/findOrder/"  //查询订单详情
const getProductListUrl = ApiUrl2 + "car/getProductList"  //获取客户下单商品列表
const findCartItemUrl = ApiUrl2 + "car/findCartItem"  //采购车细项查询
const addOrderItemUrl = ApiUrl2 + "car/addOrderItem"  //加入采购车
const confirmOrderItemUrl = ApiUrl2 + "car/confirmOrderItem"  //简易订单确认
const updateOrderItemUrl = ApiUrl2 + "car/updateOrderItem"  //修改订单商品信息
const deleteOrderItemUrl = ApiUrl2 + "car/deleteOrderItem"  //删除订单商品信息
const submitOrderItemUrl = ApiUrl2 + "car/submitOrderItem"  //提交、暂存订单
const updateOrderUrl = ApiUrl2 + "car/updateOrder"  //修改订单
const addOrderScheduleUrl = ApiUrl2 + "order/addOrUpdateOrderSchedule"  //新增订单出货计划
const deleteScheduleDetailUrl = ApiUrl2 + "order/deleteScheduleDetail"  //删除出货计划商品细项
const findOrderAddressUrl = ApiUrl2 + "car/findOrderAddress/"   //查询订单出货计划地址
const findOrderScheduleLogUrl = ApiUrl2 + "order/findOrderScheduleLog/" //订单出货计划日志查询
const findItemsUrl = ApiUrl2 + "car/findItems"  //根据商品信息查询是否存在促销商品
const childCustomerListUrl = ApiUrl2 + "car/childCustomerList"  //下级门店下拉列表
const checkOrderUrl = ApiUrl2 + "car/checkOrder"  //总数量校验



//订单管理
const orderListUrl = ApiUrl2 + "order/orderList"  //订单列表
const confirmOrderCostUrl = ApiUrl2 + "order/confirmOrderCost"  //确认订单费用
const cancelOrderUrl = ApiUrl2 + "order/cancelOrder" //取消订单
const deleteOrderUrl = ApiUrl2 + "order/deleteOrder" //删除订单
const confirmOrderReceiveUrl= ApiUrl2 + "order/confirmOrderReceive"  //订单明细确认收货
const subOrderListUrl = ApiUrl2 + "order/subOrderList"  //  下级订单查询
const subOrderAgreeUrl = ApiUrl2 + "order/confirmSubOrder"  //  下级订单查询
const supOrderListUrl = ApiUrl2 + "order/superOrderList"  //  上级订单查询
const exportOrderPdfUrl =  ApiUrl2 + "export/order"  //  订单导出
const getGiveawayQuantityUrl =  ApiUrl2 + "car/getGiveawayQuantity"  // 查询赠品
const deleteScheduleUrl = ApiUrl2 + "order/deleteSchedule"  // 删除出货计划
const checkOrderScheduleUrl = ApiUrl2 + "order/checkOrderSchedule"  // 校验出货计划商品数量

//账号维护
const searchCustomersUrl = ApiUrl2 + 'employee/findEmployee'
const updateEmployeeUrl = ApiUrl2 + "employee/saveAndUpdate"
const delEmployeeUrl = ApiUrl2 + "employee/detelEemployee/"
const getCustomersUrl = ApiUrl2 + "employee/customers"  //客户公司查询


//地址信息
const addressListUrl = ApiUrl2 + "address/list"
const updateAddressUrl = ApiUrl2 + "address/saveAndUpdate"
const deleteAddressUrl = ApiUrl2 + "address/deleteCustomerAddress/"
const checkShortNameUniqueUrl = ApiUrl2 + "address/checkShortNameUnique"

//消息中心
const messageListUrl = ApiUrl2 + "message/list"  //消息查询列表
const updateMessageUrl = ApiUrl2 + "message/update"  //修改更新消息状态
const messageCountUrl = ApiUrl2 + "message/count"  //消息数量

//申请售后
const getAfterSaleOrderListUrl = ApiUrl2 + "afterSaleOrder/getAfterSaleOrderList"  //查询售后工单列表
const createAfterSaleOrderUrl = ApiUrl2 + "afterSaleOrder/createAfterSaleOrder"   //创建售后工单
const getAfterSaleOrderDetailUrl = ApiUrl2 + "afterSaleOrder/getAfterSaleOrderDetail"  //根据售后工单单号查询售后工单详情
const returnGoodsUrl = ApiUrl2 + "afterSaleOrder/return"  //退回商品
const updateOrderStatusUrl = ApiUrl2 + "afterSaleOrder/updateOrderStatus"  //根据售后工单ID更新售后工单状态
const salesOrderListUrl = ApiUrl2 + "afterSaleOrder/orderList" //查詢售後订单列表
const findAfterSaleOrderUrl = ApiUrl2 + "afterSaleOrder/findAfterSaleOrder" //查询新增售後订单订单信息
const confirmSaleOrderUrl = ApiUrl2 + "afterSaleOrder/confirmSaleOrder" //上级确认售后工单
const getSaleAddressUrl = ApiUrl2 + "afterSaleOrder/getAddress" //售后地址



//存货库存
const findInvWarehouseInfoUrl = ApiUrl2 + "InvWarehouse/findInvWarehouseInfo" //获取存货库存数据


//加载系统语言信息
export const LoadingSystemProperties = params =>{
    return request({
        method: 'Get',
        url: languageUrl + params.params + '&url='+ params.url,
    }).then((response) => { 
        return response
    }).catch((err) => { 
        return err
    })
}

//登录
export const LoginApi = params =>{
    return request({
        method: 'Post',
        url: loginUrl,
        params
    }).then((response) => { 
        return response
    }).catch((err) => { 
        return err
    })
}

//用户权限
export const UserRolesApi = params =>{
    return request({
        method: 'Post',
        url: userRolesUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


// //获取banner
// export const bannerApi = params =>{
//     return request({
//         method: 'Post',
//         url: bannerUrl,
//         params: params
//     }).then((response) => {
//         return response
//     }).catch((err) => {
//         return err
//     })
// }

//账号是否唯一
export const CheckUserNameApi = params =>{
    return request({
        method: 'Post',
        url: checkUserNameUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//邮箱是否唯一
export const CheckEmailApi = params =>{
    return request({
        method: 'Post',
        url: checkEmailUrl,
        params
    }).then((response) => { 
        return response
    }).catch((err) => { 
        return err
    })
}

//发送邮件
export const SendEmailApi = params =>{
    return request({
        method: 'Post',
        url: sendEmailUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//更新密码
export const ResetPwdApi = params =>{
    return request({
        method: 'Post',
        url: updatePwdUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//验证码
export const VerifyCodeApi = params =>{
    return request({
        method: 'Get',
        url: verifyUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//验证验证码
export const CheckVerifyCodeApi = params =>{
    return request({
        method: 'Get',
        url: checkVerifyCodeUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//邮箱验证码
export const MailVerifyCodeApi = params =>{
    return request({
        method: 'Post',
        url: mailVerifyCodeUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//验证超链接是否有效
export const CheckTicketApi = params =>{
    return request({
        method: 'Post',
        url: checkTicketUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//校验该域名下的邮箱是否存在
export const CheckEmailByUrlApi = params =>{
    return request({
        method: 'Post',
        url: checkEmailByUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//上传文件
export const UpdateFilesApi = params =>{
    return request({
        method: 'Post',
        url: uploadFilesUrl,
        params: params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//文件下载
export const DoDownloadApi = params =>{
    window.open(doDownloadUrl + params.url)
    return request({
        method: 'Get',
        url: doDownloadUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//更新新邮箱
export const UpdataEmailApi = params => {
    return request({
        method: 'Post',
        url: updataEmailUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//上传头像
export const UpdateUserImageApi = params => {
    return request({
        method: 'Post',
        url: updateUserImageUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//商品分类
export const PtCategoryApi = params =>{
    const ptId = params && params.id ? params.id : '';
    return request({
        method: 'Get',
        url: categoryUrl + params.lang + ptId,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//区域查询接口
export const LevelAreaApi = params =>{
    const areaCode = params && params.areaCode ? params.areaCode : '';
    return request({
        method: 'Get',
        url: areaUrl + params.lang + areaCode,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//公告列表
export const BulletinApi = params =>{
    return request({
        method: 'Get',
        url: bulletinUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//公告详情
export const BulletinDetailApi = params =>{
    return request({
        method: 'Get',
        url: bulletinDetailUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


/****************组织机构维护接口 start********************/

//查询最上层机构
export const FindCustomerApi = params =>{
    return request({
        method: 'Get',
        url: findCustUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//通过ID查询机构{id}
export const SearchCustomerApi = params =>{
    return request({
        method: 'Get',
        url: searchCustUrl + params.id,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//通过机构id查询子机构 {id}
export const FindChildCustomerApi = params =>{
    return request({
        method: 'Get',
        url: findChildCustUrl + params.id + '?pageNum=' + params.pageNum + '&pageSize=' + params.pageSize
        //+ '?pageNum=' + params.pageNum + '?pageSize=' + params.pageSize,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//添加机构
export const AddCustomerApi = params =>{
    return request({
        method: 'Post',
        url: addCustUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//通过id删除申请暂存表的机构
export const DelCustomerApi = params =>{
    return request({
        method: 'Post',
        url: delCustUrl + params.id,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//编辑机构
export const UpdateCustomerApi = params =>{
    return request({
        method: 'Post',
        url: updateCustUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//查詢客戶類型
export const SearchCustomerCategoryApi = params => {
    return request({
        method: 'Get',
        url: searchCustClassUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//校验客户名称是否唯一
export const CheckCustomerNameApi = params => {
    return request({
        method: 'Post',
        url: checkCustomerNameUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//校验客户邮箱是否唯一
export const CheckCustomerEmailApi = params => {
    return request({
        method: 'Post',
        url: checkCustomerEmailUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

/****************  组织机构维护接口 end  ********************/





/****************  经销价格维护接口 start  ********************/

//查询经销价格单列表
export const GetSalePriceListApi = params => {
    return request({
        method: 'Post',
        url: salePriceListUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//查询定价对象下拉列表
export const GetSubCustomerListApi = params => {
    return request({
        method: 'Get',
        url: subCustomerListUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

// 查询商品列表
export const SearchSaleProductListApi = params => {
    return request({
        method: 'Post',
        url: searchSaleProductListUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//详情商品列表
export const FindSalepriceByIdWithPageApi = params => {
    return request({
        method: 'Post',
        url: findSalepriceByIdWithPageUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//新增定价
export const AddSalePriceApi = params => {
    return request({
        method: 'Post',
        url: addSalePriceUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


// 修改定价
export const UpdateSalepriceApi = params => {
    return request({
        method: 'Post',
        url: updateSalepriceUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


// 通过id查询定价
export const FindSalepriceByIdApi = params => {
    return request({
        method: 'Get',
        url: findSalepriceByIdUrl + params.id,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

// 删除定价单
export const DeleteSalePriceOrderApi = params => {
    return request({
        method: 'Post',
        url: deleteSalePriceUrl + params.id,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

// 删除定价单中的商品
export const DeleteSalePriceProductApi = params => {
    return request({
        method: 'Post',
        url: deleteSalePriceProductUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


// 启用/禁用定价
export const UpdateSalepriceStatusApi = params => {
    return request({
        method: 'Get',
        url: updateSalePriceStatusUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//加入定价车
export const AddSalePriceProductApi = params => {
    return request({
        method: 'Post',
        url: addSalePriceProductUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//获取定价车商品
export const GetSalePriceCartApi = params => {
    return request({
        method: 'Post',
        url: getSalePriceCartUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//保存并启用
export const SaveAndStartUseSalePriceApi = params => {
    return request({
        method: 'Post',
        url: saveAndStartUseSalePriceUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//批量调价确定
export const UpdateSalepriceWithoutCheckApi = params => {
    return request({
        method: 'Post',
        url: updateSalepriceWithoutCheckUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


/****************经销价格维护接口 end********************/






/****************  简易询价接口 start  ********************/

//简易询价首页获取商品列表
export const GetSimpleInquiryPtApi = params =>{
    return request({
        method: 'Get',
        url: simInquiryPtUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//添加商品到采购车
export const AddToCartApi = params =>{
    return request({
        method: 'Post',
        url: addToCartUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//从采购车删除商品
export const DelToCartApi = params =>{
    return request({
        method: 'Post',
        url: delToCartUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//采购车商品列表
export const GetPtFromCartApi = params =>{
    return request({
        method: 'Get',
        url: getPtFromCartUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//简易询价获取供货商信息
export const GetSalesOrgInfoApi = params =>{
    return request({
        method: 'Get',
        url: getSalesOrgUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//更改询价车里商品数量，说明
export const ModifireCartPtInfoApi = params =>{
    return request({
        method: 'Post',
        url: modifireCartPtInfoUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//创建询价单
export const CreateInquiryApi = params =>{
    return request({
        method: 'Post',
        url: createInquiryUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

/****************  简易询价接口 end  ********************/






/****************  询价单管理 接口 start  ********************/


//搜索询价单
export const SerachInquiryNoteListApi = params =>{
    return request({
        method: 'Get',
        url: getInquiryNoteListUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//询价单详情页根据询价单号查询询价单单身
export const GetInpuiryPtListByHeadNoApi = params =>{
    return request({
        method: 'Get',
        url: getInpuiryPtListByHeadNoUrl+params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//询价单详情页根据询价单号查询询价单单身
export const SelectProductByProductCodeApi = params =>{
    return request({
        method: 'Get',
        url: selectProductByProductCodeUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//询价单管理 询价单详情页根据商品ID，规格ID查询币种，标准价格
export const GetCurrencyCodeAndStandardPriceApi = params =>{
    return request({
        method: 'Get',
        url: currencyCodeAndStandardPriceUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//询价单管理 提交
export const UpdateInquiryStatusByIdApi = params =>{
    return request({
        method: 'Get',
        url: updateInquiryStatusByIdUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//删除询价单
export const DeleteInquiryOrderApi = params =>{
    return request({
        method: 'Get',
        url: deleteInquiryOrderUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//改备注
export const UpdateInquiryOrderRemarkApi = params =>{
    return request({
        method: 'Get',
        url: updateInquiryOrderRemarkUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//获取询价单详情供应商
export const GetINquiryInfoApi = params =>{
    return request({
        method: 'Get',
        url: getINquiryInfoUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//询价单导出
export const ExportNquiryPdfApi = params =>{
    window.open(exportNquiryPdfUrl + params.url)
    return request({
        method: 'Get',
        url: exportNquiryPdfUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//添加商品到询价单
export const AddPtToInpuiryOrderApi = params =>{
    return request({
        method: 'Post',
        url: addPtToInpuiryOrderUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//创建询价单 && 更新询价单
export const CreateInquiryOrderApi = params =>{
    return request({
        method: 'Post',
        url: createInquiryOrderUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//更新询价单详情
export const UpdateInquiryOrderPageSaveApi = params =>{
    return request({
        method: 'Post',
        url: updateInquiryOrderPageSaveUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//添加：商品列表
export const GetInquiryProductListApi = params =>{
    return request({
        method: 'Get',
        url: getInquiryProductListUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


/**************** 询价单管理 接口 end ********************/





/**************** 简易下单 接口 start ********************/

//下单供应商查询
export const SalesOrgInfoApi = params =>{
    return request({
        method: 'Get',
        url: salesOrgInfoUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//查詢訂單詳情
export const FindOrderDetailApi = params =>{
    return request({
        method: 'Get',
        url: findOrderDetailUrl + params.id+'?type='+params.type,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//获取客户下单商品列表
export const GetProductListApi = params =>{
    return request({
        method: 'Get',
        url: getProductListUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//采购车细项查询
export const FindCartItemApi = params =>{
    return request({
        method: 'Get',
        url: findCartItemUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//加入采购车
export const AddOrderItemApi = params =>{
    return request({
        method: 'Post',
        url: addOrderItemUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//简易订单确认
export const ConfirmOrderItemApi = params =>{
    return request({
        method: 'Post',
        url: confirmOrderItemUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//修改订单商品信息
export const UpdateOrderItemApi = params =>{
    return request({
        method: 'Post',
        url: updateOrderItemUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//删除订单商品信息
export const DeleteOrderItemApi = params =>{
    return request({
        method: 'Post',
        url: deleteOrderItemUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//提交、暂存订单
export const SubmitOrderItemApi = params =>{
    return request({
        method: 'Post',
        url: submitOrderItemUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//修改订单
export const UpdateOrderApi = params =>{
    return request({
        method: 'Post',
        url: updateOrderUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//新增订单出货计划
export const AddOrderScheduleApi = params =>{
    return request({
        method: 'Post',
        url: addOrderScheduleUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//删除出货计划商品细项
export const DeleteScheduleDetailApi = params =>{
    return request({
        method: 'Post',
        url: deleteScheduleDetailUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//
export const FindOrderAddressApi = params =>{
    return request({
        method: 'Get',
        url: findOrderAddressUrl + params.id
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//订单出货计划日志查询
export const FindOrderScheduleLogApi = params =>{
    return request({
        method: 'Get',
        url: findOrderScheduleLogUrl + params.id,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//是否有赠品
export const FindItemsApi = params =>{
    return request({
        method: 'Post',
        url: findItemsUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//下级门店下拉列表
export const ChildCustomerListApi = params =>{
    return request({
        method: 'Get',
        url: childCustomerListUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//校验总数量
export const CheckOrderApi = params =>{
    return request({
        method: 'Post',
        url: checkOrderUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


/**************** 简易下单 接口 end ********************/





/**************** 账号维护 接口 start ********************/



//搜索账号
export const SearchCustomersApi = params =>{
    return request({
        method: 'Get',
        url: searchCustomersUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//新增账号 && 编辑账号 && 启用禁用账号
export const NewEmployeeApi = params =>{
    return request({
        method: 'Post',
        url: updateEmployeeUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//删除账号
export const DelEmployeeApi = params =>{
    return request({
        method: 'Post',
        url: delEmployeeUrl + params.id,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//查询机构
export const GetCustomersApi = params =>{
    return request({
        method: 'Get',
        url: getCustomersUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}



/**************** 账号维护 接口 end ********************/




/**************** 订单列表 接口 end ********************/

//订单列表
export const OrderListApi = params =>{
    return request({
        method: 'Post',
        url: orderListUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//确认订单费用
export const ConfirmOrderCostApi = params =>{
    return request({
        method: 'Post',
        url: confirmOrderCostUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//取消订单
export const CancelOrderApi = params =>{
    return request({
        method: 'Get',
        url: cancelOrderUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//删除订单
export const DeleteOrderApi = params =>{
    return request({
        method: 'Get',
        url: deleteOrderUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//订单明细确认收货
export const ConfirmOrderReceiveApi = params =>{
    return request({
        method: 'Post',
        url: confirmOrderReceiveUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//  下级订单查询
export const SubOrderListApi = params =>{
    return request({
        method: 'Post',
        url: subOrderListUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//  下级订单同意 or 不同意
export const SubOrderAgreeApi = params =>{
    return request({
        method: 'Post',
        url: subOrderAgreeUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//  上级订单查询
export const SupOrderListApi = params =>{
    return request({
        method: 'Post',
        url: supOrderListUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


// 订单导出
export const ExportOrderPdfApi = params =>{
    window.open(exportOrderPdfUrl + params.url)
    return request({
        method: 'Get',
        url: exportOrderPdfUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//查询赠品数量
export const GetGiftQuantityApi = params =>{
    return request({
        method: 'Post',
        url: getGiveawayQuantityUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//删除出货计划
export const DeleteScheduleApi = params =>{
    return request({
        method: 'Post',
        url: deleteScheduleUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//校验出货计划商品数量
export const CheckOrderScheduleApi = params =>{
    return request({
        method: 'Post',
        url: checkOrderScheduleUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

/**************** 订单列表 接口 end ********************/





/**************** 地址维护 接口 start ********************/


//获取地址列表
export const GetAddressListApi = params => {
    return request({
        method: 'Get',
        url: addressListUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//新增地址 && 修改地址
export const UpdateAddressApi = params => {
    return request({
        method: 'Post',
        url: updateAddressUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//删除地址
export const DeleteAddressApi = params => {
    return request({
        method: 'Post',
        url: deleteAddressUrl + params.id,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//验证客户地址简称唯一性
export const CheckShortNameUniqueApi = params => {
    return request({
        method: 'Post',
        url: checkShortNameUniqueUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

/**************** 地址维护 接口 end ********************/





/**************** 消息中心 接口 start ********************/


//消息查询列表
export const MessageListApi = params => {
    return request({
        method: 'Get',
        url: messageListUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//消息数量
export const MessageCountApi = params => {
    return request({
        method: 'Get',
        url: messageCountUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//修改更新消息状态
export const UpdateMessageApi = params => {
    return request({
        method: 'Post',
        url: updateMessageUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

/**************** 消息中心 接口 end ********************/




/**************** 申请售后 接口 start ********************/


//查询售后工单列表
export const GetAfterSaleOrderListApi = params => {
    return request({
        method: 'Get',
        url: getAfterSaleOrderListUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//创建售后工单
export const CreateAfterSaleOrderApi = params => {
    return request({
        method: 'Post',
        url: createAfterSaleOrderUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//根据售后工单单号查询售后工单详情
export const GetAfterSaleOrderDetailApi = params => {
    return request({
        method: 'Get',
        url: getAfterSaleOrderDetailUrl + params.url,

    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//退回商品
export const ReturnGoodsApi = params => {
    return request({
        method: 'Get',
        url: returnGoodsUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//根据售后工单ID更新售后工单状态
export const UpdateOrderStatusApi = params => {
    return request({
        method: 'Get',
        url: updateOrderStatusUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//查詢售後订单列表
export const SalesOrderListApi = params => {
    return request({
        method: 'Post',
        url: salesOrderListUrl,
        params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

//查询新增售後订单订单信息
export const FindAfterSaleOrderApi = params => {
    return request({
        method: 'Get',
        url: findAfterSaleOrderUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//查询新增售後订单订单信息
export const ConfirmSaleOrderApi = params => {
    return request({
        method: 'Get',
        url: confirmSaleOrderUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


//售后地址
export const GetSaleAddressApi = params => {
    return request({
        method: 'Get',
        url: getSaleAddressUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}


/**************** 申请售后 接口 end ********************/




export const FindInvWarehouseInfoApi = params => {
    return request({
        method: 'Get',
        url: findInvWarehouseInfoUrl + params.url,
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}

