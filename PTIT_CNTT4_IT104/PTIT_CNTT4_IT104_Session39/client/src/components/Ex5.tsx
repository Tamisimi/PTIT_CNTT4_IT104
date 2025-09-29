import React, { useState } from "react";
import axios from "axios";

type UploadedImage = {
    url: string;
    thumbnail: string;
};

export default function Ex5() {
    const [images, setImages] = useState<UploadedImage[]>([]);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);

        try {
            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload`,
                formData
            );

            const url = res.data.secure_url;
            const publicId = res.data.public_id;

            // Tạo URL thumbnail (150x150)
            const thumbnail = `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload/w_150,h_150,c_fill/${publicId}.jpg`;

            setImages((prev) => [...prev, { url, thumbnail }]);
        } catch (error) {
            console.error("Upload error:", error);
        }
    };

    return (
        <div>
            <h1>Upload ảnh & Hiển thị Thumbnail</h1>
            <input type="file" accept="image/*" onChange={handleUpload} />

            <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
                {images.map((img, index) => (
                    <div key={index}>
                        <a href={img.url} target="_blank" rel="noopener noreferrer">
                            <img
                                src={img.thumbnail}
                                alt="thumbnail"
                                style={{ width: "150px", height: "150px", cursor: "pointer" }}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}