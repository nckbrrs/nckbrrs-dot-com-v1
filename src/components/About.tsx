import React from "react";
import { NounBubble } from "./NounBubble";

const About: React.FC = () => {
    return (
        <div style={{display: 'flex', marginLeft: '0.625rem', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            {/* static text */}
            <p style={{zIndex: 2, display: 'inline-flex', marginBlockStart: 0, marginBlockEnd: 0, fontFamily: 'Helvetica Neue', fontSize: '2rem', marginRight: '0.75rem', fontWeight: 600, textAlign: 'left', whiteSpace: 'nowrap' }}>is a</p>

            {/* moving text */}
            <NounBubble/>
            </div>

            {/* static text */}
            <p style={{zIndex: 2, lineHeight: '3rem', marginBlockStart: 0, marginBlockEnd: 0, fontFamily: 'Helvetica Neue', fontSize: '2rem', marginLeft: '1rem', fontWeight: 600, textAlign: 'left' }}>living and working in New York City.</p>
        </div>
    );
}

export default About;