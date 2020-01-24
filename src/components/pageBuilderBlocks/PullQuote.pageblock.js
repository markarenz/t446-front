import React from "react"
import { Container } from '@material-ui/core'
import css from '../../css/modules/pageBuilderBlocks/PullQuote.module.scss';
import VizSensor from "react-visibility-sensor";

const PullQuote = (props) =>{
    const [isVisible, setIsVisible] = React.useState(false);
    const block = props.block;
    //headline, photo
    // const content = block.html.split("\n\n").join("<br /><br />").split("anim-me").join("");
    const itemStyle=(block.photo!=='') ? {backgroundImage: `url(${process.env.REACT_APP__AWS__BASE_DIR}files/${block.photo})`} : null;
    return (
        <div id={block.id} className={`${css.root} ${block.class}`} style={itemStyle}>
            <Container>
                <div className={css.content}>
                    <VizSensor
                        partialVisibility
                        onChange={isVisible => {
                            setIsVisible(isVisible)
                            // if (isVisible) {
                            //     setIsVisible(true);
                            // }
                        }}
                    >
                    <h2 className={`anim-me anim-zoom-back ${isVisible && "anim-in"}`} style={{transitionDelay: '0.2s'}}>{block.headline}</h2>
                    </VizSensor>
                </div>
            </Container>
        </div>
    )
}
export default PullQuote;
