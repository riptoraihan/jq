//alert sms sytem
$(document).ready(function(){

       alert("welcome to my new page");

});

//btn click sms
$(document).ready(function(){

       $('#blr').click(function(){
              alert("welcome to click button");
       });

});
//img hide and show 
$(document).ready(function(){

       //hide
       $('#hide-btn').click(function(){
              $('img').hide();
       });
       //show
       $('#show-btn').click(function(){
              $('img').show();
       });


});

//Toggle
$(document).ready(function(){

       //hide
       $('#show-hide').click(function(){
              $('img').toggle();
       });

});
//Toggle 1
$(document).ready(function(){

       //hide
       $('#show1').click(function(){
              $('img').toggle("fast");
       });

});
//Toggle 2
$(document).ready(function(){

       //hide
       $('#show2').click(function(){
              $('img').toggle("slow");
       });

});
//Toggle 3
$(document).ready(function(){

       //hide
       $('#show3').click(function(){
              $('img').toggle(2000);
       });

});
//Toggle 4
$(document).ready(function(){

       //hide
       $('#show4').click(function(){
              $('img').toggle(4000);
       });

});

//q-sl
$(document).ready(function(){

      $('.pp').click(function(){
       $('.lp').slideToggle(1000);
      });

});
