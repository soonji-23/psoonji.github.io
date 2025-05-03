$(document).ready(function(){
    function move(){
        $(".maines").append($(".main:first"));
        $(".maines").remove($(".main:first"));
    }

     $(".next-bt").click(function(){
       move();
    })
    $(".pre-bt").click(function(){
        $(".maines").prepend($(".main:last"));
        $(".maines").remove($(".main:last"));
    })

    function autoPlay(){
        var loof=setInterval(function(){
            move();
        },5000)

      }
      autoPlay();
    
var winWidth=$(window).width();
    if(winWidth <= 450){
        $(".main").eq(0).find("img").attr("src", "images/m-italia.jpg");
        $(".main").eq(1).find("img").attr("src", "images/m-aurora.jpg");
        $(".main").eq(2).find("img").attr("src", "images/m-italia.jpg");
        $(".main").eq(3).find("img").attr("src", "images/m-aurora.jpg");
    }else{
        $(".main").eq(0).find("img").attr("src", "images/italy1.jpg");
        $(".main").eq(1).find("img").attr("src", "images/aurora.jpg");
        $(".main").eq(2).find("img").attr("src", "images/italy1.jpg");
        $(".main").eq(3).find("img").attr("src", "images/aurora.jpg");
    }

    $(window).resize(function(){
        var winWidth=$(window).width();
        if(winWidth >= 450){
            $(".main").eq(0).find("img").attr("src", "images/italy1.jpg");
            $(".main").eq(1).find("img").attr("src", "images/aurora.jpg");
            $(".main").eq(2).find("img").attr("src", "images/italy1.jpg");
            $(".main").eq(3).find("img").attr("src", "images/aurora.jpg");

        }else{
            $(".main").eq(0).find("img").attr("src", "images/m-italia.jpg");
            $(".main").eq(1).find("img").attr("src", "images/m-aurora.jpg");
            $(".main").eq(2).find("img").attr("src", "images/m-italia.jpg");
            $(".main").eq(3).find("img").attr("src", "images/m-aurora.jpg");
        }
    });
     

    function autoPlays(){
        var loof=setInterval(function(){
            $(".banner-sliders").append($(".banner-img:first"));
            $(".banner-sliders").remove($(".banner-img:first"));

        },5000)
        $(".banner-sliders").prepend($(".banner-img:last"));
        $(".banner-sliders").remove($(".banner-img:last"));
      }
      autoPlays();

 

    $("#asia .thum:gt(3)").hide();
    var bool=true;
    $(".more").click(function(){
        if(bool){
            $("#asia .thum:gt(3)").fadeIn();
            $(this).text("접기")
            bool=false;
        }else{
            $("#asia .thum:gt(3)").fadeOut();
            $(this).text("더보기")
            bool=true;
        }  
    
    })
   

var x_pos;
var x;
var drag=false;
var last_left=$(".m-event-sliders").width()-$(".mobile-event-wrap").width();

function mouseD(){
    $(".m-event-sliders").on("mousedown",function(e){
        x_pos=e.pageX;
        drag=true;

        return false;
    })
}

function mouseU(){
    $(".m-event-sliders").on("mouseup",function(e){
        x_pos=e.pageX;
        drag=false;
    })
}


function mouseM(){
    $(".m-event-sliders").on("mousemove",function(e){
       x=parseInt($(this).css("left"))-parseInt(x_pos-e.pageX)
        x_pos=e.pageX;

        if(drag){
            if(x>=0){
                x=0;
                drag=false;
            }else if(x<=-last_left){
                x=-last_left;
                drag=false;
            }


            $(this).css({
                left:x
            });
        }


    })
}
mouseD();
mouseU();
mouseM();



});

