import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';

interface TopButtonProps {
  src: string;
  alt: string;
}

const TopButton: React.FC<TopButtonProps> = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={""}
      onClick={handleClick}
    >
    <img src={"/buttontop.png"} alt={alt} />
    </button>
  );
};

export default TopButton;
