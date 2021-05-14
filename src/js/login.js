import { $ } from './library/jquery.js';

$(function(){
    $('.account-input-text').focus(function(){
        $(this).siblings().css('font-size','12px').css('top','24px');
        $(this).parent().parent().css('border-color','#ff3300');
        $('.login').removeAttr('disabled');
    });
    $('.account-input-text').blur(function(){
        let sib = $(this).siblings();
        let parent = $(this).parent().parent();
        let account = $(this).parent().parent().parent().children('.accout-tip');
        let keyVal = $(this).val().replace(/(^\s*)|(\s*$)/g, "");
        if(keyVal == null || keyVal == ""){
            sib.css('font-size','17px').css('top','40px').css('color','red');
            parent.css('border-color','rgba(0,0,0,0');
            account.removeClass('hidden');
            $(this).parent().parent().css('border-color','rgba(0,0,0,0)').css('background','rgb(255, 220, 226)');
            $('.login').attr('disabled','disabled');
        }else{
            sib.css('color','#ccc');
            account.addClass('hidden');
            $('.login').css('background','#ff4d00')
            $(this).parent().parent().css('border-color','rgba(0,0,0,0)').css('background','rgba(255, 220, 226,0)');
            $('.login').removeAttr('disabled');
        }

    });
    
    $('.icon').on('click',function(){
        $(this).addClass('hidden').siblings().removeClass('hidden');
    });

    // $('.zc').on('click',function(){
    //    location.href('../src/register.html');
    // })
});
