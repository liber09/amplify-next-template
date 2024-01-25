'use client'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import styles from './imageCarousel.module.scss'

interface ImageCarouselProps {
  images: string[];
  titles: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  titles,
  autoPlay = true,
  autoPlayInterval = 3000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, autoPlayInterval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoPlay, autoPlayInterval, images.length]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: autoPlayInterval,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`slide-${index}`}
              width={390} // set the desired width
              height={390} // set the desired height
            />
            <h3 className={styles.associationTitle}>{titles[index]}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
