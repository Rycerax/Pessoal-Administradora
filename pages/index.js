import Head from "next/head";
import Image from "next/image";
import classes from "../styles/Home.module.css";

export default function Home() {
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
          <div className={classes.home_top_left_access}>
            <div className={classes.home_top_left_access_inputarea}>
              <input
                type="text"
                className={classes.home_top_left_access_inputarea_input}
                placeholder="Código do condomínio, ex. MDC"
              />
            </div>
            <div className={classes.home_top_left_access_button}>Acessar</div>
          </div>
          <div className={classes.home_top_left_buttons}>
            <div className={classes.home_top_left_buttons_button}>
              <Image src={"/whatsapp.svg"} width={25} height={25} />
            </div>
            <div className={classes.home_top_left_buttons_button}>
              <Image src={"/facebook.svg"} width={25} height={25} />
            </div>
            <div className={classes.home_top_left_buttons_button}>
              <Image src={"/instagram.svg"} width={25} height={25} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.home_mid}></div>
      <div className={classes.home_bottom}></div>
    </div>
  );
}
