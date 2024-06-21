$(".icon").each(function (parms) {
    $(this).hover(function () {
        $(this).parent().children(".content").slideDown(400)
    }, function () {
        $(this).parent().children(".content").slideUp(1)
    })
})

// header-fiw
$(window).scroll(function () {
    if (window.scrollY >= 100) {
        $(".header-fix").css("display", "flex")
    } else {
        $(".header-fix").css("display", "none")
    }
})