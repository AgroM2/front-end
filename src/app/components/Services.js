import Image from "next/image";

const Services = () => {
    return (
        <div className="h-[920px] grid grid-cols-5 grid-rows-6 gap-0 bg-white">
        <aside className="col-start-1 col-end-3 row-start-2 row-end-4 ">
          <ul className="list-disc pl-20  w-6/12 text-5xl font-bold">
            <li>Análise</li>
            <li>Fornecimento</li>
            <li>Entrega</li>
          </ul>
          <p className="pl-10 text-2xl">Saiba mais sobre nossos serviços</p>
        </aside>
        <div className="col-start-2 col-end-3 row-start-4 row-end-6">
          <Image 
            src="/imgs/FolhaFitoxidade.png"
            alt="Folha que apresenta fitoxidade"
            width={200}
            height={300}
            />
            <div className="z-10 border-black border-2 w-24 h-24 transform -translate-x-12 -translate-y-12" /> 
        </div>
        <div className="pt-20 col-start-3 col-end-4 row-start-1 row-end-3">
          <Image 
            src="/imgs/FolhaFerrugemDoColmo.png"
            alt="Folha que apresenta Ferrugem do colmo"
            width={200}
            height={300}
          />
          <div className="z-10 border-black border-2 w-24 h-24 transform -translate-x-12 -translate-y-12" /> 
        </div>
        <div className="col-start-4 col-end-6 row-start-2 row-end-6 -translate-x-12">
          <Image 
            className="border-8 border-black rounded-lg"
            src="/imgs/FazendeiroTirandoFoto.jpg"
            alt="Fazendeiro tirando foto da soja"
            width={700}
            height={700}
          />
        </div>
      </div>
    );
};

export default Services;