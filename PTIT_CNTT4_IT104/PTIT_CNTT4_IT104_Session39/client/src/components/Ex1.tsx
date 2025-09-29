import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

type FormValues = {
    description: string;
    file: FileList;
};

export default function Ex1() {
    const { register, handleSubmit, reset } = useForm<FormValues>();
    const [uploadedData, setUploadedData] = useState<{
        url: string;
        description: string;
    } | null>(null);

    const onSubmit = async (data: FormValues) => {
        if (!data.file || data.file.length === 0) {
            alert("Vui lòng chọn ảnh!");
            return;
        }

        const imageFile = data.file[0];
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", "Upload_image");

        try {
            // 1. Upload ảnh lên Cloudinary
            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/dcti4xpqa/image/upload",
                formData
            );

            // 2. Lưu URL và mô tả vào state
            setUploadedData({
                url: res.data.secure_url,
                description: data.description,
            });

            // Reset form
            reset();
        } catch (error) {
            console.error("Upload error:", error);
        }
    };

    return (
        <div>
            <h1>Upload ảnh kèm mô tả</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="file"
                    {...register("file", { required: true })}
                    accept="image/*"
                />
                <br />
                <input
                    type="text"
                    placeholder="Nhập mô tả ảnh"
                    {...register("description", { required: true })}
                />
                <br />
                <button type="submit">Upload</button>
            </form>

            {uploadedData && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Ảnh đã upload:</h2>
                    <img src={uploadedData.url} alt="Uploaded" width="200" />
                    <p>Mô tả: {uploadedData.description}</p>
                </div>
            )}
        </div>
    );
}