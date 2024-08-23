import Image from "next/image";

const ServiceImage = ({ src, alt, imageClass, containerClass }) => {
  return (
    <div className={`flex justify-center ${containerClass}`}>
      <div>
        <Image
          src={src}
          alt={alt}
          className={imageClass}
          width={200}
          height={300}
        />
        <div className="z-10 border-black border-2 w-24 h-24 transform -translate-x-12 -translate-y-12" />
      </div>
    </div>
  );
};

export default ServiceImage;