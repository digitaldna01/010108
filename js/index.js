const birthdate = 010108;

// password page

// pw_input id에 있는 값을 가져와 inputpw에 저장한다.
var inputpw = document.getElementById("pw_input");

function falsepw(){
    var x = document.getElementById("pw_input");
    x.style.border = "2px solid #EF2222"; 
}

function enterkey() {
	if (window.event.keyCode == 13) {
	    if(inputpw.value == birthdate){
            var x = document.getElementById("lock");
            var y = document.getElementById("cover");
            x.style.display = "none";
            y.style.display = "block";
        }else{
            falsepw();
        }
    }
}

$(document)