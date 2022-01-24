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
            <Image src={"/logo.png"} width={200} height={86} />
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
              <Image
                className={classes.home_top_left_buttons_button_image}
                src={"/sm_icons_blk-03.svg"}
                width={35}
                height={35}
                alt="Whatsapp"
              />
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
              <Image
                className={classes.home_top_left_buttons_button_image}
                src={"/sm_icons_blk-02.svg"}
                width={35}
                height={35}
                alt="Facebook"
              />
            </div>
            <div className={classes.home_top_left_buttons_button}>
              <Image
                className={classes.home_top_left_buttons_button_image}
                src={"/sm_icons_blk-01.svg"}
                width={35}
                height={35}
                alt="Instagram"
              />
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
