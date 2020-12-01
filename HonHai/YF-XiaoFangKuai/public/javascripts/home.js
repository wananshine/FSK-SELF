

$(".header").hide();

//百度分享/
window._bd_share_config={
    "common":{
        "bdSnsKey":{},
        "bdText":"",
        "bdMini":"2",
        "bdPic":"",
        "bdStyle":"0",
        "bdSize":"16"
    },
    "share":{}
};
with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];



//导航锚点
const $title = $(".title");
$(".home .nav-bar .nav-cell").click(function(event){
    $(this).addClass("nav-current").siblings().removeClass("nav-current");
    const $index = $(this).index();
    const $title_top = $title.eq($index).offset().top;
    $("html,body").animate({
        scrollTop: $title_top
    });

    console.log($index)

});


//收藏
const $handleCollect  = document.getElementById("handle-collect");
$handleCollect.onclick = function(){
    AddFavorite("我的网站", location.href)
}

//收藏
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

// 收藏2
function addFavorite2() {
    var url = window.location;
    var title = document.title;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
        alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
    }
    else if (ua.indexOf("msie 8") > -1) {
        window.external.AddToFavoritesBar(url, title); //IE8
    }
    else if (document.all) {
            try{
                window.external.addFavorite(url, title);
            }catch(e){
                alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
            }
        }
        else if (window.sidebar) {
            window.sidebar.addPanel(title, url, "");
        }
        else {
            alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
        }
}
    