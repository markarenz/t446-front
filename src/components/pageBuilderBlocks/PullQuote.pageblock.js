import React from "react"
import { Container } from '@material-ui/core'
import css from '../../css/modules/pageBuilderBlocks/PullQuote.module.scss';

const PullQuote = (props) =>{
    const block = props.block;
    //headline, photo
    // const content = block.html.split("\n\n").join("<br /><br />").split("anim-me").join("");
    const itemStyle=(block.photo!=='') ? {backgroundImage: `url(${process.env.REACT_APP__AWS__BASE_DIR}files/${block.photo})`} : null;
    return (
        <div id={block.id} className={`${css.root} ${block.class}`} style={itemStyle}>
            <Container>
                <div className={css.content}>
                    <h2>{block.headline}</h2>
                </div>
            </Container>
        </div>
    )
}
export default PullQuote;
