import { useState, useEffect } from "react";

export default function CursorFollow() {

    const [position, setPosition] = useState({ x: 0, y: 0 });


    document.onmousemove = (e) => {
        setPosition({ x: e.x, y: e.pageY });
    }


    return (
        <div
            style={{
                display: 'inline-block',
                backgroundColor: '#09c3c3',
                border: '3px solid royalblue',
                height: '19px',
                width: '19px',
                borderRadius: '50%',
                position: 'absolute',
                transition: 'transform 50ms ease-out',
                left: `${position.x + 9}px`,
                top: `${position.y - 9}px`
            }}
        ></div>
    );
}