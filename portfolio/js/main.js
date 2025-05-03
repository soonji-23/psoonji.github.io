$(document).ready(function(){
    // 현재 요소의 다음 요소의 순서를 기억
    var indexP=0;
    // 창의 너비가 조절되었을 때의 값을 호출
    winWidth=$(window).width();
    // 창의 높이가 조절되었을 때의 값을 호출
    winHeight=$(window).height();

    // 휠 사용자 함수
    function wheel(){
        // 데스크탑과 모바일 크기에 조건
        if(winWidth>=1024){
            // 640px이상의 경우에 휠
            $("section").each(function(index){
                console.log("섹션의 수 : "+index);
                // 섹션에서 휠을 동작시킨다.
                $(this).on("DOMMouseScroll mousewheel ",function(e){
                    console.log("휠이 동작하고 있어요")
                    // 휠을 위로 올렸는지 아래로 내리는지를 판단하도록 조건
                    if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
                        // 휠을 올렸을 때
                        console.log("휠을 올리고 있어요")
                        if($(this).prev() != undefined){
                            //이전 요소가 있는지 없는지
                            console.log("이전요소가 있어요")
                            var moveTop=$(this).prev().offset().top;
                            indexP=index-1;
                            // 휠 이벤트를 했을 때 애니메이션이 들어갈 위치
                            if(indexP<=0){
                                $("header").removeClass("active");
                            }
                            $(this).find(".s-text h2, .s-text p, .d-link").removeClass("active");
                            $(this).prev().find(".s-text h2, .s-text p, .d-link").addClass("active")
                        }// 이전요솔르 찾는 조건의 끝
                    }else{
                        // 휠을 내렸을 때
                        console.log("휠을 내리고 있어요");
                        if($(this).next() != undefined){
                            // 다음요소가 있는지 없는지 !=(부정) undefined(없음)
                            console.log("다음요소가 있어요");
                            var moveTop=$(this).next().offset().top;
                            indexP=index+1;
                            console.log("섹션의 탑의 위치 : "+moveTop)
                            // 휠을 내렸을 때 애니메이션이 들어갈 위치
                            if(indexP>=1){
                                $("header").addClass("active");
                            }
                            $(this).find(".s-text h2, .s-text p, .d-link").removeClass("active");
                            $(this).next().find(".s-text h2, .s-text p, .d-link").addClass("active")
                        }// 다음요소를 찾는 조건의 끝
                    }//휠을 내렸는냐 올렸느냐의 조건의 끝
                    $("html,body").stop().animate({
                        scrollTop:moveTop
                    },800)
                    return false;
                })
            })
        }else{
            // 640px미만의 경우에 휠 중지
            $("section").off();
            $("section").each(function(index){
                $(window).scroll(function(){
                    // 각 섹션의 top
                    var sectionTop=$("section").eq(index).offset().top;
                    console.log("각 섹션의 탑 : "+sectionTop)
                    // 스크롤바의 top
                    var $scroll=$(this).scrollTop();
                    if($scroll+500 >= sectionTop){
                        // 섹션의 모든 애니메이션을 중지하고
                        $("section").find(".s-text h2, .s-text p, .d-link").removeClass("active")
                        // 현재 섹션의 애니메이션만 처리한다.
                        $("section").eq(index).find(".s-text h2, .s-text p, .d-link").addClass("active");
                    }
                })
            })
        }
    }// 휠 사용자 함수 끝

    wheel();

    // 섹션의 높이 조절 함수
    function $height(){
        $(window).resize(function(){
            winHeight=$(window).height();
            // 높이를 새로 정의
            $("section").css({
                height:winHeight
            });
            // 높이가 조절되면 제자리 찾기
            $("html,body").stop().animate({
                scrollTop:winHeight*indexP
                // 다음요소, 이전요소의 순서(위치)indexP
            },0)
        })
    }
    $height();
    // 사이즈가 변경될 때마다(resize)
    $(window).resize(function(){
        winWidth=$(window).width();
        $height();
        wheel();
    })
      
})