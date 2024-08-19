import Image from "next/image";

const Header = () => {
    return (
        <header className="header">
                <a
                    className="header_logo_style"
                    href="#home"
                    rel="noopener noreferrer"
                >
                    <Image
                    src="/icons/agrom2.svg"
                    alt="Agrom2 Logo"
                    className="dark"
                    width={100}
                    height={24}
                    priority
                    />
                </a>
            <nav className="flex space-x-16 mr-11 justify-end w-full items-center">
                {/* TODO <a className="pointer-events-auto flex font-bold text-xl items-center backdrop-blur-2xl  lg:static lg:w-auto">
                    Soluções&nbsp;
                    <Image
                        src="/icons/arrowDown.svg"
                        alt="Arrow Down" 
                        className="dark" 
                        width={15}
                        height={20}
                        style={{width: '15px', height: '20px'}}
                    />
                </a> */}
                
                {/* <a className="pointer-events-auto flex font-bold text-xl backdrop-blur-2xl  lg:static lg:w-auto">
                    Preços e Taxas&nbsp;
                    <Image
                    src="/icons/arrowDown.svg"
                    alt="Arrow Down" 
                    className="dark" 
                    width={15}
                    height={20}
                    />
                </a> */}
                <a 
                    className="pointer-events-auto flex   font-bold text-xl items-center backdrop-blur-2xl  lg:static lg:w-auto"
                    href="#footer"
                >
                Sobre a Agro m²&nbsp;
                <Image
                    src="/icons/arrowDown.svg"
                    alt="Arrow Down" 
                    className="dark" 
                    width={15}
                    height={20}
                    style={{width: '15px', height: '20px'}}
                />
                </a>
                
                <a 
                    className="pointer-events-auto  flex  font-bold text-xl items-center   lg:static lg:w-auto"
                    href="https://www.instagram.com/agro.m2/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Blog&nbsp;
                <Image
                    src="/icons/arrowDown.svg"
                    alt="Arrow Down" 
                    className="dark" 
                    width={15}
                    height={20}
                    style={{width: '15px', height: '20px'}}
                />
                </a>
                <a 
                    className="pointer-events-auto flex font-bold text-xl items-center  p-2 lg:static lg:w-auto border border-black"
                    href="https://form.respondi.app/ciDdC3ou"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Experimente Primeiro&nbsp;
                    <Image
                        src="/icons/arrowDown.svg"
                        alt="Arrow Down" 
                        className="dark" 
                        width={15}
                        height={20}
                        style={{width: '15px', height: '20px'}}
                    />
                </a>
            </nav>
            
      </header>  
    );
};

export default Header;