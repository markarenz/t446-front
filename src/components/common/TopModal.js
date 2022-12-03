import React from "react";
import css from "../../css/modules/TopModal.module.scss";
import { Close as IconClose } from "@mui/icons-material";

const TopModal = ({ setTopModalActive, topModalContent }) => {
  return (
    <div className={css.root}>
        <IconClose
            className={css.close}
            onClick={() => setTopModalActive(false)}
        />
      <div>
        <img
          src={`${process.env.REACT_APP__AWS__BASE_DIR}files/${topModalContent}`}
          alt={topModalContent}
        />
      </div>
    </div>
  );
};
export default TopModal;
