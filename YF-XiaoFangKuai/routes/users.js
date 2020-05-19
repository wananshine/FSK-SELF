var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
	const goodsList = [
		{ "src": "https://wx4.sinaimg.cn/crop.84.82.711.400/8a533d85ly1fr76966qsuj20m40hbdp6.jpg", "name": "Thumbnail label", "desc": "大童篮球童鞋", "price": "4444"},
		{ "src": "https://img.alicdn.com/simba/img/TB1FF5oEASWBuNjSszdSuveSpXa.jpg", "name": "Thumbnail label", "desc": "大童篮球童鞋", "price": "4444"},
		{ "src": "https://wx4.sinaimg.cn/crop.84.82.711.400/8a533d85ly1fr76966qsuj20m40hbdp6.jpg", "name": "Thumbnail label", "desc": "大童篮球童鞋", "price": "4444"},
		{ "src": "https://img.alicdn.com/simba/img/TB1FF5oEASWBuNjSszdSuveSpXa.jpg", "name": "Thumbnail label", "desc": "大童篮球童鞋", "price": "4444"},
		{ "src": "https://wx4.sinaimg.cn/crop.84.82.711.400/8a533d85ly1fr76966qsuj20m40hbdp6.jpg", "name": "Thumbnail label", "desc": "大童篮球童鞋", "price": "4444"},
		{ "src": "https://img.alicdn.com/simba/img/TB1FF5oEASWBuNjSszdSuveSpXa.jpg", "name": "Thumbnail label", "desc": "大童篮球童鞋", "price": "4444"},
		{ "src": "https://wx4.sinaimg.cn/crop.84.82.711.400/8a533d85ly1fr76966qsuj20m40hbdp6.jpg", "name": "Thumbnail label", "desc": "大童篮球童鞋", "price": "4444"},
		{ "src": "https://wx4.sinaimg.cn/crop.84.82.711.400/8a533d85ly1fr76966qsuj20m40hbdp6.jpg", "name": "Thumbnail label", "desc": "大童篮球童鞋", "price": "4444"}
	];
	res.render('bootstrap', {
		goodsList: goodsList,
		helpers: {
		    foo: function(){
		        return "foo"
		    },
		    bar:function(){
		        return "hello Shabi"
		  	}
		}
  });  // 用模板渲染home.hbs(home.handlebars)并套入main.hbs(main.handlebars)
});

router.get('/about', function(req, res, next) {
  res.send('user/about');
});

module.exports = router;
