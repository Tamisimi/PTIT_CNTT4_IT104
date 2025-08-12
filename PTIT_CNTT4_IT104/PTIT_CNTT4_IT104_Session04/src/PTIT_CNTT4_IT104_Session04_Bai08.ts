interface Product {
    readonly id: string;
    name: string;
    price: number;
}

interface OrderItem {
    product: Product;
    quantity: number;
}

interface Order {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string; // optional
}

function calculateOrderTotal(order: Order): number {
    let total = 0;
    for (let item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}

function printOrder(order: Order): void {
    let total = calculateOrderTotal(order);
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    for (let item of order.items) {
        console.log(`- ${item.product.name} x ${item.quantity} → ${item.product.price * item.quantity} VND`);
    }
    console.log(`Tổng cộng: ${total} VND`);
    console.log(`Ghi chú: ${order.note || "Không có ghi chú"}`);
}

// Ví dụ sử dụng
let order: Order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: { id: "P001", name: "Áo sơ mi", price: 250000 }, quantity: 2 },
        { product: { id: "P002", name: "Quần tây", price: 400000 }, quantity: 1 }
    ],
    note: "Giao sau 18h"
};

printOrder(order);