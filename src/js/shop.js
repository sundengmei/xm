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
                            <span class="duihao fl">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-duihao2"></use>
                                </svg>
                            </span>
                        </div>
                        <div class="img fl">
                            <img src="./${picture[0].src}" alt="">
                        </div>
                        <div class="pro-name fl">${elm.title} ${elm.color}</div>
                        <div class="price fl">${price[0].new}</div>
                        <div class="count fl">
                            <div class="count-inner">
                                <a class="jian fl">-</a>
                                <a class="count-num fl">${current[0].num}</a>
                                <a class="jia fl">+</a>
                            </div>
                        </div>
                        <div class="count-all fl">${price[0].new}</div>
                        <div class="shop-pro"></div>
                        <div class="operate fl">
                           <span><a class="close">×</a></span>
                        </div>
                    </div>  `;
               
               

                $('.shop-pro').append(temp);

            });
            $('.close').on('click', function() {
                let res = shop.filter(el => el.id != $(this).attr('data-id'));
                cookie.set('shop', JSON.stringify(res), 1);
                location.reload();
                $('.pro-item').addClass('hidden');
            });
        }
    });
}