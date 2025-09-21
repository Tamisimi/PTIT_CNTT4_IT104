import React, { useState } from "react";
import pizza from "../images/pizza.jpg";
import bread from "../images/bread.jpg";
import hamburger from "../images/Hamburger.jpg";
import cake from "../images/Cake.jpg";
import type { Product } from "../interface/interface";
import { useDispatch } from "react-redux";

type CartItem = Product & { quantity: number };

const data: Product[] = [
    {
        id: 1,
        title: "Pizza",
        image: pizza,
        content: "pizza",
        price: 30,
        stock: 15,
        quantity: 0,
    },
    {
        id: 2,
        title: "Hamburger",
        image: hamburger,
        content: "Hamburger",
        price: 15,
        stock: 20,
        quantity: 0,
    },
    {
        id: 3,
        title: "Bread",
        image: bread,
        content: "Bread",
        price: 20,
        stock: 18,
        quantity: 0,
    },
    {
        id: 4,
        title: "Cake",
        image: cake,
        content: "Cake",
        price: 10,
        stock: 22,
        quantity: 0,
    },
];

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>(data);
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: product,
        });

        let cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
        const existingItemIndex = cart.findIndex((item: CartItem) => item.id === product.id);

        if (existingItemIndex === -1) {
            cart.push({ ...product, quantity: 1 });
        } else {
            const currentQuantity = cart[existingItemIndex].quantity || 0;
            const availableStock = product.stock ?? Infinity;
            if (currentQuantity + 1 > availableStock) {
                const notification = document.getElementById("notification");
                if (notification) {
                    notification.innerText = "Quantity exceeds available stock!";
                    notification.style.display = "block";
                    setTimeout(() => (notification.style.display = "none"), 2000);
                }
                return;
            }
            cart[existingItemIndex].quantity += 1;
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        const notification = document.getElementById("notification");
        if (notification) {
            notification.innerText = "Product added to cart!";
            notification.style.display = "block";
            setTimeout(() => (notification.style.display = "none"), 2000);
        }
    };

    return (
        <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="panel-title">List Products</h1>
                    </div>
                    <div className="panel-body" id="list-product">
                        {/* danh sách sản phẩm */}
                        {products.map((item: Product, index: number) => {
                            return (
                                <div key={item.id}>
                                    <div className="media product">
                                        <div className="media-left">
                                            <a href="#">
                                                <img
                                                    className="media-object"
                                                    src={item.image}
                                                    alt={item.title}
                                                />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="media-heading">{item.title}</h4>
                                            <p>{item.content}</p>
                                            <input
                                                name={`quantity-product-${item.id}`}
                                                type="number"
                                                defaultValue={1}
                                                min={1}
                                            />
                                            <a
                                                onClick={() => handleAddToCart(item)}
                                                className="price"
                                                style={{ cursor: "pointer" }}
                                            >
                                                {item.price} USD
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}