$(function(){
    // 메뉴
    $(".menu").hover(function(){
        $(".menu ul").stop().slideDown('fast')
    },
    function(){
        $(".menu ul").stop().slideUp('fast')
    })
    
    // 탭
    $(".tab_title p").click(function(){
        $(".tab_title p").removeClass("on")
        $(this).addClass("on")

        $(".tab_contents ul").css('display', 'none')
        $(".tab_contents ul").eq($(this).index()).css('display', 'block')
    })

    // 슬라이드
    setInterval(function(){
        $(".slide").animate({top:-300}, function(){
            $(".slide a:first").appendTo($(".slide"))
            $(".slide").css('top',0)
        })
    },3000)

    // 모달
    $(".notice li a:first").click(function(){
        $(".modal").addClass("active")
    })
    $(".modal .close").click(function(){
        $(".modal").removeClass("active")
    })
})