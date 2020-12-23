import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://destinonegocio.com/wp-content/uploads/2019/01/7-ideas-para-emprender.jpg',
    altText: 'Slide 1',
    caption: 'La herramienta correcta para avanzar en tus estudios'
  },
  {
    src: 'https://correodelcaroni.com/images/Imagenes/Fotos2020/Abril2020/dia300420/Luzy_clases.jpg',
    altText: 'Slide 2',
    caption: 'Deja ya de desvelarte'
  },
  {
    src: 'https://mividafreelance.com/wp-content/uploads/2015/10/sitios-ganar-dinero-profesor-online-mi-vida-freelance-1.jpg',
    altText: 'Slide 3',
    caption: 'Confía en nuestros tutores'
  }
];
const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}

      > 
        <img className="d-block w-100" src={item.src} alt={item.altText} style={{height:"500px",  width:"1000px"}} />
        <CarouselCaption className="carouselCaption h1"   captionText={item.caption} />
        
      </CarouselItem>
    );
  });

  return (
        <Carousel
          responsive
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
  );
}

export default Example;