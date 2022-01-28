import classes from "../styles/Item.module.css";

export default function Item(props) {
  return (
    <div className={classes.item}>
      <div className={classes.item_icon}>
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
        ) : (
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
        )}
      </div>
      <div className={classes.item_desc}>
        <p>{props.description}</p>
      </div>
      <div className={classes.item_date}>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
