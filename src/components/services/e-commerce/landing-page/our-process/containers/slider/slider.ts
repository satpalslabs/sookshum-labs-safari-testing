import $ from 'jquery';

let isDown = false;
let startX: number;
let scrollLeft: number;
let isDragging = false;
// Ensure the code only runs on the client side
if (typeof window !== 'undefined') {
   $(document).ready(function () {
        let sliderContainer = $('.Slider');
        if (sliderContainer.length) {
            // Mouse events
            sliderContainer[0].addEventListener("mousedown", start, { passive: true });
            sliderContainer[0].addEventListener("mousemove", move, { passive: false });
            sliderContainer.on("mouseup", end);
            sliderContainer.on("mouseleave", end);

            // Touch events
            sliderContainer[0].addEventListener("touchstart", start, { passive: false });
            sliderContainer[0].addEventListener("touchmove", move, { passive: false });
            sliderContainer.on("touchend", end);
            sliderContainer.on("touchcancel", end);
        }
    });
}


// Function to run the slider to a specific slide
export function runSlider(clickedDivIndex: number) {
    const $slider = $(".Slider");
    const $main = $(".Main");
    const $sliderElements = $slider.children();
    const sliderWidth = $slider.outerWidth() ?? 0;
    const mainWidth = $main.outerWidth() ?? 0;
    const centerSlider = mainWidth / 2;

    // Use getBoundingClientRect() for more accurate positioning in Safari
    const $clickedDiv = $($sliderElements[clickedDivIndex]);
    const leftClickedDiv = $clickedDiv[0].getBoundingClientRect().left - $slider[0].getBoundingClientRect().left;
    const centerClickedDiv = ($clickedDiv[0].getBoundingClientRect().width ?? 0) / 2;
    const rightFromCenter = sliderWidth - leftClickedDiv;
    let translateValue: number;

    DisableArrow(clickedDivIndex);

    // Determine translate value based on the slide position
    if (rightFromCenter > centerSlider) {
        if ((centerClickedDiv + leftClickedDiv) > centerSlider) {
            translateValue = centerSlider - (leftClickedDiv + centerClickedDiv);
        } else {
            translateValue = 0;
        }
    } else {
        translateValue = mainWidth - sliderWidth;
    }

    // Round the translateX value to avoid fractional pixels
    $slider.css("transform", `translateX(${Math.round(translateValue)}px)`);

    // Update active slide and UI elements
    $sliderElements.each((index, el) => {
        const $el = $(el);
        const $circleClickedDiv = $el.find(".circle");
        const $innerDiv = $circleClickedDiv.find(".rounded-full");
        const $dot = $($(".sliderDots").children()[index]);

        if (index === clickedDivIndex) {
            $el.addClass("active-slider-item");
            $circleClickedDiv.removeClass("SliderCircle").addClass("border-[3px] !border-solid !border-primary");
            $innerDiv.addClass('bg-primary scale-[1]').removeClass('scale-0');
            $dot.addClass('bg-primary').removeClass('bg-innerContainer');

            if (index === ($sliderElements.length - 1)) {
                $(".rocket").removeClass("scale-0").addClass("block scale-[1.4] duration-300");
                setTimeout(() => {
                    $(".rocket").removeClass("scale-[1.4]").addClass("block scale-[1]");
                }, 150)
            } else {
                $(".rocket").removeClass("scale-[1]").addClass("scale-0");
            }
        } else {
            $el.removeClass("active-slider-item");
            $circleClickedDiv.addClass("SliderCircle").removeClass("border-[3px] !border-solid !border-primary");
            $innerDiv.removeClass('bg-primary scale-[1]').addClass('scale-0');
            $dot.addClass('bg-innerContainer').removeClass('bg-primary');
            $(".rocket").removeClass("block").addClass("scale-0");
        }
    });
}

// Function to move to the next slide
export function nextCard() {
    const $slider = $('.Slider');
    const $activeContainer = $('.Slider .active-slider-item').index();
    const $sliderElements = $slider.children();
    if ($activeContainer + 1 < $sliderElements.length) {
        runSlider($activeContainer + 1);
    }
    DisableArrow($activeContainer + 1);
}

// Function to move to the previous slide
export function prevCard() {
    const $activeContainer = $('.Slider .active-slider-item').index();
    $(".slider-next-arrow").removeClass("text-[#777E90]").addClass("text-white");
    if ($activeContainer > 0) {
        runSlider($activeContainer - 1);
    }
    DisableArrow($activeContainer - 1);
}

// Function to disable arrows based on the active slide
function DisableArrow(ind: number) {
    const $slider = $('.Slider');
    const $sliderElements = $slider.children();
    if (ind <= 0) {
        $(".slider-prev-arrow").removeClass("text-white").addClass("text-[#777E90]");
        $(".slider-next-arrow").removeClass("text-[#777E90]").addClass("text-white");
    } else if (ind >= $sliderElements.length - 1) {
        $(".slider-next-arrow").removeClass("text-white").addClass("text-[#777E90]");
        $(".slider-prev-arrow").removeClass("text-[#777E90]").addClass("text-white");
    } else {
        $(".slider-prev-arrow").removeClass("text-[#777E90]").addClass("text-white");
        $(".slider-next-arrow").removeClass("text-[#777E90]").addClass("text-white");
    }
}

// Function to start dragging
function start(e: any) {
    e.preventDefault(); // Prevent default scrolling on touch devices
    isDown = true;
    isDragging = false;
    const slider = $(`.Slider`);
    slider.addClass("active");

    startX = e.touches && e.touches.length > 0 ? e.touches[0].pageX : e.pageX;
    scrollLeft = parseInt(slider.css('transform').split(',')[4]?.trim() || "0", 10);
}

function move(e: any) {
    if (!isDown) return;
    e.preventDefault();
    isDragging = true;
    requestAnimationFrame(() => {
        const slider = $('.Slider');
        const x = e.touches && e.touches.length > 0 ? e.touches[0].pageX : e.pageX;
        const dist = Math.round(x - startX);
        slider[0].style.transform = `translateX(${Math.round(scrollLeft + dist)}px)`;
    });
}

function end(e: any) {
    isDown = false;
    const $slider = $(`.Slider`);
    $slider.removeClass("active");

    if (isDragging) {
        const $main = $(".Main");
        const $sliderElements = $slider.children();
        const centerSlider = ($main.outerWidth() ?? 0) / 2;
        let activeIndex: number | null = null;
        $sliderElements.each((index, el) => {
            const leftOfDiv = el.getBoundingClientRect().left;
            const widthOfDiv = el.getBoundingClientRect().width;
            if ((leftOfDiv < centerSlider) && ((leftOfDiv + widthOfDiv) > centerSlider)) {
                activeIndex = index;
            }
        });

        if (activeIndex !== null) {
            runSlider(activeIndex);
        }
    }

    isDragging = false;
}