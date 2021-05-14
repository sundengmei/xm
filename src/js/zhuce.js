import { $ } from './library/jquery.js';


$(function(){

    $('.username').focus(function(){
        $(this).siblings().addClass('hidden');
        $('.but').removeAttr('disabled');
        
    });

    
    $('.username').blur(function(){
        let reg = /^1[3-9]\d{9}$/;
        let phone = $('.username').val(); 
        let keyVal = $(this).val().replace(/(^\s*)|(\s*$)/g, "");
        if(keyVal == null || keyVal == ""){
            $('.num-tip-p').removeClass('hidden');
            $('.num-tip-error').addClass('hidden');
            $('.but').attr('disabled','disabled');
        }else if(!(reg.test(phone))){
            $('.num-tip-error').removeClass('hidden');
            $('.num-tip-p').addClass('hidden');
            $('.but').attr('disabled','disabled');
            
        }else if(reg.test(phone)){
             $('.but').removeAttr('disabled');
             $('.num-tip-error').addClass('hidden');
             $('.num-tip-p').addClass('hidden');
             $('.but').removeAttr('disabled',);
        }

     
          
        // if(!(/^1[3456789]d{9}$/.test(phone))){ 
        //     $('.num-tip-error').removeClass('hidden');
        //     return false; 
        // } 

    });

    $('.but').on('click',function(){      
        $('.username').siblings().removeClass('hidden');
    })
})
