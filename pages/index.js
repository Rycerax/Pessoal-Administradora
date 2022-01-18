import Head from "next/head";
import Image from "next/image";
import { useState } from "react/cjs/react.development";
import classes from "../styles/Home.module.css";

export default function Home() {
  const [wp, setWp] = useState(false);
  const [fb, setFb] = useState(false);
  const [it, setIt] = useState(false);
  const [lb, setLb] = useState("#1f1f1f");
  const [code, setCode] = useState("");
  return (
    <div className={classes.home}>
      <Head>
        <title>Pessoal Administradora</title>
      </Head>
      <div className={classes.home_top}>
        <div className={classes.home_top_left}>
          <div className={classes.home_top_left_logo}>
            <h1>Logo</h1>
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
                placeholder="Código do condomínio, ex. MDC"
                maxLength={4}
                onChange={(e) => {
                  if (e.target.value === "") setLb("#1f1f1f");
                  else setLb("#fff");
                  setCode(e.target.value);
                }}
              />
            </div>
            <div
              className={classes.home_top_left_access_button}
              onClick={() => console.log(code)}
            >
              Acessar
            </div>
          </div>
          <div className={classes.home_top_left_code}>
            <a
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
              onClick={() => console.log(code)}
            >
              Serviços
            </div>
            <div
              className={classes.home_top_left_options_option}
              onClick={() => console.log(code)}
            >
              Sobre Nós
            </div>
          </div>
          <div className={classes.home_top_left_buttons}>
            <div
              className={classes.home_top_left_buttons_button}
              onMouseEnter={() => setWp(true)}
              onMouseLeave={() => setWp(false)}
              onClick={() => {
                window.open("https://wa.me/message/PNBOUA7VERLPG1", "_blank");
              }}
            >
              {wp ? (
                <Image src={"/whatsapp_mod-01.svg"} width={75} height={75} />
              ) : (
                <Image src={"/whatsapp_mod-01.svg"} width={50} height={50} />
              )}
            </div>
            <div
              className={classes.home_top_left_buttons_button}
              onMouseEnter={() => setFb(true)}
              onMouseLeave={() => setFb(false)}
              onClick={() => {
                window.open(
                  "https://www.facebook.com/peregrinacapeloconsultoriajuridica",
                  "_blank"
                );
              }}
            >
              {fb ? (
                <Image src={"/facebook_mod-02.svg"} width={70} height={70} />
              ) : (
                <Image src={"/facebook_mod-02.svg"} width={45} height={45} />
              )}
            </div>
            <div className={classes.home_top_left_buttons_button}>
              <Image src={"/instagram.svg"} width={25} height={25} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.home_mid}>
        <div className={classes.home_mid_service}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={75}
            height={75}
            color="#fff"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          <h1 className={classes.home_mid_service_label}>
            ADMINISTRAÇÃO PROFISSIONAL DE CONDOMÍNIOS
          </h1>
        </div>
        <div className={classes.home_mid_service}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={75}
            height={75}
            color="#fff"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h1 className={classes.home_mid_service_label}>
            DISPONIBILIZAÇÃO DE DOCUMENTOS IMPORTANTES
          </h1>
        </div>
        <div className={classes.home_mid_service}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={75}
            height={75}
            color="#fff"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h1 className={classes.home_mid_service_label}>
            RESERVA DE ÁREAS COMUNS
          </h1>
        </div>
        <div className={classes.home_mid_service}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={75}
            height={75}
            color="#fff"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            />
          </svg>
          <h1 className={classes.home_mid_service_label}>
            MURAL DE NOTÍCIAS DIGITAL
          </h1>
        </div>
        <div className={classes.home_mid_service}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={70}
            height={70}
            color="#fff"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            />
          </svg>
          <h1 className={classes.home_mid_service_label}>
            ACESSORIA JURÍDICA PARA CONOMÍNIOS
          </h1>
        </div>
      </div>
      <div className={classes.home_bottom}></div>
    </div>
  );
}
