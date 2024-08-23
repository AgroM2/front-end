import Image from "next/image";

const Logo = () => {
  return (
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
  );
};

export default Logo;
