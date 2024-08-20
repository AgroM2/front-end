import Image from "next/image";
import SupportInfo from "./SupportInfo"
import ContactInfo from "./ContractInfo";

const Footer = () => {
    return (
        <footer id={"footer"} className="bg-[#132116] h-auto w-screen pt-10">
          <div className="grid grid-cols-1 md:grid-row-4 md:grid-cols-2 lg:grid-cols-3">
            
            <div className="flex justify-center items-center md:col-start-1 md:row-start-1">
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
            
            <div className="md:col-start-1 md:row-start-2">
              <h1 className="font-bold text-3xl text-[#ECB417] pb-4 pt-4 flex justify-center">  
                Quem Somos
              </h1>
              <p className=" pr-8 pl-8 text-white text-justify">
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
            <div className="flex justify-center pt-4 lg:row-start-1 lg:row-end-2 lg:col-start-2">
              <SupportInfo />
            </div>
            <div className="flex justify-center ml-20 pt-4 lg:row-start-1 lg:row-end-3">
              <ContactInfo />
            </div>
          </div>

        </footer>
    );
}

export default Footer;