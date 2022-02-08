import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import classes from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { analytics } from "../firebase";

export default function Home() {
  const [lb, setLb] = useState("#fff");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className={classes.home}>
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
            <div
              className={classes.home_top_left_access_inputarea}
              style={{
                borderBottom: loading ? "solid 3px #2e4da7" : "solid 3px #fff",
              }}
            >
              <input
                onKeyUp={(e) => {
                  if (e.code === "Enter") {
                    setLoading(true);
                    router.push(`/cond/${code.toUpperCase()}`);
                  }
                }}
                type="text"
                className={classes.home_top_left_access_inputarea_input}
                placeholder="Código do condomínio"
                maxLength={4}
                onChange={(e) => {
                  if (e.target.value === "") setLb("#fff");
                  else setLb("#2E4DA7");
                  setCode(e.target.value);
                }}
              />
            </div>
            <div
              className={classes.home_top_left_access_button}
              onClick={() => {
                setLoading(true);
                router.push(`/cond/${code.toUpperCase()}`);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                width={27}
                height={27}
                viewBox="0 0 24 24"
                fill="#2E4DA7"
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
                fill="#2E4DA7"
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
                fill="#2E4DA7"
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
                fill="#2E4DA7"
              >
                <path d="M62.52,20.73h-25A16.75,16.75,0,0,0,20.73,37.48v25A16.75,16.75,0,0,0,37.48,79.27h25A16.75,16.75,0,0,0,79.27,62.52v-25A16.75,16.75,0,0,0,62.52,20.73ZM74,60.94a13,13,0,0,1-13,13H39.06a13,13,0,0,1-13-13V39.06a13,13,0,0,1,13-13H60.94a13,13,0,0,1,13,13Z" />
                <path d="M50,35A15,15,0,1,0,65,50,15,15,0,0,0,50,35Zm0,24.84A9.81,9.81,0,1,1,59.81,50,9.81,9.81,0,0,1,50,59.81Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.home_mid}>
        <div className={classes.home_mid_left}>
          <div className={classes.home_mid_title}>
            <h2 className={classes.home_mid_title_label}>Nossos Serviços</h2>
          </div>
          <div className={classes.home_mid_container}>
            <div className={classes.home_mid_services1}>
              <div
                className={classes.home_mid_service}
                style={{ margin: "55px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height={35}
                  viewBox="0 0 24 24"
                  width={35}
                  fill="#070b36"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <path d="M17,11V3H7v4H3v14h8v-4h2v4h8V11H17z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11z M11,15H9v-2h2V15z M11,11H9V9h2 V11z M11,7H9V5h2V7z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z M15,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z" />
                  </g>
                </svg>
                <h1 className={classes.home_mid_service_label}>
                  Gestão Profissional de Condomínios
                </h1>
              </div>
              <div
                className={classes.home_mid_service}
                style={{ margin: "55px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={35}
                  viewBox="0 0 24 24"
                  width={35}
                  fill="#070b36"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M14 2H4v20h16V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
                <h1 className={classes.home_mid_service_label}>
                  Disponibilização de Documentos Importantes
                </h1>
              </div>
            </div>
            <div className={classes.home_mid_services2}>
              <div
                className={classes.home_mid_service}
                style={{ margin: "55px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={35}
                  viewBox="0 0 24 24"
                  width={35}
                  fill="#070b36"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11z" />
                </svg>
                <h1 className={classes.home_mid_service_label}>
                  Reserva Digital de Áreas Comuns
                </h1>
              </div>
              <div
                className={classes.home_mid_service}
                style={{ margin: "55px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height={35}
                  viewBox="0 0 24 24"
                  width={35}
                  fill="#070b36"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <path d="M13,19V7.83c0.85-0.3,1.53-0.98,1.83-1.83H18l-2.78,6.49c-0.17,0.39-0.23,0.84-0.11,1.25c0.39,1.3,1.76,2.26,3.39,2.26 s3.01-0.96,3.39-2.26c0.12-0.41,0.06-0.86-0.11-1.25L19,6h1c0.55,0,1-0.45,1-1s-0.45-1-1-1h-5.17C14.42,2.83,13.31,2,12,2 S9.58,2.83,9.17,4L4,4C3.45,4,3,4.45,3,5c0,0.55,0.45,1,1,1h1l-2.78,6.49c-0.17,0.39-0.23,0.84-0.11,1.25 C2.49,15.04,3.87,16,5.5,16s3.01-0.96,3.39-2.26c0.12-0.41,0.06-0.86-0.11-1.25L6,6h3.17c0.3,0.85,0.98,1.53,1.83,1.83V19 M11,19H3 c-0.55,0-1,0.45-1,1s0.45,1,1,1h18c0.55,0,1-0.45,1-1s-0.45-1-1-1h-8 M20.37,13h-3.74l1.87-4.36L20.37,13z M7.37,13H3.63L5.5,8.64 L7.37,13z M12,6c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C13,5.55,12.55,6,12,6z" />
                  </g>
                </svg>
                <h1 className={classes.home_mid_service_label}>
                  Consultoria e Assessoria Jurídica
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.home_mid_right} />
      </div>
      <div className={classes.home_bottom}>
        <div className={classes.home_bottom_title}>
          <h2 className={classes.home_bottom_title_label}>Sobre Nós</h2>
        </div>
        <div className={classes.home_bottom_description}>
          A Pessoal Administradora é empresa especialista na prestação de
          Serviços de Consultoria e Assessoria para Condomínios, nas áreas
          administrativas, financeiro-contábeis e jurídicas. Com sede na Cidade
          de Fortaleza, somos uma empresa do ramo imobiliário atuando no mercado
          de Consultoria e Administração de Condomínios há 25(vinte e cinco)
          anos. Temos profissionais de alto gabarito que nos conferem um elevado
          nível da qualidade de nossos serviços e a satisfação de nossos
          clientes. 100% informatizada, detemos recursos e tecnologia para a
          realização de nossos serviços, minimizando as perdas financeiras de
          nossos clientes em decorrência de tempo/deslocamento. Através de nosso
          sistema online de comunicação, associado a uma programação logística,
          reduzimos em até 60% as tarefas, o tempo e o custo para a execução de
          nossos serviços, o que nos possibilita atender em tempo real nossos
          clientes.
        </div>
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
