import React from "react";
import { Container } from "@material-ui/core";
import css from "../../css/modules/pageBuilderBlocks/HeaderSlider.module.scss";
import activityImg from "../../images/bsa-activity.svg";

const HeaderSlider = ({ block, gallery }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      changeSlide();
    }, 5000);
    return () => clearTimeout(timer);
  });
  const [activeSlide, setActiveSlide] = React.useState(0);
  if (!gallery) return null;
  if (!gallery.images) return null;
  const images = JSON.parse(gallery.images);
  const headlines = block.headlines.split("\n");
  const changeSlide = () => {
    const nextSlide = (activeSlide<(images.length-1)) ? activeSlide+1 : 0;
    setActiveSlide(nextSlide)
  };
  return (
    <div id={block.id} className={`${css.root} ${block.class}`}>
      {images.map((img, idx) => (
        <div
            key={idx}
          className={`${css.sliderImg} ${(activeSlide===idx) && css.slideActive}`}
          style={{
            backgroundImage: `url(${
              process.env.REACT_APP__AWS__BASE_DIR
            }files/${img})`
          }}
        >
          <div className={css.sliderDecoText}>{(headlines[idx] && headlines[idx])}</div>
          <Container>
            <div className={css.sliderContainer}>
              <h1 className={css.sliderHeadline}>{(headlines[idx] && headlines[idx])}</h1>
            </div>
          </Container>
        </div>
      ))}
      <img src={activityImg} alt="Scouts BSA" className={css.activityImg} />
      <div className={css.navigation}>
        <Container>
        {
          images.map( (img, idx) => {
            return <div key={idx} className={`${css.navDot} ${(activeSlide===idx) && css.navDotActive}`} onClick={() => setActiveSlide(idx)} />
          })
        }
        </Container>
      </div>
    </div>
  );
};
export default HeaderSlider;
