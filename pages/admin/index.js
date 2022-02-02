import { useState } from "react";
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
  const [docs, setDocs] = useState([]);
  const [sol, setSol] = useState([]);
  const [conf, setConf] = useState([]);
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
                conf.map((reserva) => {
                  <p>reserva</p>;
                })
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
              {!sol.length ? (
                <p>Reservas não disponíveis :(</p>
              ) : (
                sol.map((reserva) => {
                  <p>Reserva</p>;
                })
              )}
            </div>
          </div>
        </div>
        <div className={classes.admin_left_add_reserva}>
          <div className={classes.admin_left_add_reserva_title}>
            <p>Confirmar Reserva</p>
          </div>
          <div className={classes.admin_left_add_reserva_inputs}>
            <div className={classes.admin_left_add_reserva_inputs_inputarea}>
              <select style={{ marginRight: "10px" }}>
                <option value="">Selecione uma área</option>
                <option value="Salão de festas">Salão de festas</option>
                <option value="Deck">Deck</option>
                <option value="Piscina">Psiscina</option>
              </select>
              <select style={{ marginLeft: "10px" }}>
                <option value="">Selecione o condomínio</option>
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
                <option value="SOL">Sol do Atlântico</option>
                <option value="STL">Santa Lúcia</option>
                <option value="STR">Strauss</option>
                <option value="TMB">Tambaqui</option>
                <option value="XAFY">Planalto</option>
              </select>
            </div>
            <div className={classes.admin_left_add_reserva_inputs_inputarea}>
              <select style={{ marginRight: "10px" }}>
                <option value="">Dia</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select style={{ marginLeft: "10px" }}>
                <option value="">Mês</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
          </div>
          <div className={classes.admin_left_add_reserva_buttonarea}>
            <div className={classes.admin_left_add_reserva_buttonarea_button}>
              Adicionar
            </div>
          </div>
        </div>
      </div>
      <div className={classes.admin_mid} />
      <div className={classes.admin_right}>
        <div className={classes.admin_right_docs}></div>
        <div className={classes.admin_right_add_doc}></div>
      </div>
    </div>
  );
}
