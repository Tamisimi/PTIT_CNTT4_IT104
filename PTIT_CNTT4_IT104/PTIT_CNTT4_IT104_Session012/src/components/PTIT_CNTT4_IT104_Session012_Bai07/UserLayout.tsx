import React from "react";

export default function UserLayout() {
    const cartArray = Array.from({ length: 16 }, () => "Cart");

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <div style={{ display: "flex", flexDirection: "column", background: "#b0b0b0", padding: "15px" }}>
                <div style={{ fontWeight: "bold", fontSize: "24px", textAlign: "center", color: "#333" }}>Header</div>
            </div>
            <div style={{ background: "#999", padding: "8px", textAlign: "center", color: "#fff" }}>Navigation</div>
            <div style={{ display: "flex", flex: 1 }}>
                <div style={{ width: "20%", background: "#90ee90", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
                    Menu
                </div>
                <div style={{ width: "50%", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px", padding: "15px", background: "#f9f9f9" }}>
                    {cartArray.map((value, index) => (
                        <div key={index} style={{ background: "#e0e0e0", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", height: "120px" }}>
                            {value}
                        </div>
                    ))}
                </div>
                <div style={{ width: "30%", background: "#7fffd4", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
                    Article
                </div>
            </div>
            <div style={{ background: "#b0b0b0", padding: "10px", textAlign: "center", color: "#333" }}>
                <p>&nbsp;</p>
            </div>
        </div>
    );
}