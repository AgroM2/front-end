const SupportInfo = () => {
    return (
        <div className="col-start-2 col-end-4 row-start-3 row-end-4 flex justify-center ">
            <div className="flex-col flex space-y-5">
                <h1 className="font-bold text-3xl text-[#ECB417]">Suporte</h1>
                {/* TODO <a className="text-white font-bold">FAQ's</a> */}
                <a className="font-bold text-white">Política de Privacidade</a>
                <a className="font-bold text-white">Termo & Condições</a>
            </div>
        </div>
    );
};

export default SupportInfo;