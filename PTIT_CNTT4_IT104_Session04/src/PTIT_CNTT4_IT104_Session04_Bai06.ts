interface Category {
    id: string;
    name: string;
}

interface Product {
    id: string;
    name: string;
    price: number;
    category: Category;
    discount?: number;
}

let listProduct: Product[] = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 300000,
        category: { id: "C001", name: "Thời trang nam" },
        discount: 240000
    },
    {
        id: "P002",
        name: "Quần jeans",
        price: 450000,
        category: { id: "C001", name: "Thời trang nam" },
        discount: 360000
    },
    {
        id: "P003",
        name: "Giày thể thao",
        price: 700000,
        category: { id: "C002", name: "Phụ kiện" }
    }
];

function getFinalPrice(product: Product): number {
    return product.discount !== undefined ? product.discount : product.price;
}

function printProductInfo(product: Product): void {
    const finalPrice = getFinalPrice(product);
    console.log(`1. Tên: ${product.name}`);
    console.log(`2. Giá gốc: ${product.price} VND`);
    console.log(`3. Giá sau giảm: ${finalPrice} VND`);
    console.log(`4. Danh mục: ${product.category.name}`);
}

listProduct.forEach(printProductInfo);