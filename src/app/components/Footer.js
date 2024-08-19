import Image from "next/image";
import SupportInfo from "./SupportInfo"
import ContactInfo from "./ContractInfo";

const Footer = () => {
    return (
        <footer id={"footer"} className="bg-[#132116] h-[640px] grid grid-col-5 grid-row-5">
        <div className="col-start-1 col-end-2 row-start-1 row-end-3 flex justify-center items-center">
          <a
              className="pointer-events-auto"
              href="#home"
            >
              <Image
                src="/icons/agrom2.svg"
                alt="Agrom2 Logo"
                className="filter invert"
                width={150}
                height={24}
                priority
              />
            </a>
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-6 flex  items-center flex-col">
            <h1 className="font-bold text-3xl  pb-4 text-[#ECB417]">  
              Quem Somos
            </h1>
            <p className="min-w-64 max-w-96 ml-48 text-white text-justify">
            A Agro M2 é uma startup que utiliza tecnologia de ponta para transformar o setor agrícola. Com visão computacional, identificamos sintomas foliares na soja e otimizamos a aplicação de produtos químicos através de dados precisos e análises avançadas. Nosso foco em ciência de dados e inteligência artificial aumenta a eficiência e a produtividade das lavouras, garantindo rastreabilidade total desde a semente até a comercialização. Oferecemos transparência e controle em todas as etapas da produção. Participe como usuário beta do nosso software e aplicativo e ajude a moldar o futuro da agricultura. 
            <a 
              className="italic underline" 
              href="https://form.respondi.app/ciDdC3ou" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Experimente Primeiro.
            </a>
            </p>
        </div>
        <SupportInfo />
        <ContactInfo />
      </footer>
    );
}

export default Footer;