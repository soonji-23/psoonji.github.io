$(document).ready(function(){
    var navBool=true;
    $(".n-bt").click(function(){
        if(navBool){
            $(".line-top").addClass("active");
            $(".line-bottom").addClass("active");
            $(".nav-list-wrap").fadeIn()
            navBool=false;
        }else{
            $(".line-top").removeClass("active");
            $(".line-bottom").removeClass("active");
            $(".nav-list-wrap").fadeOut();
            navBool=true;
        }
    });
})