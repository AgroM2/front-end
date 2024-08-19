import Image from 'next/image';

const ContactInfo = () => {
    return (
        <div className="col-start-4 col-end-5 row-start-3 row-end-3 flex  flex-col space-y-5 ">
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
                <p className="pr-1  text-white">CNPJ: </p>
                <p className="text-white">46.082.930/0001-32</p>
            </div>
            <div className="flex">
                <p className="pr-1 text-white">Endereço: </p>
                <p className="max-w-[317px] max-h-[100px] overflow-hidden text-white">Av. Pres. Getúlio Vargas, 426 - Instituto Senai de Tecnologia, 2° Andar, Senaihub - Centro Norte, Cuiabá - MT, 78005-370</p>
            </div>
            <div className="flex space-x-4">
                <a 
                    href="https://wa.me/556592729267?text=Oi,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20Agro%20M2."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/icons/whatsAppIcon.svg"
                        alt="Ícone WhatsApp"
                        width={24}
                        height={24}
                    />  
                </a>
                <a 
                    href="https://www.instagram.com/agro.m2/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/icons/instagramIcon.svg"
                        alt="Ícone Instagram"
                        width={24}
                        height={24}
                        
                    />  
                </a>
                <a 
                    href="https://www.youtube.com/@agrom2658"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/icons/youtubeIcon.svg"
                        alt="Ícone Youtube"
                        width={24}
                        height={24}
                    />  
                </a>
                <a 
                    href="https://www.linkedin.com/company/agro-m2?originalSubdomain=br"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/icons/linkedinIcon.svg"
                        alt="Ícone Linkedin"
                        width={24}
                        height={24}
                        
                    />  
                </a>
            </div>      
        </div>
    );
};

export default ContactInfo;