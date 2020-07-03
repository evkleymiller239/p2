$(document).ready(function(){
    var itemsCount = 0;
    setTimeout(carusels,12000);
    function carusels () {
        if ($('.happy-buy-man .item-s').length > itemsCount) {
            $('.happy-buy-man .item-s').eq(itemsCount).addClass('active');
            setTimeout(carusels, 12000);
            setTimeout(function () {
                $('.happy-buy-man .item-s.active').removeClass('active');
            }, 5000);
            itemsCount++;
        }else{
            itemsCount =0;
        }
    }
	
    $('.parfumes .woocommerce').owlCarousel({
        items: 3,
        lazyLoad: true,
        slideBy: 3,
        nav: true
    });
	
    $("#owl-demo1").owlCarousel({
        items : 1,
        autoplay : false,
        autoplaySpeed:0,
        //autoplay : false,
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        nav:true,
        navText : false,
        loop : true,
        autoWidth : false,
        responsive : false,
        itemsScaleUp : false,
    });

    var options = {
        delegation: true,
        clearForm: true,
        resetForm: true,
        type: 'post',
        beforeSubmit: function() {
            $.fancybox.close();
        },
        success: function() {
            $.fancybox({href: "#popupThanks", type: 'inline'});
        },
        error: function() {
            $.fancybox({href: "#popupError", type: 'inline'});
        }
    }
	
    processTimer();
    processNoTimer();

  
    $('body').on('click','#oformlenie', function(){
        if(jQuery('form[name=checkout]').size()){
            var date = new Date();
            var a = -date.getTimezoneOffset();
            jQuery('<input />').attr('type','hidden').attr('name','timezone').val(a).appendTo('form[name=checkout]');
            console.log('timezone '+a);
        }
    });
    
    
});

var flag = true;
var pageY = $('.menuWrapper').offset().top;
var $debugContainer = $('.globalWrapper');
(function(){
    $( ".hover_pop_up" ).hover(
        function(event) {
            if(flag){
                if (event.pageY < pageY) {
                    $.fancybox({href: "#popup_callback", type: 'inline'});
                    flag = false
                }
            }
        }, function() {

        }
    );
});

$('.hover_pop_up').mouseleave(function(event){
    if(flag){
        if (event.pageY < pageY) {
            $.fancybox({href: "#popup_callback", type: 'inline'});
            flag = false
        }
    }
});

$( ".item1 .hover" ).click(function() {
    $(this).siblings('.hover_p').toggleClass('active');
    $(this).toggleClass('active');
    if($(this).siblings('.hover_p').hasClass('active'))
        $(this).siblings('.hover_p.active').animate({height: "show"},700);
    else
        $(this).siblings('.hover_p').animate({height: 'hide'},700);

});


function baseName(str)
{
    var base = new String(str).substring(str.lastIndexOf('/') + 1);
    if(base.lastIndexOf(".") != -1)
        base = base.substring(0, base.lastIndexOf("."));
    return base;
}

$('input[type=file]').change(function() {
    var filename = $(this).val().replace("C:\\fakepath\\", "");
    if(filename == '') {
        filename = "Прикрепить фото";
    }
    var parent = $(this).parent().parent();
    $(parent).find('.fileName').html(filename);
});