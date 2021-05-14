import { $ } from './library/jquery.js';
import './library/jquery-slider.js';
import './library/jquery.lazyload.js';

    $('.slider').slider({
        delay: 1000,
        speed: 1000
    });

    $(function(){
        let left = $('.left'),
            right = $('.right'),
            liWrap = $('.li-wrap');
        left.on('click', function() {
            liWrap.animate({
                left: '-744',
            }, 600);
         });
         right.on('click', function() {
           liWrap.animate({
                left: '0',
            }, 600);
         });

         if(liWrap.left > 0 || liWrap.right > 0){
            liWrap.left = 0;
            liWrap.right = 0;
         }
    });

    $(function(){
        let title = $('.nav-li').children();
        let product = $('.toggle');
        console.log(title);
        console.log(product);
        title.on('mouseover',function(){
            let index = title.index(this);
            product.eq(index).removeClass('hidden').siblings().addClass('hidden');
            $(this).addClass('orange').siblings().removeClass('orange');
        })
    });

    $(function(){
        $('input').focus(function(){
            $('.search').addClass('b-orange');
            $('.input').addClass('b-orange');
            $('.s-drop').removeClass('hidden');
        });

        $('input').blur(function(){
            $('.search').removeClass('b-orange');
            $('.input').removeClass('b-orange');
            $('.s-drop').addClass('hidden');
        });

    });

   $(function(){
        let futuer = new Date(2021, 5, 20, 18, 0, 0); 
        let hours = $('.hour');
        let minute = $('.minute');
        let second = $('.second');
        setInterval(function() {
            let current = new Date();
            let ms = futuer - current;
            let s = ms / 1000; 
            let h = parseInt(s % 86400 / 3600);
            h = h < 10? '0' + h : h;
            let min = parseInt(s % 3600 / 60);
            min = min < 10? '0' + min : min;
            let sec = parseInt(s % 60);
            sec = sec < 10? '0' + sec : sec;
            hours.html(h);
            minute.html(min);
            second.html(sec);            
        }, 1000);
   });

$(function(){
    $('.head-reg').on('click',function(){
       $('.regist').removeClass('hidden');
    })
    $('.close').on('click',function(){
        $('.regist').addClass('hidden');
    })
    $('.disagree').on('click',function(){
        $('.regist').addClass('hidden');
    })
    
})


$("img.lazy").lazyload({
    placeholder: '../src/img/lazy.jpg',
    effect:'fadeIn'
});


$.ajax({
    type: "get",
    url: "../interface/getData.php",
    dataType: "json",
    success:function(res){
        // console.log(res);

        let temp = '';
        let temp2 = '';
        let temp3 = '';
        res.forEach((elm, i) => {
            let picture = JSON.parse(elm.picture);
            let price = JSON.parse(elm.price);
            // console.log(picture);
            // console.log(price);

            if(i<4){
                temp += `<div class="phone-2 item-li fl">
                        <a href="./product.html?id=${elm.id}"">
                            <img class="lazy" data-original="./${picture[0].src}" src="./${picture[0].src}" alt="">
                            <p class="intro1">${elm.title}</p>
                            <p class="intro2">${elm.detail}</p>
                            <p class="price">${price[0].new}<span class="old-pri">${price[1].old}</span></p>
                        </a>
                    </div>`;  
            }else if(i>=4 && i<7){
                    temp2 += `<div class="phone-2 item-li item-li-2 fl">
                                <a href="./product.html?id=${elm.id}"">
                                    <img class="lazy" data-original="./${picture[0].src}" src="./${picture[0].src}" alt="">
                                    <p class="intro1">${elm.title}</p>
                                    <p class="intro2">${elm.detail}</p>
                                    <p class="price">${price[0].new}<span class="old-pri">${price[1].old}</span></p>
                                </a>
                              </div>`;  
            }else if(i==7){
                temp3 += `<div class="li-top item-li">
                            <img src="./${picture[0].src}" alt="" class="fr">
                            <div class="text fl">
                                <p class="pro-name">${elm.title}</p>
                                <P class="price">${price[0].new}</P>
                            </div>
                          </div>`;
                  
            }
        });

        // console.log(temp);
        $('.add-data').append(temp);
        $('.add-data2').append(temp2);
        $('.add-data3').append(temp3);
    }
});




