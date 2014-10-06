


$("h1").click( function() {
  $('div.content').addClass('open');

});



$('h1.one').click( function() {
  $('div.two').addClass('off').removeClass('on');
  $('div.three').addClass('off').removeClass('on');
  $('div.one').removeClass('off').addClass('on');
});
$('h1.two').click( function() {
  $('div.three').addClass('off').removeClass('on');
  $('div.one').addClass('off').removeClass('on');
  $('div.two').removeClass('off').addClass('on');
});
$('h1.three').click( function() {
  $('div.one').addClass('off').removeClass('on');
  $('div.two').addClass('off').removeClass('on');
  $('div.three').removeClass('off').addClass('on');
});
