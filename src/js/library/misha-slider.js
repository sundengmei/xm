
import {$} from './jquery.js';

    $.fn.extend({
        // fast: function(options) {
        //     let defaults = {
        //         ev: 'click',
        //         active: 'actived',
        //         content: 'display'
        //     };

        //     $.extend(defaults, options); //合并对象

        //     // 元素选取
        //     let btnsl = this.children('.top').children('.direction').children('.left');
        //     let btnsr = this.children('.top').children('.direction').children('.right');
        //     let divs = this.children('.f-list').children('.wrap-list').children('.li-wrap');
        //     console.log(divs);
        //     console.log(btnsl);
        //     console.log(btnsr);
        //     btnsl.on(defaults.ev, function() {
        //        divs.css('left','-744px');
        //        console.log(1);
        //     });

        //     btnsr.on(defaults.ev,function(){
        //         divs.css('left','0');
        //         console.log(2);
        //     })

        //     if(divs.right>0){
        //         divs.right = 0;
        //     }else if(divs.left>0){
        //         divs.left = 0;
        //     }
        // }
        fast: function(options){
            let defaults ={
                speed:500,
                delay:1000
            };

            $.extend(defaults,options)

            let btnsl = this.children('.top').children('.direction').children('.left');
                let btnsr = this.children('.top').children('.direction').children('.right');
                let divs = this.children('.f-list').children('.wrap-list').children('.li-wrap');
                btnsl.on(defaults.ev, function() {
                   divs.css('left','-744px');
                });
    
                btnsr.on(defaults.ev,function(){
                    divs.css('left','0');
                })
    
                if(divs.right>0){
                    divs.right = 0;
                }else if(divs.left>0){
                    divs.left = 0;
                }

                divs.animate({
                    
                }, defaults.speed, function() {
                    if (btnsl) {
                        divs.css('left','-744px');
                    } else {
                        divs.css('left','0');
                    }
                    
                });
        }
    });
