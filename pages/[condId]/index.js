import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Item from "../../components/Item";
import classes from "../../styles/Condominium.module.css";

export async function getServerSideProps(context) {
  const docRef = doc(db, "Condominiums", context.params.condId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = {
      ImageUrl: docSnap.data().ImageUrl,
      Docs: [],
      Reservas: [],
    };
    const docsSnapshot = await getDocs(
      collection(db, "Condominiums", context.params.condId, "Docs")
    );
    docsSnapshot.forEach((doc) => {
      data.Docs.push(doc.data());
    });
    const reservasSnapshot = await getDocs(
      collection(db, "Condominiums", context.params.condId, "Reservas")
    );
    reservasSnapshot.forEach((res) => {
      data.Reservas.push(res.data());
    });
    return {
      props: data,
    };
  }

  return {
    notFound: true,
  };
}

export default function Condominium(props) {
  const [dc, setDc] = useState(true);
  const [dt, setDt] = useState(false);

  useEffect(() => {
    console.log(props.Docs);
  }, []);

  return (
    <div className={classes.condominium}>
      <div className={classes.condominium_img} />
      <div className={classes.condominium_main}>
        <div className={classes.condominium_main_menu}>
          <div
            className={classes.condominium_main_menu_option}
            onClick={() => {
              setDt(false);
              setDc(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={30}
              viewBox="0 0 24 24"
              width={30}
              fill="#fff"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
            </svg>
            <div className={classes.condominium_main_menu_option_label}>
              <p
                className={
                  dc
                    ? classes.condominium_main_menu_option_p_active
                    : classes.condominium_main_menu_option_p
                }
              >
                Documentos
              </p>
            </div>
          </div>
          <div
            className={classes.condominium_main_menu_option}
            onClick={() => {
              setDt(true);
              setDc(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={30}
              viewBox="0 0 24 24"
              width={30}
              fill="#fff"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11z" />
            </svg>
            <div className={classes.condominium_main_menu_option_label}>
              <p
                className={
                  dt
                    ? classes.condominium_main_menu_option_p_active
                    : classes.condominium_main_menu_option_p
                }
              >
                Reservas
              </p>
            </div>
          </div>
        </div>
        <div className={classes.condominium_main_content}>
          {dc ? (
            !props.Docs.length ? (
              <p>Nenhum documento disponível :(</p>
            ) : (
              props.Docs.map((doc) => (
                <Item
                  key={doc.docId}
                  id={doc.docId}
                  description={doc.desc}
                  date={doc.date}
                  dc={doc.dc}
                />
              ))
            )
          ) : !props.Reservas.length ? (
            <p>Nenhuma reserva disponível :(</p>
          ) : (
            props.Reservas.map((doc) => (
              <Item
                key={doc.docId}
                id={doc.docId}
                description={doc.desc}
                date={doc.date}
                dc={doc.dc}
              />
            ))
          )}
        </div>
        <div className={classes.condominium_main_reserve}>
          <div className={classes.condominium_main_reserve_title}>
            <p>Solicitar Reserva</p>
          </div>
          <div className={classes.condominium_main_reserve_inputs}>
            <div className={classes.condominium_main_reserve_inputarea}>
              <input
                type="text"
                className={classes.condominium_main_reserve_inputarea_input}
                placeholder="E-mail"
                maxLength={100}
                /*onChange={(e) => {
                  if (e.target.value === "") setLb("#fff");
                  else setLb("#2E4DA7");
                  setCode(e.target.value);
                }}*/
              />
            </div>
            <div className={classes.condominium_main_reserve_inputarea}>
              <input
                type="text"
                className={classes.condominium_main_reserve_inputarea_input}
                placeholder="Descrição"
                maxLength={100}
                /*onChange={(e) => {
                  if (e.target.value === "") setLb("#fff");
                  else setLb("#2E4DA7");
                  setCode(e.target.value);
                }}*/
              />
            </div>
            <div className={classes.condominium_main_reserve_inputarea}>
              <input
                type="text"
                className={classes.condominium_main_reserve_inputarea_input}
                placeholder="Data (Ex: 25/02/2001)"
                maxLength={10}
                /*onChange={(e) => {
                  if (e.target.value === "") setLb("#fff");
                  else setLb("#2E4DA7");
                  setCode(e.target.value);
                }}*/
              />
            </div>
          </div>
          <div className={classes.condominium_main_reserve_button_area}>
            <div className={classes.condominium_main_reserve_button}>
              Solicitar
            </div>
          </div>
        </div>
        <div className={classes.condominium_main_parceiros}></div>
      </div>
    </div>
  );
}
