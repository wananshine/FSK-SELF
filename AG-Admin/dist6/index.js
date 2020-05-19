var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    headbodySize: 150,
    animList: ['bounce', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'],
    headCur: 0,
    ChildCur: 0,
    isAnimPlay: true,
    imgList: [
      './images/head/1.jpg',
      './images/head/2.jpg',
      './images/head/3.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/4.jpg',
      './images/head/16.jpg',
      './images/head/15.jpg',
      './images/head/13.jpg',
      './images/head/12.jpg',
      './images/head/7.jpg',
      './images/head/5.jpg',
    ],
    headbodyList: [
      // f
      { hid: 1, children: [], img:'', x: 0, y: 0 },
      { hid: 2, children: [], img:'', x: 30, y: 3 },
      { hid: 3, children: [], img:'', x: 60, y: 3 },
      { hid: 4, children: [], img:'', x: 90, y: 3 },
      { hid: 5, children: [], img:'', x: 120, y: 3 },
      { hid: 6, children: [], img:'', x: -7, y: 32 },
      { hid: 7, children: [], img:'', x: 25, y: 32 },
      { hid: 8, children: [], img:'', x: -7, y: 64 },
      { hid: 9, children: [], img:'', x: 25, y: 64 },
      { hid: 10, children: [], img:'', x: 57, y: 64 },
      { hid: 11, children: [], img:'',  x: 88, y: 64 },
      { hid: 12, children: [], img:'', x: 113, y: 64 },
      { hid: 13, children: [], img:'', x: -7, y: 96 },
      { hid: 14, children: [], img:'', x: 25, y: 96 },
      { hid: 15, children: [], img:'', x: -7, y: 128 },
      { hid: 16, children: [], img:'', x: 25, y: 128 },

      // o
      { hid: 17, children: [], img:'', x: 164, y: 3 },
      { hid: 18, children: [], img:'', x: 196, y: 2 },
      { hid: 19, children: [], img:'', x: 228, y: 2 },
      { hid: 20, children: [], img:'', x: 260, y: 2 },
      { hid: 21, children: [], img:'', x: 292, y: 2 },
      { hid: 22, children: [], img:'', x: 324, y: 2 },
      { hid: 23, children: [], img:'', x: 324, y: 34 },
      { hid: 24, children: [], img:'', x: 292, y: 34 },
      { hid: 25, children: [], img:'', x: 196, y: 34 },
      { hid: 26, children: [], img:'', x: 164, y: 34 },
      { hid: 28, children: [], img:'', x: 164, y: 66 },
      { hid: 29, children: [], img:'', x: 196, y: 66 },
      { hid: 30, children: [], img:'', x: 292, y: 66 },
      { hid: 31, children: [], img:'', x: 164, y: 82 },
      { hid: 32, children: [], img:'', x: 196, y: 82 },
      { hid: 33, children: [], img:'', x: 164, y: 114 },
      { hid: 34, children: [], img:'', x: 196, y: 114 },
      { hid: 35, children: [], img:'', x: 228, y: 114 },
      { hid: 36, children: [], img:'', x: 260, y: 114 },
      { hid: 37, children: [], img:'', x: 292, y: 114 },
      { hid: 38, children: [], img:'', x: 324, y: 114 },
      { hid: 39, children: [], img:'', x: 324, y: 82 },
      { hid: 40, children: [], img:'', x: 324, y: 66 },
      { hid: 41, children: [], img:'', x: 292, y: 82 },

      // x
      { hid: 42, children: [], img:'', x: 362, y: 3 },
      { hid: 43, children: [], img:'', x: 394, y: 3 },
      { hid: 44, children: [], img:'', x: 426, y: 3 },
      { hid: 45, children: [], img:'', x: 456, y: 7 },
      { hid: 46, children: [], img:'', x: 484, y: 3 },
      { hid: 47, children: [], img:'', x: 516, y: 3 },
      { hid: 48, children: [], img:'', x: 390, y: 35 },
      { hid: 49, children: [], img:'', x: 422, y: 35 },
      { hid: 50, children: [], img:'', x: 454, y: 35 },
      { hid: 51, children: [], img:'', x: 484, y: 35 },
      { hid: 52, children: [], img:'', x: 394, y: 61 },
      { hid: 53, children: [], img:'', x: 426, y: 61 },
      { hid: 54, children: [], img:'', x: 448, y: 61 },
      { hid: 55, children: [], img:'', x: 480, y: 61 },
      { hid: 56, children: [], img:'', x: 388, y: 85 },
      { hid: 57, children: [], img:'', x: 410, y: 85 },
      { hid: 58, children: [], img:'', x: 426, y: 85 },
      { hid: 59, children: [], img:'', x: 458, y: 85 },
      { hid: 60, children: [], img:'', x: 485, y: 85 },
      { hid: 61, children: [], img:'', x: 362, y: 116 },
      { hid: 62, children: [], img:'', x: 394, y: 116 },
      { hid: 63, children: [], img:'', x: 394, y: 116 },
      { hid: 64, children: [], img:'', x: 426, y: 116 },
      { hid: 65, children: [], img:'', x: 455, y: 116 },
      { hid: 66, children: [], img:'', x: 484, y: 117 },
      { hid: 67, children: [], img:'', x: 516, y: 116 },

      // c
      { hid:68, children: [], img:'', x: 557, y: 2 },
      { hid:69, children: [], img:'', x: 578, y: 2 },
      { hid:70, children: [], img:'', x: 610, y: 2 },
      { hid:71, children: [], img:'', x: 642, y: 2 },
      { hid:72, children: [], img:'', x: 674, y: 2 },
      { hid:73, children: [], img:'', x: 556, y: 32 },
      { hid:74, children: [], img:'', x: 577, y: 32 },
      { hid:75, children: [], img:'', x: 556, y: 54 },
      { hid:76, children: [], img:'', x: 577, y: 54 },
      { hid:77, children: [], img:'', x: 556, y: 85 },
      { hid:78, children: [], img:'', x: 577, y: 85 },
      { hid:79, children: [], img:'', x: 557, y: 114 },
      { hid:80, children: [], img:'', x: 578, y: 114 },
      { hid:81, children: [], img:'', x: 610, y: 114 },
      { hid:82, children: [], img:'', x: 642, y: 114 },
      { hid:83, children: [], img:'', x: 674, y: 114 },

      // o
      { hid: 84, children: [], img:'', x: 164 + 556, y: 3 },
      { hid: 85, children: [], img:'', x: 196 + 556, y: 2 },
      { hid: 86, children: [], img:'', x: 228 + 556, y: 2 },
      { hid: 87, children: [], img:'', x: 260 + 556, y: 2 },
      { hid: 88, children: [], img:'', x: 292 + 556, y: 2 },
      { hid: 89, children: [], img:'', x: 324 + 556, y: 2 },
      { hid: 90, children: [], img:'', x: 324 + 556, y: 34 },
      { hid: 91, children: [], img:'', x: 292 + 556, y: 34 },
      { hid: 92, children: [], img:'', x: 196 + 556, y: 34 },
      { hid: 93, children: [], img:'', x: 164 + 556, y: 34 },
      { hid: 94, children: [], img:'', x: 164 + 556, y: 66 },
      { hid: 95, children: [], img:'', x: 196 + 556, y: 66 },
      { hid: 96, children: [], img:'', x: 292 + 556, y: 66 },
      { hid: 97, children: [], img:'', x: 164 + 556, y: 82 },
      { hid: 98, children: [], img:'', x: 196 + 556, y: 82 },
      { hid: 99, children: [], img:'', x: 164 + 556, y: 114 },
      { hid: 100, children: [], img:'', x: 196 + 556, y: 114 },
      { hid: 101, children: [], img:'', x: 228 + 556, y: 114 },
      { hid: 102, children: [], img:'', x: 260 + 556, y: 114 },
      { hid: 103, children: [], img:'', x: 292 + 556, y: 114 },
      { hid: 104, children: [], img:'', x: 324 + 556, y: 114 },
      { hid: 105, children: [], img:'', x: 324 + 556, y: 82 },
      { hid: 107, children: [], img:'', x: 324 + 556, y: 66 },
      { hid: 108, children: [], img:'', x: 292 + 556, y: 82 },

      // n
      { hid: 109, children: [], img:'', x: 925, y: 2 },
      { hid: 110, children: [], img:'', x: 957, y: 2 },
      { hid: 111, children: [], img:'', x: 989, y: 2 },
      { hid: 112, children: [], img:'', x: 1019, y: 2 },
      { hid: 113, children: [], img:'', x: 1051, y: 2 },
      { hid: 114, children: [], img:'', x: 1083, y: 2 },
      { hid: 115, children: [], img:'', x: 921, y: 34 },
      { hid: 116, children: [], img:'', x: 953, y: 34 },
      { hid: 117, children: [], img:'', x: 921, y: 66 },
      { hid: 118, children: [], img:'', x: 953, y: 66 },
      { hid: 119, children: [], img:'', x: 921, y: 98 },
      { hid: 120, children: [], img:'', x: 953, y: 98 },
      { hid: 121, children: [], img:'', x: 921, y: 120 },
      { hid: 122, children: [], img:'', x: 953, y: 120 },
      { hid: 123, children: [], img:'', x: 1046, y: 34 },
      { hid: 124, children: [], img:'', x: 1078, y: 34 },
      { hid: 125, children: [], img:'', x: 1046, y: 66 },
      { hid: 126, children: [], img:'', x: 1078, y: 66 },
      { hid: 127, children: [], img:'', x: 1046, y: 98 },
      { hid: 128, children: [], img:'', x: 1078, y: 98 },
      { hid: 129, children: [], img:'', x: 1046, y: 120 },
      { hid: 130, children: [], img:'', x: 1078, y: 120 },

      // n
      { hid: 131, children: [], img:'', x: 925 + 196, y: 2 },
      { hid: 132, children: [], img:'', x: 957+ 196, y: 2 },
      { hid: 133, children: [], img:'', x: 989+ 196, y: 2 },
      { hid: 134, children: [], img:'', x: 1019+ 196, y: 2 },
      { hid: 135, children: [], img:'', x: 1051+ 196, y: 2 },
      { hid: 136, children: [], img:'', x: 1083+ 196, y: 2 },
      { hid: 137, children: [], img:'', x: 921+ 196, y: 34 },
      { hid: 138, children: [], img:'', x: 953+ 196, y: 34 },
      { hid: 139, children: [], img:'', x: 921+ 196, y: 66 },
      { hid: 140, children: [], img:'', x: 953+ 196, y: 66 },
      { hid: 141, children: [], img:'', x: 921+ 196, y: 98 },
      { hid: 142, children: [], img:'', x: 953+ 196, y: 98 },
      { hid: 143, children: [], img:'', x: 921+ 196, y: 120 },
      { hid: 144, children: [], img:'', x: 953+ 196, y: 120 },
      { hid: 145, children: [], img:'', x: 1046+ 196, y: 34 },
      { hid: 146, children: [], img:'', x: 1078+ 196, y: 34 },
      { hid: 147, children: [], img:'', x: 1046+ 196, y: 66 },
      { hid: 148, children: [], img:'', x: 1078+ 196, y: 66 },
      { hid: 149, children: [], img:'', x: 1046+ 196, y: 98 },
      { hid: 150, children: [], img:'', x: 1078+ 196, y: 98 },
      { hid: 151, children: [], img:'', x: 1046+ 196, y: 120 },
      { hid: 152, children: [], img:'', x: 1078+ 196, y: 120 },
    ],

    workNumber: ["H2406392","H2601985","H2406392","H2601985","H2406392","H2601985"]
  },
  watch: {
      workNumber: {
            handler: function (Aarry) {
                // console.log(12345,Aarry);
                // const arr = ["H2406392","H2601985","H2406392","H2601985","H2406392","H2601985","H2406392","H2601985"];
                // this.axiosGetCs(arr);
            },
            deep: true,
            // immediate:true
        },
  },
  created: function (){
    this.axiosGet();

    // setInterval(() => {
    //   const arr = ["H2406392","H2601985","H2406392","H2601985","H2406392","H2601985","H2406392","H2601985"];
    //   this.axiosGetCs(arr);
    // }, 6000)
  },
  mounted() {
      // this.isAnimPlay = false
      // for (let i = 0; i < 850; i++) {
      //   let headstr = './images/head/'+ Math.floor((Math.random()*102)+1) + '.jpg'
      //   this.addImg(headstr);
      // }

      // this.$nextTick(() =>{
      //   this.isAnimPlay = true
      // })
  },

  methods: {
    addHead(url) {
      let headstr = url;
      this.addImg(headstr);
      setInterval(() => {
        let headstr = url;
        this.addImg(headstr);
      }, 1500)
    },

    getAnim() {
      return this.animList[Math.floor(Math.random()*this.animList.length)];
    },

    addHeadOne() {
      let headstr = './images/head/'+ Math.floor((Math.random()*102)+1) + '.jpg'
      this.addImg(headstr);
    },

    // --------
    // 进入中
    // --------
    beforeEnter: function (el) {
      // ...
      if(!this.isAnimPlay) return
      this.tempStyle = el.style
      this.$nextTick(() => {
        let x = el.getBoundingClientRect()
        this.tempEl = {left: x.x, top: x.y}
        this.tempNodeParent = el.parentNode
        this.$refs.tempel.appendChild(el)
        let bodyW = window.screen.availWidth;
        let bodyH = window.screen.availHeight;
        el.style.position = 'absolute'
        this.animX = Math.floor(Math.random()*bodyW);
        this.animY = Math.floor(Math.random()*bodyH);
        let direc = Math.floor(Math.random()*4)
        // 0 左, 1 右, 2 上, 3 下
        let elx = 0, ely = 0;
        switch (direc) {
          case 0:
            elx = 0;
            ely = this.animY
            break;
          case 1:
            elx = bodyW - 32;
            ely = bodyW
            break;
          case 2:
            elx = this.animX;
            ely = 0
            break;
          case 3:
            elx = this.animX;
            ely = bodyH
            break;
          default:
            break;
        }
        el.style.left = elx + 'px'
        el.style.top = ely + 'px'
      })
      el.style.width = '48px'
      el.style.height = '48px'
      el.style.transformOrigin = 'left'
    },

    enter: function (el, done) {
      if(!this.isAnimPlay) return
      let bodyW = window.screen.availWidth;
      let bodyH = window.screen.availHeight;
      this.$nextTick(() => {
        Velocity(el, { left: bodyW / 2 + 'px', top: bodyH / 2 + 'px' }, { easing: "easeInSine", duration: 300})
        Velocity(el, { scale: 3 }, { easing: "spring", duration: 300 })
        Velocity(el, { left: this.tempEl.left + 'px',
          top: this.tempEl.top + 'px' , scale: 1 }, { duration: 300, complete: done})
      })
    },

    afterEnter: function (el) {
      el.style = this.tempStyle
      this.tempNodeParent.appendChild(el)
    },

    // 添加头像
    addImg(img) {
      if(this.headCur < this.headbodySize) {
        if(!this.headbodyList[this.headCur].img) {
          Vue.set(this.headbodyList[this.headCur], 'img', img);
        }
        // 添加第一层
        this.headCur++;
      } else {
        if(this.ChildCur <　this.headbodySize) {
          let childrenArr = this.headbodyList[this.ChildCur].children
          if(childrenArr && childrenArr.length < 4) {
            Vue.set(childrenArr, childrenArr.length, img)
            return ;
          }
          // 添加四方格
          this.ChildCur++;
        } else {
          // 移除最后一个四方格  添加四方格
          let headList = this.headbodyList;
          if(headList[headList.length-1].children.length >= 4) {
            this.isAnimPlay = false
            for(j = 0,len=headList.length - 1; j < len; j++) {
              Vue.set(headList[j], 'img', headList[j+1].img);
              Vue.set(headList[j], 'children', headList[j+1].children);
            }
            Vue.set(headList[headList.length-1], 'children', []);
            this.$nextTick(() =>{
              this.isAnimPlay = true
            })
          }
          let childArr = headList[headList.length -1].children
          if(childArr && childArr.length < 4) {
            Vue.set(childArr, childArr.length, img)
          }
        }
      }
    },

    axiosGetCs(arr){
      const _this = this;
      let s = 0;
      console.log(3333,_this.workNumber)
      let l = _this.workNumber.length;
      console.log("好嗨哦1",_this.workNumber);
      debugger;
      for(let i=0; i<_this.workNumber.length; i++){
        console.log("444444",_this.workNumber[i])
        let t = setTimeout(function(){
          if(l == s){
            clearTimeout(t)
          }else{
            _this.addHead('./images/avatar/'+ _this.workNumber[i] + '.jpg')
            s++;
            t;
          }
        },1500);
      };
      _this.$set(_this.$data, "workNumber", arr);
      console.log(3333,_this.workNumber)
    },

    axiosGet(){
        //设置请求路径
       console.log(123);
       const _this= this;
       const urldemo = "http://10.130.202.49:8089/demo";
       const url  = "http://lottery.mw51pin.com/APIFurnace/API/G?EncKey=1&Func=%2BxB7vEWYIGvVosVBjYhwlhecmbBPV2SVusaZhmgcs68%3D&BatchNo=20190120_LH";
       // 发送请求:将数据返回到一个回到函数中
       // 并且响应成功以后会执行then方法中的回调函数
       axios.get(url).then(function(result) {
           // result是所有的返回回来的数据
           // 包括了响应报文行
           // 响应报文头
           // 响应报文体
           if(result.status == 200){
               console.log(result.data.List)
               _this.workNumber = result.data.List.map((v, i)=>{return v.EmpNo});
               let s = 0;
               let l = _this.workNumber.length;
               console.log("好嗨哦1",_this.workNumber);
               for(let i=0; i<_this.workNumber.length; i++){
                 console.log("55555555",_this.workNumber[i]);
                 if(l == s){
                   clearTimeout(t)
                 }else{
                   let t = setTimeout(function(){
                     console.log(666666,l, s);
                     _this.addHead('./images/avatar/'+ _this.workNumber[i] + '.jpg');
                   },1500);//3000/(_this.workNumber.length + 500)
                   s++;
                   // t;
                 }

               }
               _this.axiosGetWorkNO(result.data.List.map((v, i)=>{return v.EmpNo}));
           }
       })
       .catch((error)=>{
         console.log(456)
         // this.addHead();
       });
    },
    axiosGetWorkNO(workNumber){
      //设置请求路径
      const url = "http://lottery.mw51pin.com/APIFurnace/API/G?EncKey=1&Func=b6Q3mGCT3ne6F8oIUtO2AS8hmpDF90m9RFH5PPJ5ImY%3D&BatchNo=20190120_LH&EmpNo="+workNumber.join();
     // 发送请求:将数据返回到一个回到函数中
     _this= this;
     // 并且响应成功以后会执行then方法中的回调函数
     axios.get(url).then(function(res) {
         // result是所有的返回回来的数据
         // 包括了响应报文行
         // 响应报文头
         // 响应报文体
         if(res.status == 200){
           console.log("好嗨哦2",res.data)
         }
     });
   },

  },

})
