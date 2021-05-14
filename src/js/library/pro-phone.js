(function($){
    $.fn.extend({
        product: function(options) {
            let defaults = {
                ev: 'mouseover',
                active: 'actived',
                content: 'display'
            };

            $.extend(defaults, options); //合并对象

            // 元素选取
            let title = this.children('.product-head').children('.nav-li').children('.nav-li-ti');
            let pro = this.children('.product-item');
            console.log(pro);
            console.log(title);
            title.on(defaults.ev, function() {
                let index = btns.index(this);
                $(this).addClass(defaults.active).siblings().removeClass(defaults.active);
                divs.eq(index).addClass(defaults.content).siblings().removeClass(defaults.content);
            });
        }
    });

})(jQuery)