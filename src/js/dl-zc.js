import {$} from './library/jquery.js'

$(function(){
    
    $('.dl').on('click',function(){
        $(this).addClass('border-or').siblings().removeClass('border-or');
    })
    $('.zc').on('click',function(){
        $(this).addClass('border-or').siblings().removeClass('border-or');
    })
})