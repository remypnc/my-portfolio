import { useState, useEffect } from 'react';
import React from 'react';
import styles from '@/styles/Scroll.module.scss'
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
      className={styles.topButton}
      onClick={handleClick}
    >
    <img src={"/buttontop.png"} alt={alt} width='60px'/>
    </button>
  );
};

export default TopButton;
