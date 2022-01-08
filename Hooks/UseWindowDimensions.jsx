import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        innerWidth: undefined,
        innerHeight: undefined,
        clientWidth: undefined,
        clientHeight: undefined
    }
);
    useEffect(() => {
        function handleResize() {
            setWindowDimensions({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
                clientWidth: document.documentElement.clientWidth,
                clientHeight: document.documentElement.clientHeight
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowDimensions;
};
export default useWindowDimensions;
