import React, { useEffect, useState } from "react";


export const NounBubble: React.FC = () => {
    const names = ['developer', 'creative', 'musician', 'photographer', 'coffee lover', 'vocalist', 'worship leader'];
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

            setTimeLastChanged(time);
        }
    }, [nameToShow, names.length, time, timeLastChanged])

    return (
        <div style={{zIndex: 1, backgroundColor: '#0039a6', overflow: 'hidden', animation: `nounBubbleBackground ${interval * 10}s ease-in-out infinite`, width: 250, height: '3rem', borderRadius: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ display: 'flex'}}>
                <p id="noun" style={{width: 400, textAlign: 'center', fontFamily: 'Helvetica Neue', color: 'white', fontWeight: 600, fontSize: '2rem'}}>
                    {names[nameToShow]}
                </p>
            </div>
        </div>
    )
}