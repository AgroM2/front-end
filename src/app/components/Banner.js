import Image from "next/image";

const Banner = () => {
    return (
      <div>
        <div className="h-[1920px] absolute w-full min-h-screen -z-10">
          <Image
            className="relative"
            src="/imgs/SoybeanPlantation.jpg"
            alt="Background SoybeanPlantation"
            fill
            priority
          />
          <div className="absolute inset-0 bg-[#ECB417] opacity-40"></div>
        </div>
        <aside className="pl-10 grid grid-cols-4 grid-rows-4 gap-0">
          <h1 className="font-bold text-6xl col-start-1 col-end-3 row-start-2 row-end-2">
            Do Hectare ao<br/> 
            Metro Quadrado
          </h1>
          <p className="text-2xl pb-24 col-start-1 col-end-3 row-start-3 row-end-3">
            Inteligência Artificial e Ciência de Dados<br/> para produção inteligente de commodities.
          </p>
        </aside>
      </div>
    );
}

export default Banner;