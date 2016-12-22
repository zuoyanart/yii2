//文章评论
var comment = (articleid) => {
    let $ = require("jquery");
    let tools = require('pizzatools');
    require("layer");
    require('pizzaui');
    let self = {};
    let options = {
        articleid: articleid,
        url: '/comment/',
        tpl: __inline('./ejs/comment.ejs'),
        cp: 1,
        mp: 30
    };
    /**
     * 获取评论列表
     * @method
     * @return {[type]} [description]
     */
    self.list = (cp) => {
            $.ajax({
              type:"post",
                url: options.url + "page",
                data: "id=" + articleid + "&cp=" + cp + "&mp=" + options.mp,
                success: function(msg) {
                    if (msg.state == true) {
                        let s = new EJS({
                            text: options.tpl
                        }).render({
                            data: msg.msg,
                            tools: tools
                        });
                        $('.cmtlist').html(s);
                        options.cp += 1;
                    }
                }
            })
        }
        /**
         * 创建评论
         * @method function
         * @return {[type]} [description]
         */
    self.create = function() {
        let id = options.articleid;
        $(".form").pizzaValidate({
            'fields': {
                '#cmtcontent': {
                    'must': true,
                    'minLength': 3,
                    'maxLength': 1000,
                    focusMsg: "请输入评论内容",
                    errMsg: '评论内容必须在3-1000个字符之间'
                }
            },
            ajaxFun: function(data) {
                let op = "create";
                data += "&articleid=" + id;
                $.ajax({
                    type:"post",
                    url: options.url + op,
                    data: data,
                    success: function(msg) {
                        if (msg.state == true) {
                            self.list(1);
                            $("#cmtcontent").val("");
                        }
                    }
                });
            }
        });
    }

    return self;
};

module.exports = comment;
