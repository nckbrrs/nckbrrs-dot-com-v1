import { useState, useEffect } from "react";

const getWindowSize = () => {
    if (window.innerWidth < 480) {
        return "mobile";
    }
    else if (window.innerWidth < 780) {
        return "small";
    }
    else if (window.innerWidth < 1200) {
        return "medium";
    }
    else {
        return "";
    }
}

function useWindowSize(): string {

    // Initialize state with initial window size
    const [windowSize, setWindowSize] = useState<string>(getWindowSize());

    // Declare useEffect and handleResize functionality
    useEffect(() => {

        // Handler that will be called upon resize
        const handleResize = () => setWindowSize(getWindowSize());

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    });

    return windowSize;
}

export default useWindowSize;