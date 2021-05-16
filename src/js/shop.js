import {$} from './library/jquery.js';
import cookie from './library/cookie.js';

let shop = cookie.get('shop');

if (shop) {
    shop = JSON.parse(shop);

    let idList = shop.map(el => el.id).join();

    $.ajax({
        type: "get",
        url: "../interface/getItems.php",
        data: { idList: idList },
        dataType: "json",
        success: function(res) {
            console.log(res)
            let temp = '';

            res.forEach(elm => {
                let picture = JSON.parse(elm.picture);
                let price = JSON.parse(elm.price);

                // 让ajax请求到的数据结果中遍历后的id与cookie中数据的id 相同
                let current = shop.filter(val => val.id == elm.id);

                temp += `
                    <div class="pro-item">
                        <div class="col col-check fl">
                          
                            <input type="checkbox" class="duihao fl">
                        </div>
                        <div class="img fl">
                            <img src="./${picture[0].src}" alt="">
                        </div>
                        <div class="pro-name fl">${elm.title} ${elm.color}</div>
                        <div class="price fl"><span class="pri">${parseInt(price[0].new)}</span>元</div>
                        <div class="count fl">
                            <div class="count-inner">
                                <span class="oper jian fl" id="jian">-</span>
                                <a class="count-num fl">${current[0].num}</a>
                                <span class="oper jia fl" id="jia">+</span>
                            </div>
                        </div>
                        <div class="count-all fl"><span class="count-pri">${(parseInt(price[0].new) * current[0].num)}</span>元</div>
                        <div class="operate fl">
                           <span><a href="javascript:;" class="close" data-id="${elm.id}">×</a></span>
                        </div>
                    </div>`;
            });

           $('.shop-pro').append(temp);
            $('.close').on('click', function() {
                let res = shop.filter(el => el.id != $(this).attr('data-id'));
                cookie.set('shop', JSON.stringify(res), 1);
                location.reload();
                
            });
        }
    });
}

$(function(){
    
    let check = $('.duihao');
    let snum = 0;
    let cnum = 0;
    let alls = 0;
    console.log(check)
    for(let i=1;i<check.length;i++){
        console.log(check[i])
        let num2 = parseInt($(check[i]).parent().siblings('.count').children().children('.count-num').text());
        snum+= num2;
        $('.all-num').text(snum);
        
    }
    let box = $('.shop-pro');

    box.on('click','.jia',function(e){
       
         let num =+($(this).parent().children('.count-num').text());
            num++;
            $(this).parent().children('.count-num').text(num);
            let parent = $(this).parent().parent();
            parent.siblings('.count-all').children('.count-pri').text(parseInt(parent.siblings('.price').children('.pri').text())*num);
            console.log(num);
            let pnum = parseInt( $('.all-num').text());
            pnum ++;
            $('.all-num').text(pnum);
    });

    box.on('click','.jian',function(e){
        let num =+($(this).parent().children('.count-num').text());
      if(num>1){

           num--;
           $(this).parent().children('.count-num').text(num);
           let parent = $(this).parent().parent();
           parent.siblings('.count-all').children('.count-pri').text(parseInt(parent.siblings('.price').children('.pri').text())*num);
           console.log(num);
           let dnum = parseInt( $('.all-num').text());
            dnum --;
            $('.all-num').text(dnum);
      }
       
   });
});

$(function(){

    let check = $('.duihao');
    let snum = 0;
    let cnum = 0;
    let alls = 0;
    console.log(check)
    for(let i=1;i<check.length;i++){
        console.log(check[i])
        let num2 = parseInt($(check[i]).parent().siblings('.count').children().children('.count-num').text());
        snum+= num2;
        $('.all-num').text(snum);
        
    }

    $('.dh').on('click',function(){
        $('.duihao').prop('checked',$(this).prop('checked'));
  
    if($('.dh').prop('checked')){
        for(let i=1;i<check.length;i++){
            let num2 = parseInt($(check[i]).parent().siblings('.count').children().children('.count-num').text());
            let allspend = parseInt($(check[i]).parent().siblings('.count-all').children('.count-pri').text());
            cnum += num2;
            alls += allspend;
            $('.choose-num').text(cnum);
            $('.all-spend').text(alls);
        }
    }else{

        $('.choose-num').text(0);
        $('.all-spend').text(0);
    }
       
    })
});


           
