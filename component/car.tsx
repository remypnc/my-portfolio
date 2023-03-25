import { Carousel } from 'react-responsive-carousel';
import styles from "../src/styles/Car.module.css"
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
  { image: './Codecamp ETNA Project.png', text: 'Texte de la diapositive 1' },
  { image: 'https://example.com/image2.jpg', text: 'Texte de la diapositive 2' },
  { image: 'https://example.com/image3.jpg', text: 'Texte de la diapositive 3' },
];

const CarouselComponent = () => {
  return (
    <Carousel showArrows={true} showThumbs={false} showStatus={false} className={styles.car}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={`Image ${index + 1}`} />
          <p>{slide.text}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
