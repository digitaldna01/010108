/* global $ */




$(document).ready(function(){
    
    
    
    $("#movie-radio.form-check-input").click(function(){
        for (var i=0; i<3; i++) {
            if (document.getElementsByName("flexRadioDefault")[i].checked == true) {
                $("#video").addClass(".movie-content")
                $("#video")[i].removeClass(".movie-content");
            }
        }
    })
});
