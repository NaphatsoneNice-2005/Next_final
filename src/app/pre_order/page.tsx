'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import Food from "../components/food";
import Cart from "../components/cart";

export interface Product {
    id: string;
    vegetable: string;
    price: number;
    quantity: number;
    address: string;
    photo: string;
    date: string;
}

export default function PreOrderPage() {
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const fetchProducts = async () => {
        try {
            const data = await fetch('https://67b2ae2bbc0165def8ce2615.mockapi.io/api/v1/Wegetable');
            const allProducts = await data.json();
            setAllProducts(allProducts);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // ✅ ฟังก์ชันเพิ่มสินค้าลงตะกร้า
    const addToCart = (product: Product) => {
        setCartItems((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });

        setIsCartOpen(true); // ✅ แสดงตะกร้าทันที
    };

    // ✅ ฟังก์ชันลบสินค้าออกจากตะกร้า
    const removeFromCart = (id: string) => {
        setCartItems((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    // ✅ คำนวณราคารวม
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (loading) {
        return <p className="text-center text-green-600 text-xl mt-10">Loading...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center text-green-700">Pre-Order Vegetables</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {allProducts.map((p) => (
                    <li key={p.id} className="p-4 rounded-4 flex items-center space-x-2">
                        <Image
                            src={`${p.photo}?random=${Math.random()}`}
                            alt={p.vegetable}
                            width={250}
                            height={230}
                            className="rounded-full"
                            unoptimized={true}
                        />
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-green-700 hover:text-green-600">
                                {p.vegetable}
                            </h2>
                            <p className="text-red-500 font-bold">{p.price.toLocaleString()} kip / 1 kg</p>
                            <p className="text-gray-500">ຈຳນວນ: {p.quantity} kg</p>
                            <p className="text-gray-500">ທີ່ຢູ່: {p.address}</p>

                            {/* ✅ ใช้ Food component */}
                            <Food food={p} onAddToCart={addToCart} />
                            <p className="text-red-500 font-bold">ມື້ເກັບກ່ຽວ: {p.date}</p>
                        </div>
                    </li>
                ))}
            </ul>

            {/* ✅ Sticky Cart */}
            {isCartOpen && (
                <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 border-t border-green-300">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-green-700">🛒 ກະຕ່າສິນຄ້າ</h2>
                        <button 
                            className="text-red-500 hover:text-red-700 text-lg"
                            onClick={() => setIsCartOpen(false)}
                        >
                            ❌
                        </button>
                    </div>
                    <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} totalAmount={totalAmount} />
                </div>
            )}

            {/* ✅ ปุ่มเปิดตะกร้า */}
            {!isCartOpen && cartItems.length > 0 && (
                <button 
                    className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-700"
                    onClick={() => setIsCartOpen(true)}
                >
                    🛒 ກະຕ່າ ({cartItems.length})
                </button>
            )}
        </div>
    );
}
