import Image from "next/image";

const Services = () => {
  return (
    <div className="bg-white pt-10 pb-4 min-w-max">
      <div className="grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-2">
      
        <aside className="mb-8">
          <ul className="list-disc md:pl-20 text-4xl lg:text-5xl font-bold space-y-4">
            <li>Planejamento</li>
            <li>Plantio</li>
            <li>Monitoramento</li>
            <li>Colheita</li>
            <li>Pós Colheita</li>
            <li>Comercilização</li>          
          </ul>
          <p className="pl-20 text-2xl mt-4">
            {/* Saiba mais sobre nossos serviços */}
          </p>
        </aside>

        <div className="flex justify-center">
          <div className=" 2xl:transform 2xl:-translate-y-64 2xl:-translate-x-10">
            <Image
              src="/imgs/FolhaFitoxidade.png"
              alt="Folha que apresenta fitoxidade"
              className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"
              width={200}
              height={300}
            />
            <div className="z-10 border-black border-2 w-24 h-24 transform -translate-x-12 -translate-y-12"/> 
          </div>
        </div>

        <div className="flex justify-center 2xl:justify-start 2xl:transform  2xl:-translate-x-52">
          <div className="">
            <Image
              src="/imgs/FolhaFerrugemDoColmo.png"
              alt="Folha que apresenta Ferrugem do colmo"
              className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"
              width={200}
              height={300}
            />
            <div className="z-10 border-black border-2 w-24 h-24 transform -translate-x-12 -translate-y-12" /> 
          </div>
        </div>

        <div className="flex flex-col items-center 2xl:col-start-2 2xl:row-start-1 2xl:transform  2xl:translate-y-28">
          <Image
            className="border-8 border-black rounded-lg  w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[350px] lg:h-[350px] 2xl:w-[700px] 2xl:h-[700px]"
            src="/imgs/FazendeiroTirandoFoto.png"
            alt="Fazendeiro tirando foto da soja"
            width={400}
            height={300}
          />
        </div>

      </div>
    </div>
  );
};

export default Services;
