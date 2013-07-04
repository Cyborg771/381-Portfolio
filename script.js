document.ready = function() {
    var $design_titles = ["", "game", "graphic", "web", "ux"];
    //var $design_widths = [0, 104, 158, 81, 49];
    var $design_colours = ["#777", "#A40104", "#147CC8", "#39AA50", "#CA7100"];
    var $highlit_title = 0;
    var $selected_title = 0;
    var $current_projects;
    var $animSpeed = 300;
    var $fadingIn = false;
    
    $hash = $(location).attr('href').split("#")[1];
    if ($hash != null){
        
        $selected_title = $design_titles.indexOf($hash);
        $highlit_title = $selected_title;
        $current_projects = "."+$design_titles[$selected_title]+"-project";
        
        changeTitle($selected_title, 0);
        changeHeader($selected_title, 0);
        changeProjects(0);
    }
    
    $('.cat').mouseover(function(){
        $('.animated').stop();
        $highlit_title = $(this).attr('id').split('-')[1];
        changeTitle($highlit_title, $animSpeed);
    });
    
    $('#categories').mouseleave(function(){
        $highlit_title = $selected_title;
        if ($highlit_title == -1) {
            changeTitle(0, $animSpeed);
        }
        else {
            changeTitle($selected_title, $animSpeed);
        }
    });
    
    $('.cat').click(function(){
        $selected_title = $(this).attr('id').split('-')[1];
        if ($current_projects != null) {
            $($current_projects).each(function(){
                $(this).stop();
            });
            $($current_projects).fadeOut($animSpeed, function(){ changeProjects($animSpeed); });
        }
        else {
            changeProjects($animSpeed);
        }
    });
    
    function changeTitle(i, speed){
        $('.animated').stop();
        if (i == 0) $('#design-title').hide();
        else $('#design-title').show();
        $('#design-title').html($design_titles[i%$design_titles.length]);
        $('#design-title').animate({color : $design_colours[i%$design_titles.length]}, speed);
    }
    
    function changeHeader(i, speed){
        $('.animated').stop();
        $('.h-link').animate({color : $design_colours[i%$design_titles.length]}, speed);
        $('header').animate({ backgroundColor: $design_colours[i%$design_titles.length]}, speed);
    }
    
    function changeProjects(speed){
        $current_projects = "."+$design_titles[$selected_title]+"-project";
        if (speed == 0) {
            $($current_projects).each(function(){
                $(this).show();
            });
        }
        else {
            var i = 0;
            $($current_projects).each(function(){
                $(this).delay(i*50).fadeIn(speed);
                i+=1;
            });
        }
        changeHeader($selected_title, speed);
    }
    
/*--------------------*\
    SCROLLING
\*--------------------*/
    
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
}