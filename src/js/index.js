import $ from './library/jquery.js';

$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function(res) {
        console.log(res);

        let temp = '';

        res.forEach((elm, i) => {
            let picture = JSON.parse(elm.picture);
            // console.log(picture);

            temp += `<li class="item">
            <a href="./product.html?id=${elm.id}">
                <div class="p-pic">
                    <img src="../${picture[0].src}" alt="">
                </div>
                <div class="p-price">
                    <span class="yuan">￥</span>${elm.price}
                </div>
                <div class="p-title">
                    ${elm.title}
                </div>
            </a>
        </li>`;
        });

        $('.list').html(temp);
    }
});