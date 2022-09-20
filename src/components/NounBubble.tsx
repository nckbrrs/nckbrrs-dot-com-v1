import React, { useEffect, useMemo, useState } from "react";


export const NounBubble: React.FC = () => {
    const names = useMemo(() => ['developer', 'coffee lover', 'creative', 'worship leader', 'musician', 'photographer', 'vocalist', 'human'], []);
    const [time, setTime] = useState(0)
    const [nameToShow, setNameToShow] = useState(0);
    const [timeLastChanged, setTimeLastChanged] = useState(0);
    const interval = 4;

    setTimeout(() => {
        setTime(time + 1);
    }, 1000)

    // ANIMATION LOOP
    useEffect(() => {
        const noun = document.getElementById("noun");
        const container = document.getElementById("noun-container");

        if (time % interval === (interval * 2/4) && (time !== timeLastChanged)) {
            if (noun) {
                noun.style.transition = "1.5s";
                noun.style.transform = "translate(-500px, 0)"
            }

            setTimeLastChanged(time);
        }

        if (time % interval === (interval * 3/4) && (time !== timeLastChanged)) {
            if (noun) {
                noun.style.transition = "0.0001s";
                noun.style.opacity = "0";
                noun.style.transform = "translate(500px, 0)"
                setNameToShow((nameToShow + 1) % names.length);
            }

            setTimeLastChanged(time);
        }

        if (time % interval === 0 && (time !== timeLastChanged)) {
            if (noun) {
                noun.style.transition = "0.75s";
                noun.style.opacity = "1";
                noun.style.transform = "translate(0, 0)"
            }

            if (container) {
                container.style.transition = "1s";
                container.style.width = `max(10rem, calc(${names[nameToShow].length} * 1.333rem))`;
            }

            setTimeLastChanged(time);
        }
    }, [nameToShow, names, names.length, time, timeLastChanged])

    return (
        <div id="noun-container" style={{zIndex: 1, backgroundColor: '#0039a6', overflow: 'hidden', animation: `nounBubbleBackground ${interval * 10}s ease-in-out infinite`, width: `calc(${names[0].length} * 1.5rem)`, height: '3rem', borderRadius: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ display: 'flex'}}>
                <p id="noun" style={{width: 400, textAlign: 'center', fontFamily: 'Helvetica Neue', color: 'white', fontWeight: 600, fontSize: '2rem'}}>
                    {names[nameToShow]}
                </p>
            </div>
        </div>
    )
}