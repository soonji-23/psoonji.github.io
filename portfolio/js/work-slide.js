$(document).ready(function(){
   
    function fadeIn_fadeOut(){
        var count=0;
        var $slide_length;
        var $slide_width;
        var $dot_length;
        var loop=null;
        $(".slide:gt(0)").hide();
        function ini(){
            $slide_length=$(".slide").length;
            $slide_width=$(".slide").width();
            $dot_length=$(".dot").length;
            $(".slider").css({
                height:$slide_width*0.55
            })
            for(i=$dot_length; i<$slide_length; i++){
                $(".pagenation").append('<span class="dot">'+$('.slide').eq(i).find('a').html()+'</span>')
            }
             

        }
        ini();
        $(window).resize(function(){
            ini();
        })
        function $slider(){
            function movePlay(){
                $(".slide").fadeOut().eq(count).fadeIn();
            }
            function nextPlay(){
                if(count==$slide_length-1){
                    count=0;
                }else{
                    count++;
                }
                movePlay();
            }
            function autoPlay(){
                loop=setInterval(function(){
                    nextPlay();
                    $pageActive();
                },5000)
            }
            function $pageActive(){
                $(".pagenation span").removeClass("active");
                $(".pagenation span").eq(count).addClass("active")
            }
            autoPlay();
            function $page(){
                $(".pagenation span").each(function(index){
                    $(this).click(function(){
                        count=index;
                        $pageActive();
                        movePlay();
                    })
                })
            }
            $page();
        }
        $slider();


    }
    fadeIn_fadeOut();
});