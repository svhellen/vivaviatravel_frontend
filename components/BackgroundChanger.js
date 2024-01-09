import React, { useState, useEffect } from 'react';
//import './styles.css'; 

const BackgroundChanger = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/images/carousel/desktop-1.jpg', 
                  '/images/carousel/desktop-2.jpg', 
                  '/images/carousel/desktop-3.jpg'];

  useEffect(() => {
   
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval); 

  }, [currentImage, images.length]);

  const divStyle = {
    backgroundImage: `url(${images[currentImage]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out', // animação de fade
    height: '300px', 
  };

  return (
    <div className="background-container" style={divStyle}>
      {/* conteudo */}
    </div>
  );
};

export default BackgroundChanger;
