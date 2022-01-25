import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import classes from "../styles/Home.module.css";

export default function Home() {
  const [lb, setLb] = useState("#fff");
  const [code, setCode] = useState("");

  return (
    <div className={classes.home}>
      <Head>
        <title>Pessoal Administradora</title>
      </Head>
      <div className={classes.home_top}>
        <div className={classes.home_top_image} />
        <div className={classes.home_top_left}>
          <div className={classes.home_top_left_logo}>
            <Image src={"/logo.png"} layout="fill" objectFit="contain" />
          </div>
          <h3
            className={classes.home_top_left_access_label}
            style={{ color: lb }}
          >
            Código do condomínio
          </h3>
          <div className={classes.home_top_left_access}>
            <div className={classes.home_top_left_access_inputarea}>
              <input
                type="text"
                className={classes.home_top_left_access_inputarea_input}
                placeholder="Código do condomínio"
                maxLength={4}
                onChange={(e) => {
                  if (e.target.value === "") setLb("#fff");
                  else setLb("#1f1f1f");
                  setCode(e.target.value);
                }}
              />
            </div>
            <div
              className={classes.home_top_left_access_button}
              onClick={() => console.log(code)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                width={27}
                height={27}
                viewBox="0 0 24 24"
                fill="#195fcd"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z" />
                </g>
              </svg>
            </div>
          </div>
          <div className={classes.home_top_left_code}>
            <a
              className={classes.home_top_left_code_link}
              onClick={() => {
                window.open("https://wa.me/message/PNBOUA7VERLPG1", "_blank");
              }}
            >
              Esqueceu o código?
            </a>
          </div>
          <div className={classes.home_top_left_options}>
            <div
              className={classes.home_top_left_options_option}
              onClick={() =>
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }
            >
              <p className={classes.home_top_left_options_option_label}>
                Serviços
              </p>
            </div>
            <div
              className={classes.home_top_left_options_option}
              onClick={() => {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }}
            >
              <p className={classes.home_top_left_options_option_label}>
                Sobre Nós
              </p>
            </div>
          </div>
          <div className={classes.home_top_left_buttons}>
            <div
              className={classes.home_top_left_buttons_button}
              onClick={() => {
                window.open("https://wa.me/message/PNBOUA7VERLPG1", "_blank");
              }}
            >
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width={35}
                height={35}
                fill="#195fcd"
              >
                <path d="M50,20.68A29.32,29.32,0,1,0,79.32,50,29.32,29.32,0,0,0,50,20.68Zm0,53.59A24.28,24.28,0,1,1,74.27,50,24.27,24.27,0,0,1,50,74.27Z" />
                <path d="M50.55,60.43a38.91,38.91,0,0,0,3.69,1.36,8.79,8.79,0,0,0,4.09.26c1.24-.19,3.83-1.57,4.37-3.08a5.47,5.47,0,0,0,.38-3.09c-.16-.27-.59-.43-1.24-.75S58,53.23,57.4,53s-1-.33-1.45.32-1.68,2.11-2.06,2.54-.75.49-1.4.16a17.5,17.5,0,0,1-5.22-3.21,19.41,19.41,0,0,1-3.6-4.5c-.38-.64,0-1,.28-1.32s.65-.76,1-1.14a4.23,4.23,0,0,0,.66-1.07,1.19,1.19,0,0,0-.06-1.14c-.16-.32-1.46-3.52-2-4.81s-1.06-1.1-1.45-1.12l-1.25,0a2.39,2.39,0,0,0-1.73.81,7.3,7.3,0,0,0-2.27,5.41c0,3.19,2.33,6.28,2.65,6.71S44,57.62,50.55,60.43Z" />
                <polygon points="31.56 71.61 25.72 64.52 25.72 79.32 50 79.32 41.13 76.17 31.56 71.61" />
              </svg>
            </div>
            <div
              className={classes.home_top_left_buttons_button}
              onClick={() => {
                window.open(
                  "https://www.facebook.com/peregrinacapeloconsultoriajuridica",
                  "_blank"
                );
              }}
            >
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width={35}
                height={35}
                fill="#195fcd"
              >
                <path d="M54.17,75.07H44.25V50.35H37.5v-8h6.75V36.58c0-6.78,3-11.65,12.88-11.65,2.09,0,5.37.42,5.37.42v7.48H59.05c-3.51,0-4.88,1.06-4.88,4v5.46h8.2l-.73,8H54.17Z" />
              </svg>
            </div>
            <div className={classes.home_top_left_buttons_button}>
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width={35}
                height={35}
                fill="#195fcd"
              >
                <path d="M62.52,20.73h-25A16.75,16.75,0,0,0,20.73,37.48v25A16.75,16.75,0,0,0,37.48,79.27h25A16.75,16.75,0,0,0,79.27,62.52v-25A16.75,16.75,0,0,0,62.52,20.73ZM74,60.94a13,13,0,0,1-13,13H39.06a13,13,0,0,1-13-13V39.06a13,13,0,0,1,13-13H60.94a13,13,0,0,1,13,13Z" />
                <path d="M50,35A15,15,0,1,0,65,50,15,15,0,0,0,50,35Zm0,24.84A9.81,9.81,0,1,1,59.81,50,9.81,9.81,0,0,1,50,59.81Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.home_mid}>
        <div className={classes.home_mid_title}>
          <h2 className={classes.home_mid_title_label}>Nossos Serviços</h2>
        </div>
        <div className={classes.home_mid_services}>
          <div className={classes.home_mid_service}>
            <Image src={"/ap.svg"} width={50} height={50} alt="Condomínios" />
            <h1 className={classes.home_mid_service_label}>
              Gestão Profissional de Condomínios
            </h1>
          </div>
          <div className={classes.home_mid_service}>
            <Image src={"/dc.svg"} width={50} height={50} alt="Documentos" />
            <h1 className={classes.home_mid_service_label}>
              Disponibilização de Documentos
            </h1>
          </div>
          <div className={classes.home_mid_service}>
            <Image src={"/dt.svg"} width={50} height={50} alt="Eventos" />
            <h1 className={classes.home_mid_service_label}>
              Reserva de Áreas Comuns
            </h1>
          </div>
          <div className={classes.home_mid_service}>
            <Image src={"/pc.svg"} width={50} height={50} alt="Mural" />
            <h1 className={classes.home_mid_service_label}>
              Mural de Notícias Digital
            </h1>
          </div>
          <div className={classes.home_mid_service}>
            <Image src={"/bl.svg"} width={50} height={50} alt="Acessoria" />
            <h1 className={classes.home_mid_service_label}>
              Consultoria e Assessoria Jurídica
            </h1>
          </div>
        </div>
      </div>
      <div className={classes.home_bottom}>
        <div className={classes.home_bottom_title}>
          <h2 className={classes.home_bottom_title_label}>Sobre Nós</h2>
        </div>
        <div className={classes.home_bottom_description}>O texto vai aqui</div>
        <div className={classes.home_bottom_parceiros}>
          <p>Parceiros</p>
          <div className={classes.home_bottom_parceiros_imgs}>
            <div className={classes.home_bottom_parceiros_imgs_img}>
              <Image
                src={"/pc.png"}
                width={100}
                height={50}
                alt="Peregrina Capelo Advocacia"
              />
            </div>
            <div className={classes.home_bottom_parceiros_imgs_img}>
              <Image
                src={"/ra.png"}
                width={100}
                height={50}
                alt="Ricardo Araújo Advocacia"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.home_footer}>
        <p>© 2022 Pessoal Administradora.</p>
        <p>Designed by @Kolski & @rafaelcapeloo</p>
      </div>
    </div>
  );
}
