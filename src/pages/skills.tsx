import Head from "next/head";
import React, { useState } from "react";
import styles from "@/styles/Skills.module.css";

const CircleIcon = () => {
  const [showFront, setShowFront] = useState(true);
  const [showMobile, setShowMobile] = useState(false);
  const [showDesign, setShowDesign] = useState(false);
  const [showBackend, setShowBackend] = useState(false);
  const [showOther, setShowOther] = useState(false);

  const infoFront = [
    {
      src: "../IC/typescript.png",
      name: "Typescript",
      alt: "typescript",
    },
  ];

  const infoMobile = [
    {
      src: "../IC/flutter.webp",
      name: "Flutter",
      alt: "flutter",
    },
  ];

  const infoDesign = [
    {
      src: "../IC/flutter.webp",
      name: "Flutter",
      alt: "flutter",
    },
  ];

  const infoBackend = [
    {
      src: "../IC/flutter.webp",
      name: "Flutter",
      alt: "flutter",
    },
  ];

  const infoOther = [
    {
      src: "../IC/flutter.webp",
      name: "Flutter",
      alt: "flutter",
    },
  ];

  const handleShowFront = () => {
    setShowFront(true);
    setShowMobile(false);
    setShowDesign(false);
    setShowBackend(false);
    setShowOther(false);
  };

  const handleShowMobile = () => {
    setShowFront(false);
    setShowMobile(true);
    setShowDesign(false);
    setShowBackend(false);
    setShowOther(false);
  };

  const handleShowDesign = () => {
    setShowFront(false);
    setShowMobile(false);
    setShowDesign(true);
    setShowBackend(false);
    setShowOther(false);
  };

  const handleShowBackend = () => {
    setShowFront(false);
    setShowMobile(false);
    setShowDesign(false);
    setShowBackend(true);
    setShowOther(false);
  };

  const handleShowOther = () => {
    setShowFront(false);
    setShowMobile(false);
    setShowDesign(false);
    setShowBackend(false);
    setShowOther(true);
  };

  return (
    <>
      <div className={styles.yellow_bar} />
      <div className={styles.background}>
        <div className={styles.img} />
        <div className={styles.div_skills}>
          {showFront && (
            <>
              <p>Front-End</p>
              {infoFront.map((infos) => (
                <div className={styles.center}>
                  <div className={styles.circle} key={infos.name}>
                    <img
                      src={infos.src}
                      alt={infos.alt}
                      className={styles.icon}
                    />
                  </div>
                </div>
              ))}
              <button className={styles.prev} onClick={handleShowOther}>
                &#10094;
              </button>
              <button className={styles.next} onClick={handleShowMobile}>
                &#10095;
              </button>
            </>
          )}

          {showMobile && (
            <>
              <p>Développement Mobile</p>
              {infoMobile.map((infos) => (
                <div className={styles.center}>
                  <div className={styles.circle} key={infos.name}>
                    <img
                      src={infos.src}
                      alt={infos.alt}
                      className={styles.icon}
                    />
                  </div>
                </div>
              ))}
              <button className={styles.prev} onClick={handleShowFront}>
                &#10094;
              </button>
              <button className={styles.next} onClick={handleShowDesign}>
                &#10095;
              </button>
            </>
          )}

          {showDesign && (
            <>
              <p>Design</p>
              {infoDesign.map((infos) => (
                <div className={styles.center}>
                  <div className={styles.circle} key={infos.name}>
                    <img
                      src={infos.src}
                      alt={infos.alt}
                      className={styles.icon}
                    />
                  </div>
                </div>
              ))}
              <button className={styles.prev} onClick={handleShowMobile}>
                &#10094;
              </button>
              <button className={styles.next} onClick={handleShowBackend}>
                &#10095;
              </button>
            </>
          )}

          {showBackend && (
            <>
              <p>Back-End</p>
              {infoBackend.map((infos) => (
                <div className={styles.center}>
                  <div className={styles.circle} key={infos.name}>
                    <img
                      src={infos.src}
                      alt={infos.alt}
                      className={styles.icon}
                    />
                  </div>
                </div>
              ))}
              <button className={styles.prev} onClick={handleShowBackend}>
                &#10094;
              </button>
              <button className={styles.next} onClick={handleShowOther}>
                &#10095;
              </button>
            </>
          )}

          {showOther && (
            <>
              <p>Other</p>
              {infoOther.map((infos) => (
                <div className={styles.center}>
                  <div className={styles.circle} key={infos.name}>
                    <img
                      src={infos.src}
                      alt={infos.alt}
                      className={styles.icon}
                    />
                  </div>
                </div>
              ))}
              <button className={styles.prev} onClick={handleShowBackend}>
                &#10094;
              </button>
              <button className={styles.next} onClick={handleShowFront}>
                &#10095;
              </button>
            </>
          )}
        </div>
      </div>
      <div className={styles.yellow_bar} />
    </>
  );
};

export default CircleIcon;
