$(document).ready(function () {

    $(".hamburger-nav").on("click", function () {

        $(".menu").animate({
            height: 'show'
            // animates height increase
        });

        $('.hamburger-nav').css("visibility", "hidden");
        $('header nav h2 ').css("visibility", "hidden");
        // callback function to show logo and burger icon
        
    });
    
    $('.menu li').on('click', function () {
        
        
        $(".menu").animate({
            height: 'hide'
            // animates height increase
            // position absolute top/left on the menu makes it stretch 
        }, function(){
            $('.hamburger-nav').css("visibility", "visible");
            $('header nav h2').css("visibility", "visible");
            // callback function to show logo and burger icon
        });
        
    });

})