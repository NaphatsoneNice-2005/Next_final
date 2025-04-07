'use client';

import { useEffect, useState, use } from 'react';
import Image from "next/image";

export default function ProductDetailPage({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = use(params);

    interface ProductDetail {
        vegetable: string;
        price: number;
        quantity: number;
        address: string;
        createdAt: string;
        photo: string;
        date: string;
    }

    const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchProductDetail = async () => {
        try {
            const data = await fetch(`https://67b2ae2bbc0165def8ce2615.mockapi.io/api/v1/Wegetable${productId}`);
            const product = await data.json();
            setProductDetail(product);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductDetail();
    },[]);

    if (loading) {
        return <p className="text-center text-gray-600">Loading...</p>;
    }

    if (!productDetail) {
        return <p className="text-center text-red-500">Product not found</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
            <h1 className="text-2xl font-bold text-green-700 mb-4">{productDetail.vegetable}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Image
                        src={`${productDetail.photo}?random=${Math.random()}`}
                        alt="vegetable"
                        width={640}
                        height={480}
                        className="rounded-lg shadow-md"
                        unoptimized={true}
                    />
                </div> 
                <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">ລາຄາ:</span> {productDetail.price} ກີບ</p>
                    <p><span className="font-semibold">ຈຳນວນ:</span> {productDetail.quantity} Kg</p>
                    <p><span className="font-semibold">ທີ່ຢູ່:</span> {productDetail.address}</p>
                    <p><span className="font-semibold">ມື້ເກັບຈາກສວນ:</span> {productDetail.createdAt}</p>
                </div>
            </div>
        </div>
    );
}
