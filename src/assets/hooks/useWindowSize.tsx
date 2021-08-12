import { useState, useEffect } from "react";

// Custom hook for keeping track of window size
interface Size {
    width: number;
    height: number;
}

function useWindowSize(): Size {

    // Initialize state with initial window size
    const [windowSize, setWindowSize] = useState<Size>({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Declare useEffect and handleResize functionality
    useEffect(() => {

        // Handler that will be called upon resize
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    });

    return windowSize;
}

export default useWindowSize;