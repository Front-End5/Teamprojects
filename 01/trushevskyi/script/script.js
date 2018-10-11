$(document).ready(function(){
    console.log("wwqewq");
    $(".swiper-pagination-bullet").on("click",function(){
        $(".swiper-pagination-bullet").css("width: 18px,height: 18px,background-color: #158483,border: 2px solid #158483,opacity: 1,border-radius: 0;");
        $(".swiper-pagination-bullet-active").css("background-color: white,border: 2px solid #158483,border-radius: 2px;");
    });
    if(!$.contains(".first-slide",".swiper-slide")){
        console.log("wwqewq");
        $(".swiper-pagination-bullet").css("width: 18px,height: 18px,background-color: #158483,border: 2px solid #158483,opacity: 1,border-radius: 0;");
        $(".swiper-pagination-bullet-active").css("background-color: white,border: 2px solid #158483,border-radius: 2px;");
    }
    else{
        console.log("jopa");
        $(".swiper-pagination-bullet").css("width: 18px,height: 18px,background-color: black, border: 2px solid black,opacity: 1,border-radius: 50%;");
        $(".swiper-pagination-bullet-active").css("background-color: white,border: 2px solid black,border-radius: 50%;");
    }
});