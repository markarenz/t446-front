import React from "react";
import { Container } from "@material-ui/core";
import css from "../../css/modules/pageBuilderBlocks/Announcements.module.scss";
const OneCol = props => {
  const block = props.block;
  const colClass = "text-" + block.align;
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
