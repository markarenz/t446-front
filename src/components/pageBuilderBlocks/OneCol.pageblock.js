import React from "react";
import { Container } from "@material-ui/core";
import css from "../../css/modules/pageBuilderBlocks/general.module.scss";
const OneCol = props => {
  const block = props.block;
  if (!block.align) {
    block.align = "left";
  }
  const colClass = "text-" + block.align + " text-editor-output default-text";
  const content = block.html
    .split("\n\n")
    .join("<br /><br />")
    .split("anim-me")
    .join("");
  return (
    <div id={block.id} className={`${css.root} ${block.class}`}>
      <Container>
        <div
          className={colClass}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </div>
  );
};
export default OneCol;
