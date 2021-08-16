import { useState, useEffect } from "react";

const getWindowSize = () => {
    if (window.innerWidth < 485) {
        return "xsmall";
    }
    else if (window.innerWidth < 785) {
        return "small";
    }
    else if (window.innerWidth < 1335) {
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