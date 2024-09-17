// import { useEffect, useState } from 'react';

// export const useInView = (ref: React.RefObject<Element>) => {
//     const [isInView, setIsInView] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!ref.current) return;

//             const rect = ref.current.getBoundingClientRect();
//             const viewportHeight = window.innerHeight;

//             // Calculate the center of the element and the viewport
//             const elementCenter = rect.top + rect.height / 2;
//             const viewportCenter = viewportHeight / 2;

//             // Check if the center of the element is within a threshold of the viewport center
//             const isCenterInView = Math.abs(elementCenter - viewportCenter) < rect.height / 2;

//             setIsInView(isCenterInView);
//         };

//         window.addEventListener('scroll', handleScroll);
//         window.addEventListener('resize', handleScroll);

//         // Initial check in case the element is already in view
//         handleScroll();

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             window.removeEventListener('resize', handleScroll);
//         };
//     }, [ref]);

//     return isInView;
// };



import { useEffect, useState } from 'react';

export const useInView = (ref: React.RefObject<Element>) => {
    const [hasBeenInView, setHasBeenInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current || hasBeenInView) return; // Skip if already in view

            const rect = ref.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate the center of the element and the viewport
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = viewportHeight / 2;

            // Check if the center of the element is within a threshold of the viewport center
            const isCenterInView = Math.abs(elementCenter - viewportCenter) < rect.height / 2;

            if (isCenterInView) {
                setHasBeenInView(true); // Set to true once in view
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Initial check in case the element is already in view
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [ref, hasBeenInView]);

    return hasBeenInView;
};
