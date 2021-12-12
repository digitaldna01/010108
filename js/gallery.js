/* global $ */

function hover(element) {
    element.setAttribute('src', 'source/photos/hs_cover_alt.png');
}

function unhover(element) {
    element.setAttribute('src', 'source/photos/hs_cover.png');
}





$(document).ready(function() {
var currentPosition = parseInt($("#navi").css("top"));
    $(window).scroll(function() {
        var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
        $("#navi").stop().animate({ "top": position + currentPosition + "px" }, 400);
    });

    var link = $('#navi a.box');
    link.on('click', function(e) {
        var target = $($(this).attr('href'));

        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);

        $(this).addClass('active');

        e.preventDefault();
    });

    $(window).on('scroll', function() {
        findPosition();
    });

    function findPosition() {
        $('section').each(function() {
            if (($(this).offset().top - $(window).scrollTop()) < 20) {
                link.removeClass('active');
                $('#navi').find('[data-scroll="' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    }

    findPosition();

    var label1 = $('#radio-1').next();
    label1.css('color', "#1A5B95");
    
    $('#radio-line1').css('background-color', "#1A5B95");
    
    $('input:radio[name="movie-radio"]').change(function() { //name = button group name

        $('input:radio[name="movie-radio"]').each(function() {
            var value = $(this).val(); // value
            var checked = $(this).prop('checked'); // jQuery 1.6 이상 (jQuery 1.6 미만에는 prop()가 없음, checked, selected, disabled는 꼭 prop()를 써야함)
            // var checked = $(this).attr('checked');   // jQuery 1.6 미만 (jQuery 1.6 이상에서는 checked, undefined로 return됨)
            // var checked = $(this).is('checked');
            var $label = $(this).next();
            var id = $(this).attr("data-role");

            if (checked) {
                $label.css('color', "#1A5B95");
                $('#' + id).css('background-color', "#1A5B95");
            }
            else {
                $label.css('color', '#8B8B8B');
                $('#' + id).css('background-color', '#8B8B8B');
            }
        });

        if (this.value == "0") {
            $("#video").attr( //image file name
                'src', 'source/videos/movie_1.mp4' //image path
            );


        }
        else if (this.value == "1") {
            $("#video").attr( //image file name
                'src', 'source/videos/movie_2.mp4' //image path
            );


        }
        else if(this.value == "2") {
            $("#video").attr( //image file name
                'src', 'source/videos/movie_3.mp4' //image path             
            );


        }
    });


});
