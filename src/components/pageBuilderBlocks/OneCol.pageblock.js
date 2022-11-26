import React from "react";
import { Container } from "@mui/material";
import ReactMarkdown from 'react-markdown';
import css from "../../css/modules/pageBuilderBlocks/general.module.scss";
const OneCol = props => {
  const block = props.block;
  if (!block.align) {
    block.align = "left";
  }
  const colClass = "text-" + block.align + " text-editor-output default-text";
  return (
    <div id={block.id} className={`${css.root} ${block.class}`}>
      <Container>
        <ReactMarkdown skipHtml className={colClass}>{block.html}</ReactMarkdown>
      </Container>
    </div>
  );
};
export default OneCol;
