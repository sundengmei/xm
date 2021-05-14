(function($){

    $.fn.extend({
        slider: function(options) {
            let defaults = {
                ev: 'click',
                // active: 'actived',
                content: 'gray'
            };

            $.extend(defaults, options); //合并对象

            // 元素选取
            let btns = this.children('ul').children('li');
            let divs = this.children('div');

            btns.on(defaults.ev, function() {
                let index = btns.index(this);
                // $(this).addClass(defaults.active).siblings().removeClass(defaults.active);
                btns.eq(index).addClass(defaults.content).siblings().removeClass(defaults.content);
            });
        }
    });
})(jQuery)