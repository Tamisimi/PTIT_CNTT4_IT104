import type { Product } from "../../interface/interface";

type Action =
    | { type: "INCREMENT"; payload: { id: number } }
    | { type: "DECREMENT"; payload: { id: number } }
    | { type: "DELETE"; payload: { id: number } }
    | { type: "ADD_TO_CART"; payload: Product }
    | { type: "UPDATE"; payload: { id: number; quantity: number } };

type CartItem = Required<Pick<Product, "id" | "title" | "price" | "quantity">> & Partial<Pick<Product, "image" | "content" | "stock">>;

const initialState = {
    cart: [
        { id: 1, title: "cake", price: 10, quantity: 1 } as CartItem,
        { id: 2, title: "Hamburger", price: 15, quantity: 1 } as CartItem,
    ],
};

export const reducerCart = (state = initialState, action: Action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                cart: state.cart.map((item: CartItem) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: (item.quantity || 0) + 1 }
                        : item
                ),
            };

        case "DECREMENT":
            return {
                ...state,
                cart: state.cart.map((item: CartItem) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: Math.max(1, (item.quantity || 0) - 1) }
                        : item
                ),
            };

        case "DELETE":
            return {
                ...state,
                cart: state.cart.filter((item: CartItem) => item.id !== action.payload.id),
            };

        case "ADD_TO_CART": {
            const product = action.payload;
            const exist = state.cart.find((item: CartItem) => item.id === product.id);

            if (exist) {
                return {
                    ...state,
                    cart: state.cart.map((item: CartItem) =>
                        item.id === product.id
                            ? { ...item, quantity: (item.quantity || 0) + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...product, quantity: 1 } as CartItem],
                };
            }
        }

        case "UPDATE": {
            return {
                ...state,
                cart: state.cart.map((item: CartItem) => {
                    if (item.id === action.payload.id) {
                        const newQuantity = action.payload.quantity;
                        const availableStock = item.stock ?? Infinity;
                        if (newQuantity > availableStock) {
                            alert("Số lượng sản phẩm vượt quá số lượng trong kho");
                            return item;
                        }
                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                }),
            };
        }

        default:
            return state;
    }
};