document.ready = function() {
    
    var $design_titles = ["", "game", "graphic", "web", "ux"];
    //var $design_widths = [0, 104, 158, 81, 49];
    var $design_colours = ["#777", "#A40104", "#147CC8", "#39AA50", "#CA7100"];
    var $highlit_title = 0;
    var $selected_title = 0;
    var $current_category;
    var $current_project;
    var $animSpeed = 500;
    var $fadingIn = false;
    
/*--------------------*\
    CATEGORIES
\*--------------------*/
    
    $hash = $(location).attr('href').split("#");
    if ($hash[1] != null){
        
        $selected_title = $design_titles.indexOf($hash[1]);
        $highlit_title = $selected_title;
        $current_category = "."+$design_titles[$selected_title]+"-project";
        
        changeTitle($selected_title, 0);
        changeHeader($selected_title, 0);
        changeCategory(0);
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
        if ($current_project != null) {
            hideProject();
        }
        if ($selected_title != $highlit_title) {
            $selected_title = $(this).attr('id').split('-')[1];
            if ($current_category != null) {
                $($current_category).stop();
                $($current_category).fadeOut($animSpeed);
                setTimeout(function(){ changeCategory($animSpeed); } , $animSpeed);
            }
            else {
                changeCategory($animSpeed);
            }
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
    
    function changeCategory(speed){
        $($current_category).hide();
        $current_category = "."+$design_titles[$selected_title]+"-project";
        if (speed == 0) {
            $($current_category).show();
        }
        else {
            var i = 0;
            $($current_category).each(function(){
                $(this).show();
                $(this).css({"opacity":"0", "top":"50px"});
                $(this).delay(i*120).animate({opacity:1, top:0}, speed, 'easeInOutSine');
                i+=1;
            });
        }
        changeHeader($selected_title, speed);
    }

/*--------------------*\
    PROJECTS
\*--------------------*/
    
    $('.project-link').click(function(){
        $current_project = $(this).attr('href').split("#")[2];
        changeProject($animSpeed);
    });
    
    $('.close-project').click(function(){
        hideProject();
    });
    
    function changeProject(speed){
        $('.project-list').fadeOut(speed, function(){
            $('#'+$current_project).fadeIn(speed);
        });
    }
    
    function hideProject() {
        $('#'+$current_project).fadeOut($animSpeed, function(){
            $('.project-list').show();
            changeCategory($animSpeed);
            $current_project = null;
        });
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