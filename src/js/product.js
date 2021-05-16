import {$} from './library/jquery.js';
import './library/jquery-slider.js';
import cookie from './library/cookie.js';

$('.slider').slider({
    delay: 1000,
    speed: 1000
});



let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../interface/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function(res) {
        
            let picture = JSON.parse(res.picture);
            console.log(picture);
            let price = JSON.parse(res.price);
            let temp ='',
            temp1 = '',
            temp2 = '',
            temp3 = '',
            tempImg ='';


           temp =`
                <div class="pro-name fl">${res.title}</div>  
            `;
            temp1 =`
            <div>
                <img src="./${picture[1].src}" alt="">
                // <img src="./${picture[2].src}" alt="">
                // <img src="./${picture[3].src}" alt="">
                // <img src="./${picture[4].src}" alt="">
                // <img src="./${picture[5].src}" alt="">
                </div> 
            `;

            temp2 = `
            <div class="info-top">
                <h3>${res.title}</h3>
                <p class="sale-desc">${res.details}</p>
                <p class="company-name">小米自营</p>
                <p class="price">${price[0].new}</p>
            </div>
             `;

             temp3 = `
                    <div class="color">
                    <h3>选择颜色</h3>
                    <div class="color-choice">
                        <a href="">${res.color}</a>
                    </div>
                </div>
                <div class="color">
                    <h3>选择尺寸</h3>
                    <div class="color-choice">
                        <a href="">${res.size}</a>
                    </div>
                </div>
                <div class="info-total">
                    <div>
                        <span>${res.title}</span>
                        <span>${res.color}</span>
                        <span>通用</span>
                        <span class="fr">${price[0].new}</span>
                    </div>
                    <p>总计: ${price[0].new}</p>
                </div>
             `;

             tempImg =  `
             <img src="./${picture[2].src}" alt="">
             <img src="./${picture[3].src}" alt="">
             <img src="./${picture[4].src}" alt="">
             <img src="./${picture[5].src}" alt="">
             
             `;
       
           console.log(tempImg)
           console.log(1)


        $('.pro-title').append(temp);    
        $('.data-1').append(temp1);
        $('.data-2').append(temp2);
        $('.data-3').append(temp3);
        $('.content-pic').append(tempImg);

        $('body').find('#additem').on('click', function() {
            addItem(res.id, res.price, 1);
        })
        
    }
});

function addItem(id, price, num) {
    let shop = cookie.get('shop');

    let product = {
        id,
        price,
        num
    }

    // 判断当前cookie中是否有购物数据
    if (shop) { // 如果有数据 取出是一个字符串
        shop = JSON.parse(shop);

        // 添加之前先要判断数据中有没有该商品
        if (shop.some(el => el.id === id)) {
            let _index = shop.findIndex(elm => elm.id == id);
            let count = 1;
            count += 1;
            shop[_index].num = count;
        } else {
            shop.push(product);
        }


    } else { // 第一次没有数据的情况 创建一个新数据
        shop = [];
        shop.push(product);
    }

    cookie.set('shop', JSON.stringify(shop), 1);
}
