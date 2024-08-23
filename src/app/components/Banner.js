
const Banner = () => {
  return (
    <div className="w-full h-screen object-fill flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/imgs/Banner.webp')" }}>
      <div className="banner_bg">
        <h1 className="banner_label">
          Do Hectare ao<br /> 
          Metro Quadrado
        </h1>
        <p className="banner_content">
          Inteligência Artificial e Ciência de Dados<br /> para produção inteligente de commodities.
        </p>
      </div>
    </div>
  );
}

export default Banner;