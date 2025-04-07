"use client";

type FoodProps = {
    food: {id: string; createdAt: string;vegetable: string; price: number;quantity: number;address: string;photo: string;};
    onAddToCart: (food: {id: string; createdAt: string;vegetable: string; price: number;quantity: number;address: string;photo: string;}) => void;
};

export default function Food({food, onAddToCart}: FoodProps){
    return(
        <div>
            <button
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => onAddToCart(food)}
            >
               + ເພິ່ມເຂົ້າກະຕ່າ
            </button>

        </div>
    );
}

