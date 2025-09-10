import React from "react";

export default function AdminIndex() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <div style={{ display: "flex", flexDirection: "column", background: "#b0b0b0", padding: "15px" }}>
                <div style={{ fontWeight: "bold", fontSize: "24px", textAlign: "center", color: "#333" }}>Header</div>
            </div>
            <div style={{ display: "flex", flex: 1 }}>
                <div style={{ width: "20%", background: "#90ee90", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
                    Menu
                </div>
                <div style={{ flex: 1, padding: "15px", background: "#f9f9f9" }}>
                    <div style={{ background: "#999", padding: "8px", textAlign: "center", color: "#fff", marginBottom: "15px" }}>Main</div>
                </div>
            </div>
            <div style={{ background: "#b0b0b0", padding: "10px", textAlign: "center", color: "#333" }}>
                <p>&nbsp;</p>
            </div>
        </div>
    );
}