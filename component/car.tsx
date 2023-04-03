import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "../src/styles/Car.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  { image: "./Codecamp ETNA Project.png",
    text: "Texte de la diapositive 1",
    title: "Title 1",
  },
  {
    image: "https://example.com/image2.jpg",
    text: "Texte de la diapositive 2",
    title: "Title 2",
  },
  {
    image: "https://example.com/image3.jpg",
    text: "Texte de la diapositive 3",
    title: "Title 3",
  },
];

const CarouselComponent = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: '50%',
    width: 30,
    height: 30,
    cursor: 'pointer',
    color: '#2d2d2d',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    transition: 'transform ease-in 0.1s',
  };

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      className={styles.car}
      arrowStyle={arrowStyles}
    >
      {slides.map((slide, index) => (
        <>
          <div
            className={`${styles.flip_box} ${isFlipped ? styles.flipped : ""}`}
            onClick={handleImageClick}
          >
            <div className={styles.flip_box_inner}>
              <div className={styles.flip_box_front}>
                <img
                  src={slide.image}
                  alt={`Image ${index + 1}`}
                  className={styles.slideImage}
                />
                <h3>{slide.title}</h3>
              </div>
              <div className={styles.flip_box_back}>
                <p>{slide.text}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
