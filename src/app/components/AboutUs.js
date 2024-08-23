const AboutUs = () => {
    return (
      <div className="md:col-start-1 md:row-start-2">
        <h1 className="font-bold text-3xl text-[#ECB417] pb-4 pt-4 flex justify-center">
          Quem Somos
        </h1>
        <p className="pr-8 pl-8 text-white text-justify md:pb-10">
            A Agro M2 é uma startup que utiliza 
            tecnologia de ponta para transformar o 
            setor agrícola. Com visão computacional, 
            identificamos sintomas foliares na soja e 
            otimizamos a aplicação de produtos químicos 
            através de dados precisos e análises avançadas. 
            Nosso foco em ciência de dados e inteligência 
            artificial aumenta a eficiência e a produtividade 
            das lavouras, garantindo rastreabilidade total desde 
            a semente até a comercialização. Oferecemos transparência e
            controle em todas as etapas da produção. 
            Participe como usuário beta do nosso software 
            e aplicativo e ajude a moldar o futuro da agricultura. 
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
    );
  };
  
  export default AboutUs;
