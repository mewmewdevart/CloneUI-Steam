import React, { useEffect, useState } from 'react';
import Button from '@components/atoms/button/button';

interface CarouselProps {
  imagesCarousel: string[];
  logoCarousel: string[];
  labelCarousel: string[];
}

const Carousel: React.FC<CarouselProps> = ({ imagesCarousel, logoCarousel, labelCarousel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar para a próxima imagem
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesCarousel.length);
  };

  // Função para retroceder para a imagem anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesCarousel.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Muda a imagem a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="relative mx-auto w-full">
      <div className="relative">
        {imagesCarousel.map((image, index) => (
          <div
            key={index}
            className={`w-full h-[500px] absolute transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(14, 19, 30, 0.9) 10%, rgba(14, 19, 30, 0.1) 100%), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="2xl:max-w-screen-2xl lg:max-w-screen-lg md:max-w-screen-md mx-auto pt-[100px]">
              <img src={logoCarousel[index]} alt="Logo" className='w-[240px]'/>
              <p className="w-[500px] text-white text-large font-medium py-[30px]">{labelCarousel[index]}</p>
              <Button label="Buy Now" extraClassNames="text-paragraph-large" />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center z-0">
        <button onClick={prevImage} className="bg-gray-800 text-white p-2">Previous</button>
        <button onClick={nextImage} className="bg-gray-800 text-white p-2">Next</button>
      </div>
    </div>
  );
};

export default Carousel;
