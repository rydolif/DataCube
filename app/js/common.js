$(function() {

$(".preloader").delay(1000).fadeOut();

//------------------------------гамбургер-----------------------------
$('.hamburger--3dx').click(function() {
  $(this).toggleClass('is-active');
  $('nav').toggleClass('nav-active');
  $('header').toggleClass('header-menu');
});

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//------------------------------------form-------------------------------------------
// 	$('input[type="tel"]').mask('+0 (000) 000-00-00');

// 	jQuery.validator.addMethod("phoneno", function(phone_number, element) {
// 	   return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
// 	}, "Введите Ваш телефон");

//   $(".question").validate({
//     messages: {
//       name: "Введите ваше Имя",
//       phone: "Введите ваш телефон",
//     },
//     rules: {
//       "phone": {
//         required: true,
//         phoneno: true
//       }
//     },
//     submitHandler: function(form) {
//       var t = {
//         name: jQuery(".question").find("input[name=name]").val(),
//         phone: jQuery(".question").find("input[name=phone]").val(),
//         subject: jQuery(".question").find("input[name=subject]").val()
//       };
//       ajaxSend('.question', t);
//     }
//   });



//   function ajaxSend(formName, data) {
//     jQuery.ajax({
//       type: "POST",
//       url: "sendmail.php",
//       data: data,
//       success: function() {
//         $(".modal").popup("hide");
//         $("#thanks").popup("show");
//         setTimeout(function() {
//           $(formName).trigger('reset');
//         }, 2000);
//       }
//     });
//   }

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>50){
          $('.header').addClass('header-active');
      }
      else if ($(this).scrollTop()<50){
          $('.header').removeClass('header-active');
      }
  });

});
