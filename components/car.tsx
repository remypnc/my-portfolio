import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "../src/styles/Car.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  { title: "Portfolio 2023",
    subtitle: "Personal work",
    image: "./my-portfolio.png",  
    text: "Voici mon tout premier portfolio en tant que Web Developper ! J'espère que ce design vous plaît tout autant qu'à moi. J'acquérirais de plus en plus de compétences au fur et à mesure du temps, alors restez à l'affût pour ne rien louper !",
  },
  {
    image: "./Codecamp ETNA Project.png",
    text: "Texte de la diapositive 2",
    title: "Code Camp 2023",
    subtitle: "School Project (Figma & Flutter)",
  },
  {
    image: "./Green Bean Project.png",
    text: "Texte de la diapositive 3",
    title: "Green Bean / Eco Score",
    subtitle: "PLI Project 2022-2023 (Figma & Tailwind)",
  },
  {
    image: "./beepbooptop.png",
    text: "Texte de la diapositive 3",
    title: "Beep-Boop Store",
    subtitle: "First Project 2022 (HMTL - CSS)",
  },
  {
    image: "./English Learning Game project.png",
    text: "Texte de la diapositive 3",
    title: "English Learning Game",
  },
  {
    image: "./Country Informations App.png",
    text: "Texte de la diapositive 3",
    title: "Geo Atlas",
  },
  {
    image: "https://example.com/image3.jpg",
    text: "Texte de la diapositive 3",
    title: "The Reviver",
  },
];

const CarouselComponent = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

  const arrowStyles:any = {
    position: 'absolute',
    zIndex: 2,
    top: '50%',
    width: 50,
    height: 50,
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
      // arrowStyle={arrowStyles}
    >
      {slides.map((slide, index) => (
        <>
          <div
            className={`${styles.flip_box} ${isFlipped ? styles.flipped : ""}`}
            onClick={handleImageClick}
          >
            <div className={styles.flip_box_inner}>
              <div className={styles.flip_box_front}>
                <h3 className={styles.title}>{slide.title}</h3>
                  <h4 className={styles.subtitle}>{slide.subtitle}</h4>
                <img
                  src={slide.image}
                  alt={`Image ${index + 1}`}
                  className={styles.slideImage}
                />
                <img
                src="../IC/click.png"
                alt="Click on Me"
                className={styles.click}
                />
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
