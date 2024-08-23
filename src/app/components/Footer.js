import SupportInfo from "./SupportInfo";
import ContactInfo from "./ContractInfo";
import Logo from "./Logo";
import AboutUs from "./AboutUs";

const Footer = () => {
    return (
        <footer id={"footer"} className="bg-[#132116] h-auto w-screen pt-10">
          <div className="grid grid-cols-1 md:grid-row-4 md:grid-cols-2 lg:grid-cols-3">
            
            <Logo />
            <AboutUs />
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