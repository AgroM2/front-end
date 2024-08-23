import ServiceList from "./ServiceList";
import ServiceImage from "./ServiceImage";
import ServiceMainImage from "./ServiceMainImage";

const Services = () => {
  return (
    <div className="bg-white pt-10 pb-4 min-w-max">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
        <ServiceList />
        <ServiceImage
          src="/imgs/FolhaFitoxidade.png"
          alt="Folha que apresenta fitoxidade"
          imageClass="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"
          containerClass="hidden md:flex  2xl:transform 2xl:-translate-y-64 2xl:translate-x-20"
        />
        <ServiceImage
          src="/imgs/FolhaFerrugemDoColmo.png"
          alt="Folha que apresenta Ferrugem do colmo"
          imageClass="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"
          containerClass="hidden md:flex justify-center 2xl:justify-start 2xl:transform  2xl:-translate-x-52"
        />
        <ServiceMainImage />
      </div>
    </div>
  );
};

export default Services;
