import "./ScrollingBox.scss";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

interface BoxProps {
    color: string;
}

const ScrollingBox: React.FC<BoxProps> = ({ color }) => {
    const [key, setKey] = useState(1);
    const scrolling = useSpring({
        from: {
            top: "0px",
            left: "25%",
            background: color,
            position: "absolute" as "absolute",
            width: "50%",
            height: "50%"
        },
        to: {
            top: window.innerHeight + "px"
        },
        config: { duration: 5000 },
        reset: true,
        // reverse: key % 2 === 0,
        onRest: () => {
            setKey(key + 1);
        }
    });

    return (
        <div key={key}>
            <animated.div style={scrolling}>
                <span></span>
            </animated.div>
        </div>
    );
};

export default ScrollingBox;
