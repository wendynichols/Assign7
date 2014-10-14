
// $('.moving').click(function() {
//   console.log('click');
//    $('section').removeClass('moving');
//    $(this).addClass('section');
// });

$('h2').on('click',function(){
  $('span').addClass('hide');
  $(this).next().find('span').removeClass ('hide');
  $(this).next().find('span').addClass('appear');
});
