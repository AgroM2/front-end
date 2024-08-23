// 'use client';
// import { useState } from "react";
// import Image from "next/image";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="header">
//       <div className="flex justify-between items-center">
//         <a href="#home" rel="noopener noreferrer">
//           <Image
//             src="/icons/agrom2.svg"
//             alt="Agrom2 Logo"
//             width={100}
//             height={24}
//             priority
//           />
//         </a>

//         <div className="lg:hidden">
//           <button
//             onClick={toggleMenu}
//             className="focus:outline-none"
//           >
//             {/* Ícone do hambúrguer */}
//             <svg
//               className="w-8 h-8 text-black"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Menu de Navegação */}
//       <nav
//         className={`overflow-hidden transition-all duration-700 ease-in-out transform ${
//           isOpen ? "opacity-100 max-h-[500px]" : "max-h-0 opacity-0"
//         } lg:flex justify-between items-center space-y-4 lg:space-y-0 lg:space-x-16 mt-4 lg:mt-0`}
//       >

//         <a
//           className="block text-black font-bold text-xl"
//           href="#footer"
//         >
//           Sobre a Agro m²
//         </a>
//         <a
//           className="block text-black font-bold text-xl"
//           href="https://www.instagram.com/agro.m2/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Blog
//         </a>
//         <a
//           className="block text-black font-bold text-xl border border-black p-2"
//           href="https://form.respondi.app/ciDdC3ou"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Experimente Primeiro
//         </a>
//       </nav>
//     </header>
//   );
// };

// export default Header;


'use client';
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="flex justify-between items-center">
        <a href="#home" rel="noopener noreferrer">
          <Image
            src="/icons/agrom2.svg"
            alt="Agrom2 Logo"
            width={100}
            height={24}
            priority
          />
        </a>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
          >
            {/* Ícone do hambúrguer */}
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu de Navegação */}
      <nav
        className={`overflow-hidden transition-all duration-700 ease-in-out transform ${
          isOpen ? "opacity-100 max-h-[500px]" : "max-h-0 opacity-0"
        } lg:opacity-100 lg:max-h-none lg:flex justify-between items-center space-y-4 lg:space-y-0 lg:space-x-16 mt-4 lg:mt-0`}
      >
        <a
          className="block text-black font-bold text-xl"
          href="#footer"
        >
          Sobre a Agro m²
        </a>
        <a
          className="block text-black font-bold text-xl"
          href="https://www.instagram.com/agro.m2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <a
          className="block text-black font-bold text-xl border border-black p-2"
          href="https://form.respondi.app/ciDdC3ou"
          target="_blank"
          rel="noopener noreferrer"
        >
          Experimente Primeiro
        </a>
      </nav>
    </header>
  );
};

export default Header;
