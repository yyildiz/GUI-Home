$(".proj").hover(function() {
     var header = $(this).find(".headers");
     var description = header.find(".long-description");
     var btn = header.find(".btn");
     header.removeClass("regular-header");
     description.removeClass("hide");
     btn.removeClass("hide");
     btn.addClass("show");
     description.addClass("show");
     header.addClass("fullsize-header");
},
                function() {
    var header = $(this).find(".headers");
    var description = header.find(".long-description");
    var btn = header.find(".btn")
    header.removeClass("fullsize-header");
    description.removeClass("show");
    btn.removeClass("show");
    btn.addClass("hide");
    description.addClass("hide");
    header.addClass("regular-header");
    
});
$(".proj").toggleClass("animate-projects");
var previous;
var getRandom = function() {
    return Math.floor((Math.random() * 6) + 1);
}
var f = function() {
    $(".proj").removeClass("shake")
    var n = getRandom();
    var currentChild = $(".proj:nth-child(" + n + ")")
    $(".proj").removeClass("animate-projects");
    currentChild.addClass("shake");
    
    
}
setInterval(f, 3000)