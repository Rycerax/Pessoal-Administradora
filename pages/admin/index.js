import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import { db } from "../../firebase";
import classes from "../../styles/Admin.module.css";

export async function getStaticProps(context) {
  if (process.env.NODE_ENV === "production") {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

export default function Admin() {
  const [viewCond, setViewCond] = useState("BNE");
  const [docs, setDocs] = useState([]);
  const [soli, setSoli] = useState([]);
  const [conf, setConf] = useState([]);
  const [desc, setDesc] = useState("");
  const [cond, setCond] = useState("");
  const [link, setLink] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const addDocument = async () => {
    if (!desc || !cond || !link || !day || !month || !year) {
      alert("Preencha todos os campos!");
    } else {
      await setDoc(doc(db, "Docs", `${desc + day + month + year + cond}`), {
        desc,
        cond,
        day,
        month,
        year,
        link,
      });
      alert("Documento adicionado com sucesso!");
    }
  };

  useEffect(async () => {
    const docsq = query(
      collection(db, "Docs"),
      orderBy("year", "desc"),
      orderBy("month", "desc"),
      orderBy("day", "desc")
    );

    const unsubDocs = onSnapshot(docsq, (docsSnapshot) => {
      const docsl = [];
      docsSnapshot.forEach((doc) => {
        docsl.push(doc.data());
      });
      setDocs(docsl);
    });

    return unsubDocs;
  }, []);

  useEffect(() => {
    const soliq = query(
      collection(db, "Soli"),
      orderBy("month", "desc"),
      orderBy("day", "desc")
    );

    const unsubSoli = onSnapshot(soliq, (soliSnapshot) => {
      const solil = [];
      soliSnapshot.forEach((doc) => {
        solil.push(doc.data());
      });
      setSoli(solil);
    });

    return unsubSoli;
  }, []);

  useEffect(() => {
    const confq = query(
      collection(db, "Conf"),
      orderBy("month", "desc"),
      orderBy("day", "desc")
    );

    const unsubConf = onSnapshot(confq, (confSnapshot) => {
      const confl = [];
      confSnapshot.forEach((doc) => {
        confl.push(doc.data());
      });
      setConf(confl);
    });

    return unsubConf;
  }, []);
  return (
    <div className={classes.admin}>
      <div className={classes.admin_left}>
        <div className={classes.admin_left_reservas_confirmadas}>
          <div className={classes.admin_left_reservas_confirmadas_title}>
            <p>Reservas Confirmadas</p>
          </div>
          <div className={classes.admin_left_reservas_confirmadas_content}>
            <div
              className={classes.admin_left_reservas_confirmadas_content_items}
            >
              {!conf.length ? (
                <p>Reservas não disponíveis :(</p>
              ) : (
                conf.map((doc) => (
                  <Item
                    key={`${doc.desc}${doc.day}${doc.month}${doc.cond}`}
                    desc={doc.desc}
                    cond={doc.cond}
                    day={doc.day}
                    month={doc.month}
                    year={new Date().getFullYear()}
                    sl
                    ad
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className={classes.admin_left_reservas_solicitadas}>
          <div className={classes.admin_left_reservas_solicitadas_title}>
            <p>Reservas Solicitadas</p>
          </div>
          <div className={classes.admin_left_reservas_solicitadas_content}>
            <div
              className={classes.admin_left_reservas_solicitadas_content_items}
            >
              {!soli.length ? (
                <p>Reservas não disponíveis :(</p>
              ) : (
                soli.map((doc) => (
                  <Item
                    key={`${doc.desc}${doc.day}${doc.month}${doc.cond}`}
                    desc={doc.desc}
                    cond={doc.cond}
                    day={doc.day}
                    month={doc.month}
                    year={new Date().getFullYear()}
                    ap={doc.ap}
                    ad
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.admin_mid} />
      <div className={classes.admin_right}>
        <div className={classes.admin_right_docs}>
          <div className={classes.admin_right_docs_title}>
            <p>Documentos</p>
            <select
              className={classes.admin_right_add_doc_inputs_inputarea_select}
              onChange={(e) => setViewCond(e.target.value)}
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                height: "35px",
                borderRadius: "7px",
                boxShadow: "0 1px 5px 1px rgb(64 60 67 / 16%)",
              }}
            >
              <option value="BNE">Biene</option>
              <option value="CGN">Cygnus</option>
              <option value="CRS">Cristal II</option>
              <option value="ECV">Ecovillage Maranguape</option>
              <option value="ETL">Etóile</option>
              <option value="GPL">Grand Place</option>
              <option value="JNP">Jean Piaget</option>
              <option value="LIZ">Liz</option>
              <option value="MDC">Medical Center</option>
              <option value="ORLY">Orly</option>
              <option value="PLT">Planalto</option>
              <option value="RGC">Regina Coeli</option>
              <option value="SOL">Sol</option>
              <option value="STL">Santa Lúcia</option>
              <option value="STR">Strauss</option>
              <option value="TMB">Tambaqui</option>
              <option value="XAFY">Xafy Ary</option>
            </select>
          </div>
          <dic className={classes.admin_right_docs_items}>
            {!docs.length ? (
              <p>Documentos não disponíveis :(</p>
            ) : (
              docs.map((doc) =>
                doc.cond === viewCond ? (
                  <Item
                    key={`${doc.desc}${doc.day}${doc.month}${doc.year}${doc.cond}`}
                    desc={doc.desc}
                    dc
                    cond={doc.cond}
                    day={doc.day}
                    month={doc.month}
                    year={doc.year}
                    link={doc.link}
                    ad
                  />
                ) : null
              )
            )}
          </dic>
        </div>
        <div className={classes.admin_right_add_doc}>
          <div className={classes.admin_right_add_doc_title}>
            <p>Adicionar Documento</p>
          </div>
          <div className={classes.admin_right_add_doc_inputs}>
            <div className={classes.admin_right_add_doc_inputs_inputarea}>
              <input
                type="text"
                className={classes.admin_right_add_doc_inputs_inputarea_input}
                placeholder="Descrição"
                maxLength={50}
                onChange={(e) => setDesc(e.target.value)}
              />
              <select
                className={classes.admin_right_add_doc_inputs_inputarea_select}
                onChange={(e) => setCond(e.target.value)}
              >
                <option value="">Condomínio</option>
                <option value="BNE">Biene</option>
                <option value="CGN">Cygnus</option>
                <option value="CRS">Cristal II</option>
                <option value="ECV">Ecovillage Maranguape</option>
                <option value="ETL">Etóile</option>
                <option value="GPL">Grand Place</option>
                <option value="JNP">Jean Piaget</option>
                <option value="LIZ">Liz</option>
                <option value="MDC">Medical Center</option>
                <option value="ORLY">Orly</option>
                <option value="PLT">Planalto</option>
                <option value="RGC">Regina Coeli</option>
                <option value="SOL">Sol</option>
                <option value="STL">Santa Lúcia</option>
                <option value="STR">Strauss</option>
                <option value="TMB">Tambaqui</option>
                <option value="XAFY">Xafy Ary</option>
              </select>
            </div>
            <div className={classes.admin_right_add_doc_inputs_inputarea}>
              <input
                type="url"
                className={classes.admin_right_add_doc_inputs_inputarea_input}
                placeholder="link"
                maxLength={500}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className={classes.admin_right_add_doc_inputs_inputarea}>
              <input
                type="number"
                className={classes.admin_right_add_doc_inputs_inputarea_input}
                placeholder="Dia"
                maxLength={50}
                onChange={(e) => setDay(e.target.value)}
              />
              /
              <input
                type="number"
                className={classes.admin_right_add_doc_inputs_inputarea_input}
                placeholder="Mês"
                maxLength={50}
                onChange={(e) => setMonth(e.target.value)}
              />
              /
              <input
                type="number"
                className={classes.admin_right_add_doc_inputs_inputarea_input}
                placeholder="Ano"
                maxLength={50}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.admin_right_add_doc_buttonarea}>
            <div
              className={classes.admin_right_add_doc_buttonarea_button}
              onClick={() => addDocument()}
            >
              Adicionar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
