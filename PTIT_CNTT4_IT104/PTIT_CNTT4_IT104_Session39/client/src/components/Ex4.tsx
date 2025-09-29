import React, { useState } from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";

export default function Ex04() {
    const [preview, setPreview] = useState<string>();
    const [uploadedUrl, setUploadedUrl] = useState<string>();

    const resizeFile = (file: File): Promise<Blob> =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                800,
                800,
                "JPEG",
                70,
                0,
                (uri) => {
                    if (uri instanceof Blob) {
                        resolve(uri);
                    }
                },
                "blob"
            );
        });

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setPreview(URL.createObjectURL(file));
        const resizedFile = (await resizeFile(file)) as Blob;
        const formData = new FormData();
        formData.append("file", resizedFile);
        formData.append("upload_preset", "Upload_image");
        try {
            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/dcti4xpqa/image/upload",
                formData
            );
            setUploadedUrl(res.data.secure_url);
            alert("Upload thành công!");
        } catch (error) {
            console.error("Upload error:", error);
        }
    };

    return (
        <div>
            <h1>Upload ảnh với chất lượng giảm (Compressed)</h1>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Ảnh gốc (trước khi nén):</h3>
                    <img src={preview} alt="original" width="200" />
                </div>
            )}
            {uploadedUrl && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Ảnh sau khi nén & upload:</h3>
                    <img src={uploadedUrl} alt="compressed" width="200" />
                </div>
            )}
        </div>
    );
}