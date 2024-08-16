import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between text-black">

      <header className="z-50 fixed bg-yellow-400  w-full items-center justify-evenly font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t  from-yellow-400 via-yellow-400 lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-auto flex place-items-center gap-2 p-8"
            href="https//agrom2.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* By{" "} */}
            <Image
              src="/agrom2.svg"
              alt="Agrom2 Logo"
              className="dark"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        <div>
          <a className="pointer-events-auto fixed left-0 top-0 flex w-full justify-center pb-8 pt-8 font-bold text-xl backdrop-blur-2xl  lg:static lg:w-auto">
            Soluções&nbsp;
            <Image
              src="/arrowDown.svg"
              alt="Arrow Down" 
              className="dark" 
              width={15}
              height={20}
            />
          </a>
        </div>
        <p className="pointer-events-auto fixed left-0 top-0 flex w-full justify-center pb-8 pt-8 font-bold text-xl backdrop-blur-2xl  lg:static lg:w-auto">
          Preços e taxas&nbsp;
          <Image
            src="/arrowDown.svg"
            alt="Arrow Down" 
            className="dark" 
            width={15}
            height={20}
          />
        </p>
        <p className="pointer-events-auto fixed left-0 top-0 flex w-full justify-center pb-8 pt-8  font-bold text-xl backdrop-blur-2xl  lg:static lg:w-auto">
          Sobre a Agro m²&nbsp;
          <Image
            src="/arrowDown.svg"
            alt="Arrow Down" 
            className="dark" 
            width={15}
            height={20}
          />
        </p>
        <p className="pointer-events-auto fixed left-0 top-0 flex w-full justify-center pb-8 pt-8 pr-8 font-bold text-xl backdrop-blur-2xl  lg:static lg:w-auto">
          Blog&nbsp;
          <Image
            src="/arrowDown.svg"
            alt="Arrow Down" 
            className="dark" 
            width={15}
            height={20}
          />
        </p>
      </header>  

      <div>
        <div className="h-[1920px] absolute w-full min-h-screen -z-10">
          <Image
            className="relative"
            src="/img/SoybeanPlantation.jpeg"
            alt="Background SoybeanPlantation"
            fill
            priority
          />
          <div className="absolute inset-0 bg-yellow-500 opacity-40"></div>
        </div>
        <aside className="pl-10 grid grid-cols-4 grid-rows-4 gap-0">
          <h1 className="font-bold text-6xl col-start-1 col-end-3 row-start-2 row-end-2">
            Do hectare ao<br/> 
            metro quadrado
          </h1>
          <p className="text-2xl pb-24 col-start-1 col-end-3 row-start-3 row-end-3">
            Tomada de decisão rápida e integrada é o<br/>
            que confere competitividade a agricultura<br/> 
            brasileira.
          </p>
        </aside>
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
              src="/img/FolhaFitoxidade.png"
              alt="Folha que apresenta fitoxidade"
              width={200}
              height={300}
              />
              <div className="z-10 border-black border-2 w-24 h-24 transform -translate-x-12 -translate-y-12" /> 
          </div>
          <div className="pt-20 col-start-3 col-end-4 row-start-1 row-end-3">
            <Image 
              src="/img/FolhaFerrugemDoColmo.png"
              alt="Folha que apresenta Ferrugem do colmo"
              width={200}
              height={300}
            />
            <div className="z-10 border-black border-2 w-24 h-24 transform -translate-x-12 -translate-y-12" /> 
          </div>
          <div className="col-start-4 col-end-6 row-start-2 row-end-6 -translate-x-12">
            <Image 
              className="border-8 border-black rounded-lg"
              src="/img/FazendeiroTirandoFoto.jpg"
              alt="Fazendeiro tirando foto da soja"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>

      <footer className="bg-[#132116] h-[640px] grid grid-col-5 grid-row-5">
        <div className="col-start-1 col-end-2 row-start-1 row-end-3 flex justify-center items-center">
          <a
              className="pointer-events-auto"
              href="https//agrom2.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/agrom2.svg"
                alt="Agrom2 Logo"
                className="filter invert"
                width={150}
                height={24}
                priority
              />
            </a>
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-6 flex justify-center items-center flex-col">
            <h1 className="font-bold text-3xl -ml-16 text-[#ECB417]">  
              Quem Somos
            </h1>
            <p className="w-64 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
        </div>
        <div className="col-start-3 col-end-4 row-start-3 row-end-4 flex justify-center ">
          <div className="flex-col flex space-y-5">
            <h1 className="font-bold text-3xl text-[#ECB417]">  
              Suporte
            </h1>
            <a className="w-64 text-white font-bold">
              FAQ's
            </a>
            <a className="font-bold text-white">
              Política de Privacidade
            </a>
            <a className="font-bold text-white">
              Termo & Condições
            </a>
          </div>
        </div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-6 flex justify-center flex-col space-y-5 ">
          <h1 className="font-bold text-3xl text-[#ECB417]">  
            Contato
          </h1>
          <div className="flex">
            <p className="pr-1 text-white">Telefone: </p>
            <p className="text-white">+55 65 9272-9267</p>
          </div>
          <div className="flex">
            <p className="pr-1 text-white">Email: </p>
            <p className="text-white">ighor@agrom2.com.br</p>
          </div>
          <div className="flex">
            <p className="pr-1 text-white">Endereço: </p>
            <p className="max-w-[317px] max-h-[100px] overflow-hidden text-white">Edifício FAMATO, R. Eng. Edgar Prado Arze, S/N - Centro Político Administrativo, Cuiabá - MT, 78050-970</p>
          </div>
          <div className="flex">
            <p className="pr-1  text-white">CNPJ: </p>
            <p className="text-white">46.082.930/0001-32</p>
          </div>      
        </div>
      </footer>
  
    </main>
  );
}
