import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../store/slice/productSlice";

export default function UploadImage() {
    const [image, setImage] = useState<File | null>(null);
    const [name, setName] = useState<string>("");

    const result = useSelector((state: any) => state.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProduct() as any);
    }, [dispatch]);

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const saveImage = async () => {
        if (!image || !name) {
            alert("Vui lòng nhập tên sản phẩm và chọn ảnh!");
            return;
        }

        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "Upload_image"); // preset trên Cloudinary

        try {
            // 1. Upload ảnh lên Cloudinary
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dcti4xpqa/image/upload",
                formData
            );

            const uploadedUrl = response.data.secure_url;

            // 2. Lưu sản phẩm mới vào json-server
            await axios.post("http://localhost:8080/products", {
                name: name,
                img: uploadedUrl,
            });

            // 3. Refresh lại danh sách sản phẩm
            dispatch(getAllProduct() as any);

            // reset form
            setName("");
            setImage(null);
            alert("Thêm sản phẩm thành công!");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Upload ảnh & Thêm sản phẩm</h1>

            <input
                type="text"
                placeholder="Tên sản phẩm"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input type="file" onChange={handleChangeImage} />
            <br />
            <button onClick={saveImage}>Lưu</button>

            <h1>Danh sách sản phẩm</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Ảnh</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((item: any, index: number) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                {item.img ? (
                                    <img src={item.img} alt={item.name} width="100" />
                                ) : (
                                    "Chưa có ảnh"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}