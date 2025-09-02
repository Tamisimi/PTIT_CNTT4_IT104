import React, { useState, useEffect, useRef } from "react";

export default function ModalExample() {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    let modalContent = null;
    if (isOpen) {
        modalContent = (
            <div>
                <h3>Modal</h3>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Nhập văn bản"
                />
                <button onClick={handleClose}>Đóng</button>
            </div>
        );
    }

    return (
        <div>
            <h2>Modal Example</h2>
            <button onClick={handleOpen}>Mở Modal</button>
            {modalContent}
        </div>
    );
}