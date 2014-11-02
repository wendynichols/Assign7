// $(function(){
//
//   function animation(elem,options){
//     elem.stop().animate(options,{
//     duration: 1000,
//     specialEasing: {
//       width: "linear",
//       height: "easeOutBounce"
//     }},200);
//   }
//
//   $(".accordion").on("click",".section",function(e){
//       e.preventDefault();
//       var current = $(this).next(".content");
//     animation($(this).parent().children(".content").not(current),{
//       "height":"0px"
//     });
//     animation(current,{
//       "height":"100px"
//     });
//   });
// });


$("section").click(function(){
  $("section").removeClass("sec1")
  $(this).addClass("sec1");
});
