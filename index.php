<!DOCTYPE html>
<html lang="en">
    <?php include 'head.php' ?>
    <body>
        <?php include 'header.php' ?>
        <section id="welcome">
            <div id="p1"><span id="l1">Hey, my</span><span id="l2">name is</span></div>
            <div id="p2">Scott Inglis</div>
            <div id="p3">&amp;</div>
            <div id="p4">I am a <span id="design-title" class="animated"></span> Designer</div>
        </section>
        <section id="categories">
            <ul>
                <a href="#game"><li class="cat button" id="cat-1"><span class="cat-title">Game</span></li></a>
                <a href="#graphic"><li class="cat button" id="cat-2"><span class="cat-title">Graphic</span></li></a>
                <a href="#web"><li class="cat button" id="cat-3"><span class="cat-title">Web</span></li></a>
                <a href="#ux"><li class="cat button" id="cat-4"><span class="cat-title">UX</span></li></a>
            </ul>
        </section>
        <section id="main">
            <?php include 'projects/game-projects.php' ?>
            <?php include 'projects/graphic-projects.php' ?>
            <?php include 'projects/web-projects.php' ?>
            <?php include 'projects/ux-projects.php' ?>
        </section>
    </body>
</html>