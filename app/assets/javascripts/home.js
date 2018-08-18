/*global $*/
// index
// 검색 폼 텍스트 입력 시 호출
$(document).ready(function() {
    $("#search").on("keyup", function() {
        changeColor();
    });
});


function changeColor() {
    var textLength = $("#search").val().length;
    if(textLength == 1) {
        console.log(textLength);
        $(".icons-container").animate({color: "#CC5818"});
    }else if(textLength == 0) {
        $(".icons-container").animate({color: "#CFD0D2"});        
    }
}