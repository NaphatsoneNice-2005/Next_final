'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Food from "../components/food";
import Cart from "../components/cart";

export interface Product {
    id: string;
    createdAt: string;
    vegetable: string;
    price: number;
    quantity: number;
    address: string;
    photo: string;
}

export default function Products() {
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isCartOpen, setIsCartOpen] = useState(false); // ✅ ควบคุมการเปิดปิดตะกร้า

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

    // ✅ เพิ่มสินค้าหลายรายการลงตะกร้าได้
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

        setIsCartOpen(true); // ✅ แสดงตะกร้าทันทีเมื่อเพิ่มสินค้า
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
        <div className="container mx-auto p-6 relative">
            <h1 className="text-3xl font-bold text-green-700 text-center mb-6">Organic Vegetables</h1>

            {/* ✅ Grid รายการสินค้า */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProducts.map((p) => (
                    <div key={p.id} className="bg-white shadow-lg rounded-lg p-4 border border-green-200 hover:shadow-xl">
                        <div className="mt-4">
                            <Image
                                src={`${p.photo}?random=${Math.random()}`}
                                alt={p.vegetable} width={300} height={200}
                                className="rounded-lg border border-green-300 hover:border-green-500"
                                unoptimized={true}
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-green-700 hover:text-green-600">
                            {p.vegetable}
                        </h2>
                        <p className="text-gray-700">ລາຄາ: <span className="font-semibold text-red-500">{p.price} Kip</span></p>
                        <p className="text-gray-700">ຈຳນວນ: {p.quantity} Kg</p>
                        <p className="text-gray-700">ທີ່ຢູ່: {p.address}</p>
                        
                        {/* ✅ ใช้ Food component */}
                        <div className="flex justify-between mt-4">
                            <Link href={`products/${p.id}`}>
                                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                                    ລາຍລະອຽດ
                                </button>
                            </Link>

                            <Food food={p} onAddToCart={addToCart} />
                        </div>
                    </div>
                ))}
            </div>

            {/* ✅ Sticky Cart ด้านล่าง */}
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

            {/* ✅ ปุ่มเปิดตะกร้า (ถ้าถูกปิด) */}
            {!isCartOpen && cartItems.length > 0 && (
                <button 
                    className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-700"
                    onClick={() => setIsCartOpen(true)}
                >
                    🛒 ກະະຕ່າ ({cartItems.length})
                </button>
            )}
        </div>
    );
}
