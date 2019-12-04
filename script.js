$(document).ready(function(){
    $(".txt").html(function(index,oldHtml){
        var effectArray = $(this).attr("data-effect"); 
        var split = oldHtml.split("");
        var text = ""; 
        split.forEach(function(currentItem,index){
            text+="<span class='"+effectArray+"'>"+currentItem+"</span>";
        });
        return text;
    });

    $(".txt").toArray().forEach(function(currentItem){
        var delay = $(currentItem).attr("data-delay");

        $(currentItem).find("span").each(function(index){
            $(this).css("animationDelay",delay*index+"s");
        });
    });
});