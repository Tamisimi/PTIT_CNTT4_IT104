import React, { useReducer, useMemo } from "react";

export default function ShoppingCart() {
    const initialCartItems = [
        { id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
        { id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 },
    ];

    const reducer = (state: any[], action: { type: string }) => {
        return [...state];
    };
    const [cartItems, dispatch] = useReducer(reducer, initialCartItems);

    const totalPrice = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [cartItems]);

    return (
        <div>
            {cartItems.map(item => (
                <p key={item.id}>{`Name: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`}</p>
            ))}
            <p>Total: {totalPrice.toLocaleString()} VND</p>
        </div>
    );
}