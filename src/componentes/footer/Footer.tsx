import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  let data = new Date().getFullYear();

  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div className="flex justify-center bg-sky-700 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">Blog Pessoal | Copyright: {data}</p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/yasmin-da-silva-pontes-011201165/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              <LinkedinLogo size={30} weight="bold" />
            </a>
            <a
              href="https://www.instagram.com/yasmin.ps_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              <InstagramLogo size={30} weight="bold" />
            </a>
            <a
              href="https://github.com/Yasminpontess"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors duration-300"
              target="_blank"
            >
              <GithubLogo size={30} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    );
  }
  return <>{component}</>;
}

export default Footer;
