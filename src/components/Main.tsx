import React from "react";
import About from "./About";

const Main: React.FC = (props) => {
    return (
        <div style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
            <p style={{zIndex: 2, letterSpacing: '-1.125vw', marginBlockStart: 0, marginBlockEnd: 0, fontFamily: 'Helvetica', fontSize: '24vw', marginRight: '1rem', marginBottom: '-2rem',fontWeight: 400, textAlign: 'left'}}>nick barrs</p>
            <About/>
        </div>
    )
}

export default Main;