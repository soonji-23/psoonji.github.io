$(document).ready(function(){
    var $header="header.html"
    $.ajax({
        type:"GET",
        url:$header,
        dataType:"html",
        success:function(html){
            $("header").html(html)

        },
        error:function(xhr, status, error){
            alert(error);
        }
    })
    var $footer="footer.html"
    $.ajax({
        type:"GET",
        url:$footer,
        dataType:"html",
        success:function(html){
            $("footer").html(html)

        },
        error:function(xhr, status, error){
            alert(error);
        }
    })
})