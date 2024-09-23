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