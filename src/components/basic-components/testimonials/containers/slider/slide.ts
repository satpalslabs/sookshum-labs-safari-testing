import $ from "jquery";

export async function slide() {
    let slider = $("#testimonials-slider");
    let transitionDuration = parseFloat(slider.css("transition-duration")) || 0;

    // Convert the transition duration from seconds to milliseconds
    let duration = transitionDuration > 0 ? transitionDuration * 1000 : 0;
    // Clone all children and append them to the slider (for infinite loop effect)

    while (true) {
        await new Promise((resolve) => {
            const firstDiv = $(slider.children()[0]);
            const outerWidth = firstDiv.outerWidth() || 0;
            const margin = parseFloat(slider.css("gap")) || 0;
            const translateXValue = -(outerWidth + margin) * (0 + 1);

            // Apply the transition to slide
            slider.css({
                "transition-duration": `${transitionDuration}s`,
                "transform": `translateX(${translateXValue}px)`
            });

            // Wait for the transition to complete
            setTimeout(() => {
                firstDiv.remove()
                slider.css({
                    "transition-duration": "0ms",
                    "transform": "translateX(0px)",
                })
                slider.append($(firstDiv))
                resolve("")
            }, duration);
        });
    }
}


