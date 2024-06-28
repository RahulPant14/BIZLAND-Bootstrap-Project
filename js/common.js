$(function(){



    $(".wrap-10 .tabs-imp a").click(function(e){
        e.preventDefault();
        $(".wrap-10 .tabs-imp a").removeClass("active");
        $(this).addClass("active");

        if($(this).text()=="ALL"){
            $(".wrap-10 .all").fadeIn();
        }
        else if($(this).text()=="APP"){
            $(".wrap-10 .cards").fadeOut(0);
            $(".wrap-10 .web").fadeOut(0);
            $(".wrap-10 .app").fadeIn();
         }
        else if($(this).text()=="CARD"){ 
            $(".wrap-10 .app").fadeOut(0);
            $(".wrap-10 .web").fadeOut(0);
            $(".wrap-10 .cards").fadeIn();
        }
        else if($(this).text()=="WEB"){
            $(".wrap-10 .app").fadeOut(0);
            $(".wrap-10 .cards").fadeOut(0);
            $(".wrap-10 .web").fadeIn();
         }
    });

    AOS.init();

});