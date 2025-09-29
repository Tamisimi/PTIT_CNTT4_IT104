import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

type FormValues = {
    description: string;
    file: FileList;
};

type ImageData = {
    id: number;
    url: string;
    description: string;
};

export default function Ex2() {
    const { register, handleSubmit, reset } = useForm<FormValues>();
    const [images, setImages] = useState<ImageData[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/images").then((res) => {
            setImages(res.data);
        });
    }, []);

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
            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/dcti4xpqa/image/upload",
                formData
            );

            const newImage = {
                url: res.data.secure_url,
                description: data.description,
            };
            const saveRes = await axios.post("http://localhost:8080/images", newImage);

            setImages([...images, saveRes.data]);

            reset();
        } catch (error) {
            console.error("Upload error:", error);
        }
    };

    // Hàm xoá ảnh
    const deleteImage = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8080/images/${id}`);
            setImages(images.filter((img) => img.id !== id));
            alert("Xóa thành công!");
        } catch (error) {
            console.error("Delete error:", error);
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

            <h2 style={{ marginTop: "20px" }}>Danh sách ảnh:</h2>
            {images.map((img) => (
                <div key={img.id} style={{ marginBottom: "20px" }}>
                    <img src={img.url} alt="Uploaded" width="200" />
                    <p>Mô tả: {img.description}</p>
                    <button onClick={() => deleteImage(img.id)}>Xóa</button>
                </div>
            ))}
        </div>
    );
}