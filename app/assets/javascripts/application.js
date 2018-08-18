/*global $*/
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require popper
//= require bootstrap-sprockets
//= require jquery_ujs
//= require home
//= require turbolinks
//= require_tree .

// index
// 검색 폼 텍스트 입력 시 호출
// $( document ).ready(function() {
//     $("#search").on("keyup", function() {
//         changeColor();
//     });
// });

// function changeColor() {
//     var textLength = $("#search").val().length;
//     if(textLength == 1) {
//         console.log(textLength);
//         $(".icons-container").animate({color: "#CC5818"});
//     }else if(textLength == 0) {
//         $(".icons-container").animate({color: "#CFD0D2"});  
//     }
// }
