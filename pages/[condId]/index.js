import Image from "next/image";
import { useState } from "react";
import classes from "../../styles/Condominium.module.css";

export default function Condominium() {
  const [dc, setDc] = useState(true);
  const [dccolor, setDcColor] = useState("#fff");
  const [dt, setDt] = useState(false);
  const [dtcolor, setDtColor] = useState("#fff");
  const [pc, setPc] = useState(false);
  const [pccolor, setPcColor] = useState("#fff");

  return (
    <div className={classes.condominium}>
      <div className={classes.condominium_main}>
        <div className={classes.condominium_main_menu}>
          <div
            className={classes.condominium_main_menu_option}
            onMouseEnter={() => setDcColor("#195fcd")}
            onMouseLeave={() => setDcColor("#fff")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={35}
              viewBox="0 0 24 24"
              width={35}
              fill={dccolor}
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M14 2H4v20h16V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
          </div>
          <div
            className={classes.condominium_main_menu_option}
            onMouseEnter={() => setDtColor("#195fcd")}
            onMouseLeave={() => setDtColor("#fff")}
            style={{ marginLeft: 125, marginRight: 125 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={35}
              viewBox="0 0 24 24"
              width={35}
              fill={dtcolor}
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11z" />
            </svg>
          </div>
          <div
            className={classes.condominium_main_menu_option}
            onMouseEnter={() => setPcColor("#195fcd")}
            onMouseLeave={() => setPcColor("#fff")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={35}
              viewBox="0 0 24 24"
              width={35}
              fill={pccolor}
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z" />
            </svg>
          </div>
        </div>
        <div className={classes.condominium_main_content}></div>
        <div className={classes.condominium_main_parceiros}></div>
      </div>
    </div>
  );
}
