import React from "react";
import {Button, Container } from "@material-ui/core";
import { Link } from 'react-router-dom';
import css from "../../css/modules/pageBuilderBlocks/CtaOne.module.scss";

const CtaOne = (props) =>{
    const block = props.block;
    return (
        <div id={block.id} className={`${css.root} ${block.class}`}>
            <Container>
                <h2>{block.headline}</h2>
                <div className="containerNarrow mb-3">
                    <div className={css.ctaText} dangerouslySetInnerHTML={{__html: block.text}}/>
                </div>
                <Button variant="outlined" component={Link} to={block.button_link} className={`${css.btn} growLink`}>{block.button_text}</Button>
            </Container>
        </div>
    )
};
export default CtaOne
