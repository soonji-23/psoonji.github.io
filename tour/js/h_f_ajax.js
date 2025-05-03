$(document).ready(function(){
    var headerURL="header.html";
    $.ajax({
        type:"GET",
        url:headerURL,
        dataType:"html",
        success:function(html){
            $("header").html(html);
        },
        error:function(xhr, ststus, error){
            alert(error);
        }
    });

    var footerURL="footer.html";
    $.ajax({
        type:"GET",
        url:footerURL,
        dataType:"html",
        success:function(html){
            $("footer").html(html);
        },
        error:function(xhr, ststus, error){
            alert(error);
        }
    });
})