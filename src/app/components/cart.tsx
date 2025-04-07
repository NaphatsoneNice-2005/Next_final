"use client";


type CartProps = {
    cartItems: { id: string; vegetable: string;createdAt: string; price: number; quantity: number;address: string;photo: string; date: string; }[];
    onRemoveFromCart: (id: string) => void;
    totalAmount: number; //ລາຄາລວມທັງໝົດ
};

export default function Cart({ cartItems, onRemoveFromCart, totalAmount }: CartProps) {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            {cartItems.length === 0 ? (
                <p className="text-gray-500">ຍັງບໍ່ມີສິນຄ້າໃນກະຕ່າ</p>
            ) : (
                <>
                    <ul>
                    {cartItems.map((item) => (
                        <li key={item.id} className="flex justify-between items-center p-2 border-b">
                            <div className="flex w-full justify-between">
                                <span className="w-1/3">{item.vegetable}</span> 
                                <span className="w-1/3 text-center">x{item.quantity}</span>
                                <span className="w-1/3 text-right">${Number(item.price).toFixed(2)}</span> 
                                <div className="w-full text-right text-gray-500 text-sm">
                                    Total: ${(Number(item.price) * item.quantity).toFixed(2)}
                                </div>
                            
                            </div>
                            <button
                                className="ml-4 bg-red-500 text-white px-2 py-1 rounded-md"
                                onClick={() => onRemoveFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}

                    </ul>
                    <div className="mt-4 font-bold text-lg">
                        Total: ${totalAmount.toFixed(2)}
                    </div>
                </>
            )}
        </div>
    );
}
