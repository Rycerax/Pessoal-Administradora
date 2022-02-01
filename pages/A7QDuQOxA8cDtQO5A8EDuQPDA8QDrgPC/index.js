import classes from "../../styles/Admin.module.css";

export default function Admin() {
  return (
    <div className={classes.admin}>
      <div className={classes.admin_left}>
        <div className={classes.admin_left_reservas}></div>
      </div>
      <div className={classes.admin_mid}></div>
      <div className={classes.admin_right}>
        <div className={classes.admin_right_docs}></div>
      </div>
    </div>
  );
}
