/* global $ */

const birthdate = 010108;

// password page



function falsepw() {
    var x = document.getElementById("pw_input");
    x.style.border = "2px solid #EF2222";
}
/*  
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
    */

function enterkey() {
	if (window.event.keyCode == 13) {
    	// 엔터키가 눌렸을 때
    	var inputpw = document.querySelector("#pw").value;
        if(inputpw == birthdate){
            $("#lock").hide();
            $("#unlock").show();
        }else{
            
        }
    }
}

$(document).ready(function() {
    $("#unlock").hide();
    
    /*
    if (window.event.keyCode == 13) {
        // pw_input id에 있는 값을 가져와 inputpw에 저장한다.
        var inputpw = document.getElementById("#pw").value;
        alert("please");
    }
    */
});
