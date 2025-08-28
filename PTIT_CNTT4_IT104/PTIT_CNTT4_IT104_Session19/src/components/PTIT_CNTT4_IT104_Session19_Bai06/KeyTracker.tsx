import React, { useState, useEffect } from "react";

export default function KeyTracker() {
    const [keyPressed, setKeyPressed] = useState<string | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setKeyPressed(e.key.toUpperCase());
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div>
            <h3>Phím bạn vừa gõ:</h3>
            <div>
                {keyPressed ? `( ${keyPressed} )` : "Chưa gõ phím nào"}
            </div>
        </div>
    );
}