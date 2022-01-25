import { useState, useEffect } from "react";
import { WindowSizes } from "../../types/types";

const getWindowSize = (): WindowSizes => {
    if (window.innerWidth < 480) {  
        return WindowSizes.Mobile;
    }
    else if (window.innerWidth < 780) {
        return WindowSizes.Small;
    }
    else if (window.innerWidth < 1200) {
        return WindowSizes.Medium;
    }
    else {
        return WindowSizes.Large;
    }
}

function useWindowSize(): WindowSizes {

    // Initialize state with initial window size
    const [windowSize, setWindowSize] = useState<WindowSizes>(getWindowSize());

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