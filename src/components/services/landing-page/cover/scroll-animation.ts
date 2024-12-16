import $ from 'jquery'

export function animation() {
    window.addEventListener("scroll", (e: any) => {
        let height = $(window).height() ?? 0;
        let topMargin = $(window).scrollTop() ?? 0
        let animateDivHeight = $("#animationDiv").outerHeight() ?? 0
        let animateDiv = $("#animationDiv").offset()?.top;
        animateDiv = (animateDiv ?? 0) - topMargin
        let divHeightInViewPort = height - (animateDiv + animateDivHeight)
        if (divHeightInViewPort > 0) {
            divHeightInViewPort = (divHeightInViewPort / height) * 100;
            let percentage = divHeightInViewPort > 70 ? 70 : divHeightInViewPort;
            $(".animate-top").css("top", `${percentage}%`)
            $(".animate-bottom").css("bottom", `${percentage}%`)
        }
    })
}
export function animateBottom() {
    window.addEventListener("scroll", (e: any) => {
        let height = $(window).height() ?? 0;
        let topMargin = $(window).scrollTop() ?? 0
        let animateDivHeight = $("#animateBottom").outerHeight() ?? 0
        let animateDiv = $("#animateBottom").offset()?.top;
        // console.log(height, topMargin, animateDivHeight, animateDiv)
        // 876 6488 549.375 7774.6875
        animateDiv = (animateDiv ?? 0) - topMargin
        let divHeightInViewPort = height - (animateDiv + animateDivHeight + 200)
        if (divHeightInViewPort > 0) {
            divHeightInViewPort = (divHeightInViewPort / height) * 100;
            let percentage = divHeightInViewPort > 20 ? 20 : divHeightInViewPort;
            // console.log(percentage)
            $(".animate-top").css("top", `${percentage}%`)
            $(".animate-bottom").css("bottom", `${percentage}%`)
        }
    })
}