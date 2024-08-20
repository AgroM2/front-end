import Image from "next/image";

// const Banner = () => {
//     return (
//       <div>
//         <div className="h-[1920px] absolute w-full -z-10 sm:w-[320px] ">
//           <Image
//             className="relative"
//             src="/imgs/SoybeanPlantation.jpg"
//             alt="Background SoybeanPlantation"
//             fill
//             priority
//           />
//           <div className="absolute inset-0 bg-[#ECB417] opacity-40"></div>
//         </div>
//         <aside className="pl-10 grid grid-cols-4 grid-rows-4 gap-0">
//           <h1 className="font-bold text-6xl col-start-1 col-end-3 row-start-2 row-end-2 ">
//             Do Hectare ao<br/> 
//             Metro Quadrado
//           </h1>
//           <p className="text-2xl pb-24 col-start-1 col-end-3 row-start-3 row-end-3">
//             Inteligência Artificial e Ciência de Dados<br/> para produção inteligente de commodities.
//           </p>
//         </aside>
//       </div>
//     );
// }

// export default Banner;

const Banner = () => {
  return (
    <div className="min-w-max h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/imgs/SoybeanPlantation.jpg')" }}>
      <div className="w-full h-full bg-[#ECB417] bg-opacity-40 flex flex-col items-start justify-center p-10">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Do Hectare ao<br /> 
          Metro Quadrado
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">
          Inteligência Artificial e Ciência de Dados<br /> para produção inteligente de commodities.
        </p>
      </div>
    </div>
  );
}

export default Banner;