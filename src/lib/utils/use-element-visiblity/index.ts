import { ElementRef, useEffect, useRef, useState } from "react";

const useElementVisibility = (
    checkOnce: boolean = false
): [React.MutableRefObject<any>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        setTimeout(() => {
            if (elementRef.current) observer.observe(elementRef.current);
        }, 1000);

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [elementRef]);

    return [elementRef, isVisible];
};

export default useElementVisibility;
