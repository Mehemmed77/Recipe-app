import { useRef } from "react";
import { useEffect } from "react";
import MonacoEditor from '@uiw/react-monacoeditor';
import { useState } from "react";

export default function Editor() {
    const scrollRef = useRef(null);
    const editor = useRef(null);
    const [code, setCode] = useState();

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!editor.current) return;
            editor.current.style.width = e.clientX - editor.current.offsetLeft + "px";
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        const handleMouseDown = () => {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        };

        if (scrollRef.current) {
            scrollRef.current.addEventListener("mousedown", handleMouseDown);
        }

        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener("mousedown", handleMouseDown);
            }
        };
    }, []);

    return <>
        <div className="container">
            <div ref={editor} className="code">
                <MonacoEditor onChange={(e) => setCode(e)} value={code} height="100%" width="100%" language="javascript"></MonacoEditor>
            </div>

            <div ref={scrollRef} style={{width:"8px", height:"50vh", cursor:'ew-resize'}}></div>
            
            <div className="result">
                
            </div>
        </div>
    </>
}