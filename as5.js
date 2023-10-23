$(document).ready(function () {
    var video1 = $("#video1")[0];
    var video2 = $("#video2")[0];
    var video1_pos = $("#v1frame").offset().top;
    var video2_pos = $("#v2frame").offset().top;
    var video1_end = video1_pos + $("#v1frame").outerHeight();
    var video2_end = video2_pos + $("#v2frame").outerHeight();
    
    var lastScrollTop = 0;
    
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        var scrollDirection = (scrolled > lastScrollTop) ? "down" : "up";
        
        if (scrolled >= video1_pos && scrolled <= video1_end) {
            if (scrollDirection === "down") {
                // 滚动向下时增加视频的 currentTime
                video1.currentTime += 0.1; // 根据需要调整增量
            } else if (scrollDirection === "up") {
                // 滚动向上时减小视频的 currentTime
                video1.currentTime -= 0.1; // 根据需要调整增量
            }
        }

        if (scrolled >= video2_pos && scrolled <= video2_end) {
            if (scrollDirection === "down") {
                video2.currentTime += 0.1;
            } else if (scrollDirection === "up") {
                video2.currentTime -= 0.1;
            }
        }
        
        lastScrollTop = scrolled;
    });
});

