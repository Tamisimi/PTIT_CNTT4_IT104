import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import axios from "axios";

export default function Ex3() {
    const [image, setImage] = useState<string>();
    const [croppedImage, setCroppedImage] = useState<string>();
    const cropperRef = useRef<HTMLImageElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCrop = async () => {
        const cropper = (cropperRef.current as any)?.cropper;
        if (!cropper) return;

        cropper.getCroppedCanvas().toBlob(async (blob: Blob) => {
            if (!blob) return;

            const formData = new FormData();
            formData.append("file", blob);
            formData.append("upload_preset", "Upload_image");

            try {
                const res = await axios.post(
                    "https://api.cloudinary.com/v1_1/dcti4xpqa/image/upload",
                    formData
                );
                setCroppedImage(res.data.secure_url);
                alert("Upload thành công!");
            } catch (error) {
                console.error("Upload error:", error);
            }
        });
    };

    return (
        <div>
            <h1>Crop & Upload Ảnh</h1>
            <input type="file" accept="image/*" onChange={handleFileChange} />


            {image && (
                <div style={{ width: "400px", marginTop: "20px" }}>
                    <Cropper
                        src={image}
                        style={{ height: 400, width: "100%" }}

                        aspectRatio={1}
                        guides={true}
                        ref={cropperRef}
                        viewMode={1}
                        dragMode="move"
                        scalable={true}
                        cropBoxResizable={true}
                    />
                    <button onClick={handleCrop} style={{ marginTop: "10px" }}>
                        Crop & Upload
                    </button>
                </div>
            )}

            {croppedImage && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Ảnh đã crop & upload:</h2>
                    <img src={croppedImage} alt="Cropped" width="200" />
                </div>
            )}
        </div>
    );
}