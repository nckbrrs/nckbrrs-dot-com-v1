import React from "react";
import useWindowSize from "../../assets/hooks/useWindowSize";
import { MainContentTypes, WindowSizes } from "../../types/types";
import About from "../About";
import Links from "../Links";

interface MainProps {
    contentToShow: MainContentTypes;
    slideLeft: boolean;
    slideRight: boolean;
}

const Main: React.FC<MainProps> = (props) => {
    const windowSize: WindowSizes = useWindowSize();

    const classNames = () => {
        let classNames: string[] = [windowSize];
        
        if (props.slideLeft) {
            classNames.push('slideLeft');
        }

        if (props.slideRight) {
            classNames.push('slideRight');
        }

        return classNames.join(' ');
    }

    return (
        <div id="main" className={classNames()}>
        {   props.contentToShow === MainContentTypes.About &&
            <About/>
        }
        {   props.contentToShow === MainContentTypes.Links &&
            <Links/>
        }
        </div>
    );
}

export default Main;