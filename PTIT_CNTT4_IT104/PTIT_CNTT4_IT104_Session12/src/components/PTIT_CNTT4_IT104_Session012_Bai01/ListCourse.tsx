import React from "react";

export default function ListCourse() {
    const courses = ["HTML", "CSS", "JavaScript", "ReactJS"];

    return (
        <div>
            <h1>Danh sach khoa hoc</h1>
            <ol>
                {courses.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    );
}