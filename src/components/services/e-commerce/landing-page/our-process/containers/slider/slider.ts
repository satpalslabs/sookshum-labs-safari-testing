import $ from 'jquery';

let isDown = false;
let startX: number;
let scrollLeft: number;
let isDragging = false;

// Function to run the slider to a specific slide
export function runSlider(clickedDivIndex: number) {
    clickedDivIndex = clickedDivIndex + 1;
    const $slider = $(".Slider");
    const $main = $(".Main");
    const $sliderElements = $slider.children();
    const sliderWidth = $slider.outerWidth() ?? 0;
    const mainWidth = $main.outerWidth() ?? 0;
    const centerSlider = mainWidth / 2;
    const $clickedDiv = $($sliderElements[clickedDivIndex]);
    const leftClickedDiv = $clickedDiv.position()?.left ?? 0;
    const centerClickedDiv = ($clickedDiv.width() ?? 0) / 2;
    const rightFromCenter = sliderWidth - leftClickedDiv;
    let translateValue: number;

    DisableArrow(clickedDivIndex - 1);

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

    $slider.css("transform", `translateX(${translateValue}px)`);

    // Update active slide and UI elements
    $sliderElements.each((index, el) => {
        const $el = $(el);
        const $circleClickedDiv = $el.find(".circle");
        const $innerDiv = $circleClickedDiv.find(".rounded-full");
        const $dot = $($(".sliderDots").children()[index - 1]);

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
    const $activeContainer = $('.Slider .active-slider-item').index() - 1;
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
    } else if (ind >= $sliderElements.length - 2) {
        $(".slider-next-arrow").removeClass("text-white").addClass("text-[#777E90]");
        $(".slider-prev-arrow").removeClass("text-[#777E90]").addClass("text-white");
    } else {
        $(".slider-prev-arrow").removeClass("text-[#777E90]").addClass("text-white");
        $(".slider-next-arrow").removeClass("text-[#777E90]").addClass("text-white");
    }
}

// Function to start dragging
export function start(e: any) {
    isDown = true;
    isDragging = false;
    const slider = $(`.Slider`);
    slider.addClass("active");

    startX = e.touches && e.touches.length > 0 ? e.touches[0].pageX : e.pageX;
    scrollLeft = parseInt(slider.css('transform').split(',')[4]?.trim() || "0", 10);
}

// Function to handle dragging movement
export function move(e: any) {
    if (!isDown) return;
    e.preventDefault();
    isDragging = true;

    const slider = $(`.Slider`);
    const x = e.touches && e.touches.length > 0 ? e.touches[0].pageX : e.pageX;
    const dist = x - startX;

    slider.css("transform", `translateX(${scrollLeft + dist}px)`);
}

// Function to end dragging
export function end(e: any) {
    isDown = false;
    const $slider = $(`.Slider`);
    $slider.removeClass("active");

    // Only handle end logic if it was a drag
    if (isDragging) {
        const $main = $(".Main");
        const $sliderElements = $slider.children();
        const centerSlider = ($main.outerWidth() ?? 0) / 2;
        let activeIndex: number | null = null;

        $sliderElements.each((index, el) => {
            const $el = $(el);
            const leftOfDiv = $el.position().left ?? 0;
            const widthOfDiv = $el.width() ?? 0;

            if (leftOfDiv <= 0) {
                activeIndex = index;
            } else if (leftOfDiv < centerSlider && (leftOfDiv + widthOfDiv) > centerSlider) {
                activeIndex = index;
            }
        });

        if (activeIndex !== null) {
            runSlider(activeIndex);
        }
    }

    isDragging = false;
}
