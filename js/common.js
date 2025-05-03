$(document).ready(function(){
    //마우스커서 함수
    // 창의 너비를 가지고 온다.
    // 1024px이상에서는 원포이트가 보이고 미만에서는 보이지 않게
    var winWidth=$(window).width();
    // 원포인트 함수를 작성
    function $point(){
        // cursor 원이 포인트 중앙에 위치하도록 
        var pointSize=$(".cursor").width()/2;
        $("body").on("mousemove", function(e){
            $(".cursor").css(
                // 하나의 속성과 속성값만 사용할 때
                "top",e.pageY-pointSize
            );
            $(".cursor").css({
                // 여러개의 속성과 속성값을 사용할 때
                "left":e.pageX-pointSize
            });
            $(".cursor").fadeIn();
        });
        $("body").on("mouseleave",function(e){
            $(".cursor").fadeOut();
        })
    }
    // 브라우저에서 최초로 문서를 불러왔을 때의 창의 너비
    if(winWidth>1024){
        $point();
    }else{
        $("body").off();
    }

    $(window).resize(function(){
        // 사이즈가 조정될 때마다 필요한 요소를 다시 불러오는 역활
        winWidth=$(window).width();
        if(winWidth>1024){
            $point();
        }else{
            $("body").off();
        }
    })
    
    
});