function Home() {
  return (
    <>
      <div className="bg-blue-400 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vindos!</h2>
            <p className="text-xl">
              Expresse aqui seus pensamentos, sentimentos e opniões
            </p>

            <div className="flex justify-around gap-4">
              <div
                className="rounded text-white 
                                          border-white border-solid border-2 py-2 px-4"
              >
                Nova Postagem
              </div>
            </div>
          </div>

          <div className="flex">
            <img
              src="src/assets/fotos/Emoji (1).jpg"
              alt="Imagem Página Home"
              className="w-full h-auto object-left"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
