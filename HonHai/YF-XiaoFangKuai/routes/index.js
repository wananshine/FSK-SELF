var express = require('express');
var router = express.Router();

const homeData = {
  year: new Date().getFullYear(),
  article: "laia"
}



/**
 * GET home page
**/ 
router.get('/',  function(req, res, next) {

  res.render('home', {
      baidumapApi: "http://api.map.baidu.com/api?v=2.0&ak=nOi5GMoIr2dPLUBCbY2h36zAiG316gZI",
  	  showTitle: false,
      navCurrent1: "nav-current1",
      year: new Date().getFullYear(),
      article: "laia",
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


/**
 * GET 教育 page
**/ 
router.get('/education',  function(req, res, next) {
  const studentList = [
    {
      "students": [
          { "bigsrc": "images/education/student_b_01.png", "smallsrc": "images/education/student_s_01.png", "name": "梁殷"  , "area": "就职于深圳南山实验学校"    , "alt": "1",  "title": "student_01" },
          { "bigsrc": "images/education/student_b_02.png", "smallsrc": "images/education/student_s_02.png", "name": "曾妮"  , "area": "就职于育才教育集团育才中学 ", "alt": "2",  "title": "student_02" },
          { "bigsrc": "images/education/student_b_03.png", "smallsrc": "images/education/student_s_03.png", "name": "李磊"  , "area": "就职于深圳市南山区前海学校 ", "alt": "3",  "title": "student_03" },
          { "bigsrc": "images/education/student_b_04.png", "smallsrc": "images/education/student_s_04.png", "name": "李景梅", "area": "就职于博伦职业技术学校 ", "alt": "4",  "title": "student_04" }
      ]
    },
    {
      "students": [
          { "bigsrc": "images/education/student_b_05.png", "smallsrc": "images/education/student_s_05.png", "name": "周慧君", "area": "就职于北京师范大学南山附属学校" , "alt": "5",  "title": "student_05" },
          { "bigsrc": "images/education/student_b_06.png", "smallsrc": "images/education/student_s_06.png", "name": "李锦辉", "area": "就职于桂园小学"                , "alt": "6",  "title": "student_06" },
          { "bigsrc": "images/education/student_b_07.png", "smallsrc": "images/education/student_s_07.png", "name": "李雯湘", "area": "就职于教科院附中 "             , "alt": "7",  "title": "student_07" },
          { "bigsrc": "images/education/student_b_08.png", "smallsrc": "images/education/student_s_08.png", "name": "李玉"  , "area": "就职于梅林中学"                , "alt": "8",  "title": "student_08" }
      ]
    },
    {
      "students": [
          { "bigsrc": "images/education/student_b_09.png", "smallsrc": "images/education/student_s_09.png", "name": "唐巧和", "area": "就职于天健小学"         , "alt": "9",  "title": "student_09" },
          { "bigsrc": "images/education/student_b_10.png", "smallsrc": "images/education/student_s_10.png", "name": "郭歌"  , "area": "就职于劳动技术教育中心" , "alt": "10", "title": "student_10" },
          { "bigsrc": "images/education/student_b_11.png", "smallsrc": "images/education/student_s_11.png", "name": "赵兵兵", "area": "就职于福田黄埔实验学校" , "alt": "11", "title": "student_11" },
          { "bigsrc": "images/education/student_b_12.png", "smallsrc": "images/education/student_s_12.png", "name": "符明丹", "area": "就职于上步中学"         , "alt": "12", "title": "student_12" },
      ]
    }   
  ]
  const schoolList = [
      { "src": "images/education/school_01.png", "alt": "北京师范大学南山附属学校"  , "title": "北京师范大学南山附属学校" },
      { "src": "images/education/school_02.png", "alt": "深圳市宝安中学"           , "title": "深圳市宝安中学" },
      { "src": "images/education/school_03.png", "alt": "深圳红岭中学"             , "title": "深圳红岭中学" },
      { "src": "images/education/school_04.png", "alt": "深圳明德实验学校"         , "title": "深圳明德实验学校" },
      { "src": "images/education/school_05.png", "alt": "深圳市龙华中学"           , "title": "深圳市龙华中学" },
      { "src": "images/education/school_06.png", "alt": "深圳市宝安实验学校"        , "title": "深圳市宝安实验学校" },
      { "src": "images/education/school_07.png", "alt": "深圳市福田区外国语学校"    , "title": "深圳市福田区外国语学校" },
      { "src": "images/education/school_08.png", "alt": "重庆市江南小学"            ,  "title": "重庆市江南小学" },
      { "src": "images/education/school_09.png", "alt": "福南小学"                  , "title": "福南小学" },
      { "src": "images/education/school_10.png", "alt": "重庆市迎龙小学"            , "title": "重庆市迎龙小学" },
      { "src": "images/education/school_11.png", "alt": "西乡中学"                  , "title": "西乡中学" },
      { "src": "images/education/school_12.png", "alt": "深圳中学"                 , "title": "深圳中学" },
      { "src": "images/education/school_13.png", "alt": "南山实验教育集团"          , "title": "南山实验教育集团" },
      { "src": "images/education/school_14.png", "alt": "深圳市南山外国语学校"      , "title": "深圳市南山外国语学校" },
      { "src": "images/education/school_15.png", "alt": "深圳梅山中学"              , "title": "深圳梅山中学" },
      { "src": "images/education/school_16.png", "alt": "育才教育集团"              , "title": "育才教育集团" },
      { "src": "images/education/school_17.png", "alt": "深圳市前海港湾小学"        , "title": "深圳市前海港湾小学" },
      { "src": "images/education/school_18.png", "alt": "深圳市华侨城中学"          , "title": "深圳市华侨城中学" },
  ]
  res.render('education', {
      baidumapApi: "http://api.map.baidu.com/api?v=2.0&ak=nOi5GMoIr2dPLUBCbY2h36zAiG316gZI",
  	  showTitle: false,
      studentList: studentList,
      schoolList: schoolList,
      navCurrent2: "nav-current2",
      year: new Date().getFullYear(),
      article: "laia",
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


/**
 * 医疗天使 medical
**/ 
router.get('/medical', function(req, res, next) {

  const courseList = [
    { "src": "images/yiLiao/course_01.png", "courseTxt": "高级母婴护理师", "alt": "高级母婴护理师", "title": "高级母婴护理师" },
    { "src": "images/yiLiao/course_02.png", "courseTxt": "月子营养餐"    , "alt": "月子营养餐"    , "title": "月子营养餐"     },
    { "src": "images/yiLiao/course_03.png", "courseTxt": "家庭育婴早教师", "alt": "家庭育婴早教师", "title": "家庭育婴早教师" },
    { "src": "images/yiLiao/course_04.png", "courseTxt": "产后康复护理师", "alt": "产后康复护理师", "title": "产后康复护理师" },
    { "src": "images/yiLiao/course_05.png", "courseTxt": "高级月嫂"      , "alt": "高级月嫂"      , "title": "高级月嫂"       },
    { "src": "images/yiLiao/course_06.png", "courseTxt": "高级育婴师"    , "alt": "高级育婴师"    , "title": "高级育婴师"     },
    { "src": "images/yiLiao/course_07.png", "courseTxt": "高级催乳师培训", "alt": "高级催乳师培训", "title": "高级催乳师培训" },
    { "src": "images/yiLiao/course_08.png", "courseTxt": "高级小儿推拿师", "alt": "高级小儿推拿师", "title": "高级小儿推拿师" }
  ]

  const trainList = [
    { "src": "images/yiLiao/train_01.png", "trainTxt": "", "alt": "1", "title": "" },
    { "src": "images/yiLiao/train_02.png", "trainTxt": "", "alt": "2", "title": "" },
    { "src": "images/yiLiao/train_03.png", "trainTxt": "", "alt": "3", "title": "" },
    { "src": "images/yiLiao/train_04.png", "trainTxt": "", "alt": "4", "title": "" },
    { "src": "images/yiLiao/train_05.png", "trainTxt": "", "alt": "5", "title": "" },
    { "src": "images/yiLiao/train_06.png", "trainTxt": "", "alt": "6", "title": "" },
    { "src": "images/yiLiao/train_07.png", "trainTxt": "", "alt": "5", "title": "" },
    { "src": "images/yiLiao/train_08.png", "trainTxt": "", "alt": "5", "title": "" },
    { "src": "images/yiLiao/train_09.png", "trainTxt": "", "alt": "5", "title": "" }
  ]

  const statusList = [
      { "src": "images/yiLiao/status_01.png", "statusTxt": "生活质量的提高科学的母婴护理观念被大众接受，拥有专业护理知识的母婴护理人员受到重视", "alt": "1", "title": "" },
      { "src": "images/yiLiao/status_02.png", "statusTxt": "", "alt": "2", "title": "" },
      { "src": "images/yiLiao/status_03.png", "statusTxt": "调查显示，仅深圳市新生儿出生就达到18万人次/年专业育婴师市场需求大", "alt": "3", "title": "" },
      { "src": "images/yiLiao/status_04.png", "statusTxt": "就业3500-20000薪资不等的母婴护理人员是中国目前中青年女性朋友极好就业工资较高的职业之一", "alt": "4", "title": "" },
      { "src": "images/yiLiao/status_05.png", "statusTxt": "", "alt": "5", "title": "" },
      { "src": "images/yiLiao/status_06.png", "statusTxt": "十八届五中全会公报指出，全面放开“二孩政策”“婴儿潮”到来", "alt": "6", "title": "" },
  ]

  const cooperList = [
      { "src": "images/yiLiao/cooper_01.png", "alt": "1", "title": "" },
      { "src": "images/yiLiao/cooper_02.png", "alt": "2", "title": "" },
      { "src": "images/yiLiao/cooper_03.png", "alt": "3", "title": "" },
      { "src": "images/yiLiao/cooper_04.png", "alt": "4", "title": "" },
      { "src": "images/yiLiao/cooper_05.png", "alt": "5", "title": "" },
      { "src": "images/yiLiao/cooper_06.png", "alt": "6", "title": "" },
      { "src": "images/yiLiao/cooper_07.png", "alt": "7", "title": "" },
      { "src": "images/yiLiao/cooper_08.png", "alt": "7", "title": "" },
      { "src": "images/yiLiao/cooper_09.png", "alt": "7", "title": "" },
      { "src": "images/yiLiao/cooper_10.png", "alt": "7", "title": "" },
  ]
  res.render('medical', {
      baidumapApi: "http://api.map.baidu.com/api?v=2.0&ak=nOi5GMoIr2dPLUBCbY2h36zAiG316gZI",
  	  showTitle: false,
      courseList: courseList,
      trainList: trainList,
      statusList: statusList,
      cooperList: cooperList,
      navCurrent3: "nav-current3",
      year: new Date().getFullYear(),
      article: "laia",
      helpers: {
        foo: function(){
          return "foo"
        },
        bar:function(){
          return "hello Shabi"
        }
      }
  });  // 用模板渲染medical.hbs(medical.handlebars)并套入main.hbs(main.handlebars)

  //request.post({url: 'https://api.xxx.com/bbs/list', form: {userId: 10000}}, function (err, httpResponse, body) {

      //body = JSON.parse(body);

      //res.render('join', {tree: body['return']});

  //}); /* 如果把第二个接口写在这里 也不行，再次render 会报错！！！ */


});

/**
 * GET about page
**/ 
router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
