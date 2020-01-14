import React from "react";
import { Typography } from "@material-ui/core";
import styles from "../../css/modules/Footer.module.scss";

import { randomizedFooterContent } from "../../config/data";

const ScoutMessaging = () => {
  const [msgIndex, setMsgIndex] = React.useState(0);
  const inCrementMsgIndex = () => {
    const i = msgIndex >= randomizedFooterContent.length - 1 ? 0 : msgIndex + 1;
    setMsgIndex(i);
  };
  React.useEffect(() => {
    const timer = setTimeout(() => {
      inCrementMsgIndex();
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.scoutMessageWrap}>
      {randomizedFooterContent.map((item, i) => (
        <Typography
          key={i}
          className={`${styles.scoutMessage} ${
            item.length > 130
              ? styles.scoutMessageSmallerFont
              : item.length < 100
              ? styles.scoutMessageLargerFont
              : null
          } ${msgIndex === i ? styles.active : msgIndex - 1 === i ? styles.wasActive : ''}`}
        >
          {item}
        </Typography>
      ))}
    </div>
  );
};
export default ScoutMessaging;
