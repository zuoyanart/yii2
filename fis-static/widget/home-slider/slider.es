/**
 * 图片轮转
 * @param  {[type]} ( [description]
 * @return {[type]}   [description]
 */
let slider = (options) => {
  let $ = require('jquery');
    let self = {};
    let loop = null;
    let option = {
        obj: ".pz-slider",
        ispc: false, //是否pc浏览器
        interval: 3000, //时间间隔
        autoplay: true, //自动轮转
        edgeFriction: 0.15, //非循环 slider 滚动到边缘时阻尼
        infinite: true, //无限循环模式
        pauseOnHove: true, //悬停是否停止
        arrows: true, //是否有箭头
        dots: true //是否显示圆点
    };
    $.extend(option, options);
    let width = $(option.obj).width(); //一屏的宽度
    let ul = $(option.obj + ">ul");
    let lis = $(option.obj + ">ul>li");
    let lilength = lis.length;
    let index = 0; ///当前第几张

    /**
     * 初始化
     * @return {[type]} [description]
     */
    self.init = () => {
            ul.css("width", (lilength + 1) + "00%");
            lis.css("width", (100 / (lilength + 1)) + "%");
            $(option.obj + ">ul").append($(lis[0]).clone());

            if (option.dots) { //是否有点
                let dot = '<ol class="pz-slider-pager">';
                dot += '<li class="active"></li>';
                for (let i = 1; i < lilength; i++) {
                    dot += '<li></li>';
                }
                dot += '</ol>';
                ul.after(dot);
            }
            if (option.arrows) { //是否有箭头
                let arrows = '<div class="slider-arrowsleft"><i class="icon-angle-left"></i></div>';
                arrows += '<div class="slider-arrowsright"><i class=" icon-angle-right"></i></div>';
                ul.after(arrows);

            }

            if (option.autoplay) { //是否自动播放
                setTimeout(function() {
                    move("left");
                }, option.interval);
            }

            ulOnSwipe(); //事件绑定
        }
        /**
         * 绑定事件
         * @return {[type]} [description]
         */
    let ulOnSwipe = () => {
            if (option.ispc == false) { //是移动端,添加滑动事件
                ul.on("swipe", function(ev, e) {
                    clearTimeout(loop);
                    let dire = e.direction;
                    console.log(dire);
                    if (dire == "left") {
                        move();
                    } else if (dire == "right") {
                        move("right");
                    }
                });
            }
            if (option.ispc == true && option.pauseOnHove) { //是pc,添加鼠标悬停事件
                ul.on("mouseover", function() {
                    clearTimeout(loop);
                });
            }
            if (option.arrows) {
                $(option.obj + " .slider-arrowsleft").on("click", function() {
                    clearTimeout(loop);
                    loop = setTimeout(function() {
                        move();
                    }, 500);
                });
                $(option.obj + " .slider-arrowsright").on("click", function() {
                    clearTimeout(loop);
                    loop = setTimeout(function() {
                        move("right");
                    }, 500);
                });
            }
        }
        /**
         * 取消事件绑定
         * @return {[type]} [description]
         */
    let ulOff = () => {
            ul.off();
            $(option.obj + " .slider-arrowsleft").off();
            $(option.obj + " .slider-arrowsright").off();
        }
        /**
         * 移动函数
         * @method
         * @return {[type]} [description]
         */
    let move = (v = "left") => {
        let ul = $(option.obj + "> ul");
        ulOff();
        clearTimeout(loop);
        let marginLeft = 0;
        let isleft = (v == "left" ? -1 : 1);
        if (v == "left") {
            marginLeft = Math.abs(parseInt(ul.css("margin-left"))) + width;
            if (index >= lilength) {
                ul.css("margin-left", 0);
                marginLeft = width;
                index = 0;
            }
        } else {
            marginLeft = parseInt(ul.css("margin-left")) + width;
            if (index == 0) {
                ul.css("margin-left", -lilength * width);
                marginLeft = -lilength * width + width;
                index = lilength;
            }
        }

        console.log("isleft=" + isleft);
        console.log("marginleft" + marginLeft);
        console.log("index=" + index);

        ul.animate({
            "margin-left": marginLeft * isleft
        }, 800, function() {
            index = index - 1 * isleft;
            ulOnSwipe();
            if(option.dots) {
              console.log("index=" + index);
              let liindex = index >= lilength ? 0:index;
                $(option.obj + " ol>li").removeClass("active");
              $(option.obj + " ol>li:eq("+liindex+")").addClass("active");
            }
            loop = setTimeout(function() {
                move();
            }, option.interval);
        });

    }


    return self;
}

module.exports = slider;
