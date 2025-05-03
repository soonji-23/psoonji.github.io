$(document).ready(function(){


    $(".m-nav-open").click(function(){
        $(".m-nav-content").css({
            left:0
        })
    })
    $(".m-nav-close").click(function(){
        $(".m-nav-content").css({
            left:"-100%"
        });
    })

    
    $(".m-nav-list>li").click(function(){
    if($(this).find(".m-drop").is(":hidden")) {
        $(".m-drop").slideUp();
        $(this).find(".m-drop").slideToggle();
        $(".m-nav-list>li a span").removeClass("fa-caret-down");
        $(".m-nav-list>li a span").addClass("fa-caret-right");
        $(this).find("a span").removeClass("fa-caret-right")
        $(this).find("a span").addClass("fa-caret-down")

        }else{
            $(".m-drop").slideUp();
            $(".m-nav-list>li a span").removeClass("fa-caret-down");
            $(".m-nav-list>li a span").addClass("fa-caret-right");
        }  
    })

    $(".m-footer-info span").click(function(){
        if($(".raon-info").is(":hidden")) {
            $(".raon-info").css({
                display:"block"
            })
        }else{
            $(".raon-info").css({
                display:"none"
            })
        }
        })

        $(".popup-close").click(function(){
            $(".popup").hide();
        })

});