import Image from "next/image";
import { Playfair_Display, Poppins } from "next/font/google";


const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="relative w-full">
      <Image
        src="/organic.jpg"
        alt="organic"
        width={1700}
        height={600}
        className="w-full h-auto"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center">
        <h1 className={`text-white text-8xl font-bold ${playfair.className}`}>
          We Organic
        </h1>
        <h2 className={`text-yellow-400 text-4xl mt-4 ${poppins.className}`}>
          ຄວາມສົດທີ່ທ່ານໝັ້ນໃຈ
        </h2>
        <h3 className={`text-yellow-400 text-4xl mt-2 ${poppins.className}`}>
          ສົ່ງໄວຮອດບ້ານທ່ານ
        </h3>
      </div>
    </div>
  );
}