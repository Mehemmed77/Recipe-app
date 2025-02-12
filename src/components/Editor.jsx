import { useRef } from "react"

export default function Editor() {
    const scrollRef = useRef(null);
    const resizableDiv = useRef(null);

    const handleMouseDown = (e) => {
        resize(e);
    }

    const resize = (e) => {
        resizableDiv.current.style.width = e.clientX - resizableDiv.current.offsetLeft + "px";
    }

    return <>
        <div className="container">
            <div ref={resizableDiv} className="code">
                sdsjdkfj
            </div>

            <div ref={scrollRef} style={{width:"10px", height:"50vh", cursor:'ew-resize'}} onMouseDown={handleMouseDown}></div>
            
            <div className="result">
                fjkdfjkdjfjkd
            </div>
        </div>
    </>
}