import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Product } from "../interface/interface";

export default function ShoppingCart() {
    const result: Product[] = useSelector((data: any) => {
        return data.cart.cart;
    });
    const dispatch = useDispatch();

    const handleIncrease = (item: Product) => {
        dispatch({
            type: "INCREMENT",
            payload: item,
        });
    };

    const handleDecrease = (item: Product) => {
        dispatch({
            type: "DECREMENT",
            payload: item,
        });
    };

    const handleDelete = (item: Product) => {
        const confirmDelete = window.confirm("Are you sure you want to remove this product?");
        if (confirmDelete) {
            dispatch({
                type: "DELETE",
                payload: item,
            });

            const notification = document.getElementById("mnotification");
            if (notification) {
                notification.innerText = "Product removed from cart!";
                notification.style.display = "block";
                setTimeout(() => (notification.style.display = "none"), 2000);
            }
        }
    };

    const handleUpdate = (item: Product) => {
        if (item.quantity && item.stock && item.quantity > item.stock) {
            const notification = document.getElementById("mnotification");
            if (notification) {
                notification.innerText = "Quantity exceeds available stock!";
                notification.style.display = "block";
                setTimeout(() => (notification.style.display = "none"), 2000);
            }
            return;
        }
        dispatch({
            type: "UPDATE",
            payload: item,
        });

        const notification = document.getElementById("mnotification");
        if (notification) {
            notification.innerText = "Cart updated successfully!";
            notification.style.display = "block";
            setTimeout(() => (notification.style.display = "none"), 2000);
        }
    };

    return (
        <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h1 className="panel-title">Your Cart</h1>
                    </div>
                    <div className="panel-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="my-cart-body">
                                {result.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} style={{ textAlign: "center", fontWeight: "bold" }}>
                                            Your cart is empty
                                        </td>
                                    </tr>
                                ) : (
                                    result.map((item: Product, index: number) => {
                                        return (
                                            <tr key={item.id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{item.title}</td>
                                                <td>{item.price} USD</td>
                                                <td>
                                                    <button onClick={() => handleDecrease(item)}>-</button>
                                                    {item.quantity}
                                                    <button onClick={() => handleIncrease(item)}>+</button>
                                                </td>
                                                <td>
                                                    <a
                                                        className="label label-info update-cart-item"
                                                        onClick={() => handleUpdate(item)}
                                                        data-product=""
                                                    >
                                                        Update
                                                    </a>
                                                    <a
                                                        className="label label-danger delete-cart-item"
                                                        onClick={() => handleDelete(item)}
                                                        data-product=""
                                                    >
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                            <tfoot id="my-cart-footer">
                                <tr>
                                    <td colSpan={4}>
                                        There are <b>{result.length}</b> items in your shopping cart.
                                    </td>
                                    <td colSpan={2} className="total-price text-left">
                                        {result.reduce((acc: number, item: Product) => {
                                            return acc + item.price * (item.quantity || 0);
                                        }, 0)} USD
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className="alert alert-success" role="alert" id="mnotification" style={{ display: "none" }}>
                    Add to cart successfully
                </div>
            </div>
        </div>
    );
}