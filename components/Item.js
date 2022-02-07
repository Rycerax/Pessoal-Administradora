import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import classes from "../styles/Item.module.css";

export default function Item(props) {
  const deleteItem = async () => {
    if (props.dc) {
      console.log(
        props.desc + props.day + props.month + props.year + props.cond
      );
      await deleteDoc(
        doc(
          db,
          "Docs",
          props.desc + props.day + props.month + props.year + props.cond
        )
      );
    } else if (props.sl) {
      console.log(props.desc + props.day + props.month + props.cond);
      await deleteDoc(
        doc(db, "Conf", props.desc + props.day + props.month + props.cond)
      );
    } else
      await deleteDoc(
        doc(db, "Soli", props.desc + props.day + props.month + props.cond)
      );
  };

  const confirmarReserva = async () => {
    await deleteDoc(
      doc(db, "Soli", props.desc + props.day + props.month + props.cond)
    );
    await setDoc(
      doc(db, "Conf", props.desc + props.day + props.month + props.cond),
      {
        desc: props.desc,
        day: props.day,
        month: props.month,
        cond: props.cond,
      }
    );
  };

  return (
    <div className={props.dc ? classes.item_dc : classes.item}>
      <div
        className={classes.item_icon}
        onClick={() => (props.dc ? window.open(props.link, "_blank") : null)}
      >
        {props.dc ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={35}
            viewBox="0 0 24 24"
            width={35}
            fill="#2e4da7"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M14 2H4v20h16V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
          </svg>
        ) : props.sl ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={35}
            viewBox="0 0 24 24"
            width={35}
            fill="#2e4da7"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height={35}
            viewBox="0 0 24 24"
            width={35}
            fill="#2e4da7"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <path d="M11.07,12.85c0.77-1.39,2.25-2.21,3.11-3.44c0.91-1.29,0.4-3.7-2.18-3.7c-1.69,0-2.52,1.28-2.87,2.34L6.54,6.96 C7.25,4.83,9.18,3,11.99,3c2.35,0,3.96,1.07,4.78,2.41c0.7,1.15,1.11,3.3,0.03,4.9c-1.2,1.77-2.35,2.31-2.97,3.45 c-0.25,0.46-0.35,0.76-0.35,2.24h-2.89C10.58,15.22,10.46,13.95,11.07,12.85z M14,20c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-1.1,0.9-2,2-2 S14,18.9,14,20z" />
            </g>
          </svg>
        )}
      </div>
      <div
        className={classes.item_desc}
        onClick={() => (props.dc ? window.open(props.link, "_blank") : null)}
      >
        <p>{props.desc}</p>
      </div>
      <div
        className={classes.item_ap}
        onClick={() => (props.dc ? window.open(props.link, "_blank") : null)}
      >
        <p>{props.ap}</p>
      </div>
      <div
        className={classes.item_cond}
        onClick={() => (props.dc ? window.open(props.link, "_blank") : null)}
      >
        <p>{props.cond}</p>
      </div>
      <div
        className={classes.item_date}
        onClick={() => (props.dc ? window.open(props.link, "_blank") : null)}
      >
        <p>{`${props.day}/${props.month}/${props.year}`}</p>
      </div>
      {props.ad && !props.sl && !props.dc ? (
        <div className={classes.item_accept} onClick={() => confirmarReserva()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={25}
            viewBox="0 0 24 24"
            width={25}
            fill="green"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          </svg>
        </div>
      ) : null}
      {props.ad ? (
        <div className={classes.item_delete} onClick={() => deleteItem()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={25}
            viewBox="0 0 24 24"
            width={25}
            fill="red"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
          </svg>
        </div>
      ) : null}
    </div>
  );
}
