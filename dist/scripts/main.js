
$('.content2').css("display","none");
$('.content3').css("display","none");


$('.header1').click(function(){
  $('.content1').css("display","block");
  $('.content2').css("display","none");
  $('.content3').css("display","none");
    });
$('.header2').click(function(){
  $('.content2').css("display","block");
  $('.content1').css("display","none");
  $('.content3').css("display","none");
    });
$('.header3').click(function(){
  $('.content3').css("display","block");
  $('.content1').css("display","none");
  $('.content2').css("display","none");
    });
