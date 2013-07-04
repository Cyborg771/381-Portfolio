document.ready = function() {
    var $design_titles = ["game", "graphic", "web", "ux", ""];
    //var $design_widths = [104, 158, 81, 49];
    var $design_colours = ["#A40104", "#147CC8", "#39AA50", "#CA7100", "#777"];
    var $highlit_title = -1;
    var $selected_title = -1;
    var $current_projects = "";
    var $animSpeed = 300;
    var $fadingIn = false;
    
    $hash = $(location).attr('href').split("#")[1];
    if ($hash != null){
        $selected_title = $design_titles.indexOf($hash);
        $highlit_title = $selected_title;
        $('#design-title').show();
        $('#design-title').html($design_titles[$highlit_title%$design_titles.length]);
        $('#design-title').animate({color : $design_colours[$highlit_title%$design_titles.length]}, 0);
        $('.h-link').animate({color : $design_colours[$highlit_title%$design_titles.length]}, 0);
        $('header').animate({backgroundColor : $design_colours[$highlit_title%$design_titles.length]}, 0);
        $current_projects = "#"+$design_titles[$selected_title]+"-projects";
        $($current_projects).fadeIn(0);
    }
    
    $('.cat').mouseover(function(){
        $('.animated').stop();
        $highlit_title = $(this).attr('id').split('-')[1];
        $('#design-title').show();
        $('#design-title').html($design_titles[$highlit_title%$design_titles.length]);
        $('#design-title').animate({color : $design_colours[$highlit_title%$design_titles.length]}, $animSpeed);
    });
    
    $('#categories').mouseleave(function(){
        $('.animated').stop();
        $highlit_title = $selected_title;
        if ($highlit_title == -1) {
            $('#design-title').hide();
            $('#design-title').html("");
            $('#design-title').animate({width : 0}, $animSpeed);
            $('.h-link').animate({color : "#999"}, $animSpeed);
            $('header').animate({ backgroundColor: "#999"}, $animSpeed);
        }
        else {
            $('#design-title').html($design_titles[$selected_title%$design_titles.length]);
            $('#design-title').animate({color : $design_colours[$selected_title%$design_titles.length]}, $animSpeed);
            $('.h-link').animate({color : $design_colours[$selected_title%$design_titles.length]}, $animSpeed);
            $('header').animate({ backgroundColor: $design_colours[$selected_title%$design_titles.length]}, $animSpeed);
        }
    });
    
    $('.cat').click(function(){
        //$('.animated').stop();
        changeCat(0);
        $selected_title = $(this).attr('id').split('-')[1];
        $($current_projects).fadeOut($animSpeed);
        $current_projects = "#"+$design_titles[$selected_title]+"-projects";
        $($current_projects).delay($animSpeed).fadeIn($animSpeed);
        $('header').delay($animSpeed).animate({backgroundColor : $design_colours[$selected_title%$design_titles.length]}, $animSpeed);
        $('.h-link').delay($animSpeed).animate({color : $design_colours[$selected_title%$design_titles.length]}, $animSpeed);
    });
    
    $('#top-link').click(function(){
        $fadingIn = false;
        $('body,html').animate({scrollTop:0},$animSpeed);
    });
    
    $(document).scroll(function(){
        if ($(document).scrollTop() <= 180 && $fadingIn){
            $fadingIn = false;
            $('#to-top').stop();
            $('#to-top').fadeTo($animSpeed, 0);
        }
        else if ($(document).scrollTop() > 180 && !$fadingIn) {
            $fadingIn = true;
            $('#to-top').stop();
            $('#to-top').fadeTo($animSpeed, 0.6);
        }
    });
    
    function changeCat(i){
        
    }
}