import React from "react";
import styles from "../../css/modules/MenuToggle.module.scss";

const MenuToggle = ({ menuActive }) => {

  return (
      <svg className={`${styles.root} ${ menuActive ? styles.active : ''}`} width="30" height="30">
          <line x1="0" y1="5" x2="30" y2="5" stroke="white" strokeWidth="4" className={styles.line1}/>
          <line x1="0" y1="15" x2="30" y2="15" stroke="white" strokeWidth="4" className={styles.line2}/>
          <line x1="0" y1="25" x2="30" y2="25" stroke="white" strokeWidth="4" className={styles.line3}/>
      </svg>
  );
};
export default MenuToggle;
