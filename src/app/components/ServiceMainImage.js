import Image from "next/image";

const ServiceMainImage = () => {
  return (
    <div className="flex flex-col items-center 2xl:col-start-2 2xl:row-start-1 2xl:transform  2xl:translate-y-28">
      <Image
        className="filter shadow-black shadow-md border-black border md:border-8 md:border-black rounded-lg w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[350px] lg:h-[350px] 2xl:w-[700px] 2xl:h-[700px]"
        src="/imgs/FazendeiroTirandoFoto.png"
        alt="Fazendeiro tirando foto da soja"
        width={400}
        height={300}
      />
    </div>
  );
};

export default ServiceMainImage;