import Image from "next/image";
import { Playfair_Display, Poppins } from "next/font/google";


const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });


export default function Contact () {
    return (
      <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-lg">
      <div className="md:w-1/2 relative">
      <Image
          src="/organic1.jpg" 
          alt="Organic Vegetables"
          width={600} 
          height={400}
          className="rounded-l-[200px] rounded-r-[200px] w-full h-auto object-cover"
      />


      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-between">
        <h2 className="text-6xl font-phetsarath ot text-green-700 flex items-center">
        <span>📞</span> ຕິດຕໍ່ພວກເຮົາ
        </h2>
        <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" 
              className="w-full h-[100px] p-2 border rounded bg-green-200 text-green-600" 
              />

              <input type="email" placeholder="Your email" 
              className="w-full p-2 border rounded bg-green-200 text-green-600" 
              />

            </div>

            <textarea placeholder="Write your comment" 
            className="w-full p-2 border h-[300px] rounded h-32 bg-green-200 text-green-600" 
            />

            <div className="flex justify-end">
              <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded shadow hover:bg-green-700 mr-4 justify-end">
                Send
              </button>
            </div>

        <h3 className="text-8xl font-bold text-green-900 text-center mt-6 border-b-4 border-orange-500 pb-5">
             We organic
        </h3>

                  <div className="mt-4 flex flex-col md:flex-row justify-between gap-8">
            
            <div className="w-full md:w-1/3">
              <p className="text-green-800 text-2xl font-semibold italic">📍Address:</p>
              <p className="text-gray-700 text-xl">ບ້ານ ໂພນປາເປົ້າ</p>
              <p className="text-gray-700 text-xl">ເມືອງ ສີສັດຕະນາກ</p>
              <p className="text-gray-700 text-xl">ແຂວງ ນະຄອນຫຼວງວຽງຈັນ</p>
            </div>

            
            <div className="w-full md:w-1/3">
              <p className="text-green-800 text-2xl font-semibold">⏰ເວລາເຮັດວຽກ:</p>
              <p className="text-gray-700 text-xl ">ວັນຈັນ-ວັນເສົາ</p>
              <p className="text-gray-700 text-xl ">8:00 - 17:00</p>
            </div>

            
            <div className="w-full md:w-1/3">
              <p className="text-green-800 text-xl font-semibold">📞Tel: <span className="text-orange-600 underline">020 99 930 099</span></p>
            </div>
          </div>

      </div>
    </div>
    );
    
}

