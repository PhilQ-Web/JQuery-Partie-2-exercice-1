$(document).ready(function(){
    $("img").hover(
        function(){$(this).css("height", "400px");},
        function(){$(this).css("height", "200px");}
    );
});

    //Identique à : 

    // $("img").mouseenter(function(){
    //     $(this).css("height", "400px");
    // });

    // $("img").mouseleave(function(){
    //     $(this).css("height", "200px");
    // });
    


