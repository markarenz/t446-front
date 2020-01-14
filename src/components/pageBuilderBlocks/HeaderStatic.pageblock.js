import React from "react"
// import { Controller, Scene } from 'react-scrollmagic';
import css from "../../css/modules/pageBuilderBlocks/HeaderStatic.module.scss";
import { Container } from '@material-ui/core';

const HeaderStatic = (props) =>{
    const block = props.block;
    return (
        <div
            id={block.id}
            className={`${css.root} ${block.class && block.class}`}
            style={{ backgroundImage: `url(${process.env.REACT_APP__AWS__BASE_DIR}files/${block.photo})` }}
        >
            <Container className={css.container}>
                <h1>{block.headline}</h1>
                {
                    (block.subheadline!=='') && <h2>{block.subheadline}</h2>
                }
            </Container>
        </div>
    )
}
export default HeaderStatic
