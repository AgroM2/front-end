
const Banner = () => {
  return (
    <div className="w-full h-screen object-fill flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/imgs/SoybeanPlantation.jpg')" }}>
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