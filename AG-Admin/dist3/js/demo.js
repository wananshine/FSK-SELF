var vm = new Vue({
  el: "#app",
  data: {
    headbodyList : []
  },
  computed: {

  },
  watch: {
      Aarry: {
            handler: function (Aarry) {
                // console.log(newVal.length)
            },
            deep: true
        },
  },
  beforeCreate(){},
  created() {
    console.log(123)
  },
  beforeMount(){},
  methods: {

    init: function(){
      let n = 0;
      let work;
      let scroll;
      const $output = $(".output");
      const $display = $(".display");
      let timer;
      let coord = ["t","rt","lt","b","rb","lb","l","r"];
      this.isPrime();
      this.outputPrime();
      this.outputNormal();
      this.display();
      this.calcPrimes(work);
      this.pauseWork(work);
      this.scrollWindow();
      this.pauseScroll();


    },
    isPrime: function(n){
      var i = 2, n = n || 1;
      if ( n === 1 ) { return false; }
      if ( n < 4 ) { return true; }

      while( i < n ) {
        if ( n % i === 0 ) { return false; }
        i++;
      }
      return true;
    },
    outputPrime: function(n, c){
      const self = this;
      if(n) {
          self.$refs.output.appendChild("<i class='prime" + c + "'>" + n + "</i>");
      }
    },
    outputNormal: function(n){
      const self = this;
      if(n) {
          self.$refs.output.appendChild("<i>" + n + "</i>");
      }
    },
    display: function(n, prime, c){
      var $temp, pos;
      if(n) {

          $display.text(n);
          console.log(arguments);

          if(prime) {

              pos = Math.floor(Math.random()*coord.length);

              $temp = $display
                  .clone()
                  .addClass("prime c" + c)
                  .insertAfter( $display );

              setTimeout(function() {
                  $temp
                      .addClass("out")
                      .addClass(coord[pos]);
              }, 10);

              setTimeout(function() {
                  $temp.remove();
              }, 1200);

          }
      }
    },
    calcPrimes: function(work, n){
      let c, p;
      const self = this;
      clearInterval(work);
      work = setInterval(function() {

          c = Math.floor(Math.random()*6);
          p = self.isPrime(n);

          if( !p ) {
              self.outputNormal(n);
              self.display(n, p, c);
          } else {
              outputPrime(n, c);
              display(n, p, c);
          }

          n++;
      }, 33 );
    },
    pauseWork: function(work){
      clearInterval(work);
    },
    scrollWindow: function(){
      scroll = setInterval(function() {
          $("body").animate({
              "scrollTop": $("body").height()-80
          }, 200 );
      }, 2000 );
    },
    pauseScroll: function(){
      clearInterval(scroll);
    },


    addHead(){},
    addHeadOne (){}
  },
  mounted(){
        this.$nextTick(function(){
            "use strict";
        });
        // let paused = true;
        // this.init();
        // const self = this;
        // $(".control").on("click", function() {
        //     if( paused ) {
        //         self.scrollWindow();
        //         self.calcPrimes();
        //         $(".control")
        //             .addClass("play")
        //             .removeClass("pause");
        //     } else {
        //         self.pauseScroll();
        //         self.pauseWork();
        //         $(".control")
        //             .addClass("pause")
        //             .removeClass("play");
        //     }
        //
        //     paused = !paused;
        //
        // }).trigger("click");


      const self = this;
      var $output = $(".output"),
      $display = $(".display"),
      timer, coord = ["t","rt","lt","b","rb","lb","l","r"];

      this.isPrime(n);
    //   function isPrime(n) {
    //
    //   var i = 2, n = n || 1;
    //   if ( n === 1 ) { return false; }
    //   if ( n < 4 ) { return true; }
    //
    //   while( i < n ) {
    //     if ( n % i === 0 ) { return false; }
    //     i++;
    //   }
    //   return true;
    //
    // }

    function outputPrime(n, c) {
        if(n) {
            $output.append("<i class='prime" + c + "'>" + n + "</i>");
        }
    }

    function outputNormal(n) {
        if(n) {
            $output.append("<i>" + n + "</i>");
        }
    }

    function display(n, prime, c) {

        var $temp, pos;
        if(n) {

            $display.text(n);
            console.log(arguments);

            if(prime) {

                pos = Math.floor(Math.random()*coord.length);

                $temp = $display
                    .clone()
                    .addClass("prime c" + c)
                    .insertAfter( $display );

                setTimeout(function() {
                    $temp
                        .addClass("out")
                        .addClass(coord[pos]);
                }, 10);

                setTimeout(function() {
                    $temp.remove();
                }, 1200);

            }
        }
    }



    var n = 0,
        work, scroll,
        paused = true;

    function calcPrimes() {
        var c, p;
        clearInterval(work);
        work = setInterval(function() {

            c = Math.floor(Math.random()*6);
            p = self.isPrime(n);

            if( !p ) {
                outputNormal(n);
                display(n, p, c);
            } else {
                outputPrime(n, c);
                display(n, p, c);
            }

            n++;
        }, 33 );

    }
    function pauseWork() {
        clearInterval(work);
    }

    function scrollWindow() {

        scroll = setInterval(function() {
            $("body").animate({
                "scrollTop": $("body").height()-80
            }, 200 );
        }, 2000 );

    }
    function pauseScroll() {
        clearInterval(scroll);
    }


    $(".control").on("click", function() {

        if( paused ) {
            scrollWindow();
            calcPrimes();
            $(".control")
                .addClass("play")
                .removeClass("pause");
        } else {
            pauseScroll();
            pauseWork();
            $(".control")
                .addClass("pause")
                .removeClass("play");
        }

        paused = !paused;

    }).trigger("click");
  },
  beforeUpdate(){},
  updated(){},

})
