/* global $ */

// Ailee's birthdate
const birthdate = 010108;
/* counting down */
const config = {
  birthdate: 'Dec 1, 2021',
  name: 'Ailee'
};

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
  
const confettiSettings = { target: 'confetti' };
const confetti = new window.ConfettiGenerator(confettiSettings);
confetti.render();

let countDown = new Date(`${config.birthdate} 00:00:00`).getTime();
var x = setInterval(function() {
  let now = new Date().getTime(),
  distance = countDown - now;

  document.getElementById('day').innerText = Math.floor(distance / day);
  document.getElementById('hour').innerText = Math.floor((distance % day) / hour);
  document.getElementById('minute').innerText = Math.floor((distance % hour) / minute);
  document.getElementById('second').innerText = Math.floor((distance % minute) / second);
  
  if(distance > 0){
      $("#curtain").show();
      $("#lock").hide();
  }else{
      $("#curtain").hide();
      $("#lock").show();
      clearInterval(x);
  }
}, second);  
  
  
// password page

//nav link
function gallery(){
    for(var i=0; i <4; i++){
        
    }
}



$(document).ready(function() {

    // id 로 input 객체를 가져온다. 
    var inputpw = document.getElementById("pw");

    inputpw.addEventListener('keypress', function(key) {
        // key.key 의 값이 Enter 일 경우 코드 실행 
        // key.keyCode == 13 도 동일한 기능을 한다. 
        if (key.key == 'Enter') {
            var inputValue = inputpw.value;
            if (inputValue == birthdate) {
                $("#lock").toggle();
                $("#unlock").toggle();
            }
            else {
                $("#pw").addClass('blink');
                setTimeout(function() {
                    $("#pw").removeClass('blink');
                }, 2000);
            }
        }
    })


});
