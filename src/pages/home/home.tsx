import ListaPostagens from "../../componentes/postagens/listapostagens/ListarPostagens";
import ModalPostagem from "../../componentes/postagens/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-blue-400 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">
              Expresse aqui seus pensamentos, sentimentos e opniões
            </p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalPostagem />
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

      <ListaPostagens />
    </>
  );
}

export default Home;
