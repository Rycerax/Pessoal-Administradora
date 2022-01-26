import classes from "../styles/Item.module.css";

export default function Item() {
  return (
    <div className={classes.item}>
      <div className={classes.item_icon}>
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
      </div>
      <div className={classes.item_desc}>
        <p>Ata Assembléia.pdf</p>
      </div>
      <div className={classes.item_date}>
        <p>27/01/2022</p>
      </div>
    </div>
  );
}
