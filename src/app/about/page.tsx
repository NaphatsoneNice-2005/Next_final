import Image from 'next/image';

const teamMembers = [
  {
    name: 'Naphatsone',
    lastName: 'LATTANACHANDA',
    position: 'ສ້າງ Route, ສ້າງໜ້າ Product,',
    photo: '/photo/Nice.jpg',
  },
  {
    name: 'Dalavanh',
    lastName: 'CHANTHAVEE',
    position: 'ສ້າງໜ້າ Home, ສ້າງໜ້າ Contact(ທີ່ມອບໝາຍໃຫ້ນຶ່ງ ແຕ່ນຶ່ງບໍ່ໄດ້ເຮັດ)',
    photo: '/photo/Boum.jpg',
  },
  {
    name: 'Hunny',
    lastName: 'THAMMAVONG',
    position: 'ສ້າງໜ້າ Pre-order,',
    photo: '/photo/Hunny.jpg',
  },
  {
    name: 'Nueng',
    lastName: 'NOYVONG',
    position: 'ຖືກມອບໝາຍໃຫ້ເຮັດໜ້າ Contact ແຕ່ບໍ່ໄດ້ເຮັດ',
    photo: '/photo/nueng.jpg',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Members</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-gray-200">
                <Image
                  src={member.photo}
                  alt={`${member.name} ${member.lastName}`}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-lg font-bold text-gray-800">
                {member.name} <span className="block">{member.lastName}</span>
              </h2>
              <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
