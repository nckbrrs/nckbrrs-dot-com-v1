import React, { useEffect, useState } from "react";


export const NounBubble: React.FC = () => {
    const names = ['developer', 'musician', 'photographer', 'coffee lover', 'creative'];
    const [time, setTime] = useState(0)
    const [nameToShow, setNameToShow] = useState(0);
    const [timeLastChanged, setTimeLastChanged] = useState(0);
    const interval = 5;

    setTimeout(() => {
        setTime(time + 1);
    }, 1000)

    useEffect(() => {
        if (time % interval === (interval * 4/5) && (time !== timeLastChanged)) {
            setNameToShow((nameToShow + 1) % names.length);
            setTimeLastChanged(time);
        }
    }, [nameToShow, names.length, time, timeLastChanged])

    return (
        <div style={{zIndex: 1, backgroundColor: '#0039a6', overflow: 'hidden', animation: `mtaBackground ${interval * 10}s ease-in-out infinite`, width: 250, height: '3rem', borderRadius: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ display: 'flex'}}>
                <p style={{ animation: `slideOutToLeftNew ${interval}s ease infinite`, width: 400, textAlign: 'center', fontFamily: 'Helvetica Neue', color: 'white', fontWeight: 600, fontSize: '2rem'}}>
                    {names[nameToShow]}
                </p>
            </div>
        </div>
    )
}