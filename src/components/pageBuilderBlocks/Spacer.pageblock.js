import React from "react";
import css from "../../css/modules/pageBuilderBlocks/spacer.module.scss";

const Spacer = ({ block }) => {
  const baseGridSize = 60;
  return (
    <div
      id={block.id}
      className={css.root}
      style={{ height: parseInt(block.spaces) * baseGridSize }}
    />
  );
};
export default Spacer;
