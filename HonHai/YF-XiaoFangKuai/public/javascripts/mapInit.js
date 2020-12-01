

// 百度地图API功能
var map   = new BMap.Map("allmap");    // 创建Map实例
var point = new BMap.Point(113.934571,22.575557);  // 初始化地图
map.panTo(point, true)
map.centerAndZoom(point,15);      // 设置中心点坐标和地图级别。

map.addControl(new BMap.MapTypeControl({
    mapTypes:[
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
    ]}));
map.setCurrentCity("深圳");          // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom();     //开启鼠标滚轮缩放

var marker = new BMap.Marker(point);  // 创建标注
map.addOverlay(marker);               // 将标注添加到地图中
marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画


// 添加带有定位的导航控件
var navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // LARGE类型
    type: BMAP_NAVIGATION_CONTROL_LARGE,
    // 启用显示定位
    enableGeolocation: true
});
map.addControl(navigationControl);
// 添加定位控件
var geolocationControl = new BMap.GeolocationControl();
geolocationControl.addEventListener("locationSuccess", function(e){
    // 定位成功事件
    var address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    alert("当前定位地址为：" + address);
});
geolocationControl.addEventListener("locationError",function(e){
    // 定位失败事件
    alert(e.message);
});
map.addControl(geolocationControl);


// var myDrag = new BMapLib.RectangleZoom(map, {
//     followText: "拖拽鼠标进行操作"
// });
// myDrag.open();  //开启拉框放大