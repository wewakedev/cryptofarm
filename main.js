function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
  
    for (var i = 0; i < text1.length; i++) {
      if (checkBox.checked == true) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      } else if (checkBox.checked == false) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      }
    }
  }
  check();
  

//   (function($) {
//     $.fn.countTo = function(options) {
//         // merge the default plugin settings with the custom options
//         options = $.extend({}, $.fn.countTo.defaults, options || {});

//         // how many times to update the value, and how much to increment the value on each update
//         var loops = Math.ceil(options.speed / options.refreshInterval),
//             increment = (options.to - options.from) / loops;

//         return $(this).each(function() {
//             var _this = this,
//                 loopCount = 0,
//                 value = options.from,
//                 interval = setInterval(updateTimer, options.refreshInterval);

//             function updateTimer() {
//                 value += increment;
//                 loopCount++;
//                 $(_this).html(value.toFixed(options.decimals));

//                 if (typeof(options.onUpdate) == 'function') {
//                     options.onUpdate.call(_this, value);
//                 }

//                 if (loopCount >= loops) {
//                     clearInterval(interval);
//                     value = options.to;

//                     if (typeof(options.onComplete) == 'function') {
//                         options.onComplete.call(_this, value);
//                     }
//                 }
//             }
//         });
//     };

//     $.fn.countTo.defaults = {
//         from: 0,  // the number the element should start at
//         to: 100,  // the number the element should end at
//         speed: 1000,  // how long it should take to count between the target numbers
//         refreshInterval: 100,  // how often the element should be updated
//         decimals: 7,  // the number of decimal places to show
//         onUpdate: null,  // callback method for every time the element is updated,
//         onComplete: null,  // callback method for when the element finishes updating
//     };
// })(jQuery);

// jQuery(function($) {
//         $('.timer').countTo({
//             from: 0.0002982,
//             to: 2,
//             speed:  999999*9800,
//             refreshInterval: 50,
//             onComplete: function(value) {
//                 console.debug(this);
//             }
//         });
//     });



    //Email Validation

    $(document).ready(function() {
      var input = $('.inputemail');
      var result = $('.emailval');
              var regExpression = /\b[a-zA-Z0-9\u00C0-\u017F._%+-]+@[a-zA-Z0-9\u00C0-\u017F.-]+\.[a-zA-Z]{2,}\b/;
          
            $('.submit').click(function(){
                var isValid = regExpression.test(input.val());
                if (isValid)
                    result.html('<span style="color:green;">We have sent you a Confirmation mail</span>');
                 else
                    result.html('<span style="color:red;">Please Enter Valid Email</span>');
      
            });
      
      });

