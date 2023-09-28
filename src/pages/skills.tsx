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
    {
      src: "../IC/javascript.png",
      name: "Javascript",
      alt: "javascript",
    },
    {
      src: "../IC/react.png",
      name: "React.js",
      alt: "react",
    },
    {
      src: "../IC/html.png",
      name: "HTML",
      alt: "html",
    },
    {
      src: "../IC/css.png",
      name: "CSS",
      alt: "css",
    },
  ];

  const infoMobile = [
    {
      src: "../IC/flutter.png",
      name: "Flutter",
      alt: "flutter",
    },
    {
      src: "../IC/kotlin.png",
      name: "Kotlin",
      alt: "kotlin",
    },
  ];

  const infoDesign = [
    {
      src: "../IC/figma.png",
      name: "Figma",
      alt: "figma",
    },
    {
      src: "../IC/photoshop.png",
      name: "Photoshop",
      alt: "photoshop",
    },
    {
      src: "../IC/indesign.png",
      name: "InDesign",
      alt: "indesign",
    },
  ];

  const infoBackend = [
    {
      src: "../IC/postman.png",
      name: "Postman",
      alt: "postman",
    },
    {
      src: "../IC/mongodb.png",
      name: "MongoDB",
      alt: "mongodb",
    },
  ];

  const infoOther = [
    {
      src: "../IC/python.png",
      name: "Python",
      alt: "python",
    },
    {
      src: "../IC/vs-code.png",
      name: "VS Code",
      alt: "vscode",
    },
    {
      src: "../IC/github.png",
      name: "Github",
      alt: "github",
    },
    {
      src: "../IC/gitlab.png",
      name: "Gitlab",
      alt: "gitlab",
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
      <div id="skills" className={styles.background}>
        <h1>Skills</h1>
        <div className={styles.img} />
        <div className={styles.div_skills}>
          {showFront && (
            <>
              <div className={styles.title}>
                <h2>Front-End</h2>
              </div>
              {infoFront.map((infos) => (
                <div className={styles.c}>
                  <div className={styles.center}>
                    <div className={styles.circle} key={infos.name}>
                      <img
                        src={infos.src}
                        alt={infos.alt}
                        className={styles.icon}
                      />
                    </div>
                    <p>{infos.name}</p>
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
              <div className={styles.title}>
                <h2>Développement Mobile</h2>
              </div>
              {infoMobile.map((infos) => (
                <div className={styles.c}>
                  <div className={styles.center}>
                    <div className={styles.circle} key={infos.name}>
                      <img
                        src={infos.src}
                        alt={infos.alt}
                        className={styles.icon}
                      />
                    </div>
                    <p>{infos.name}</p>
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
              <div className={styles.title}>
                <h2>Design</h2>
              </div>
              {infoDesign.map((infos) => (
                <div className={styles.c}>
                  <div className={styles.center}>
                    <div className={styles.circle} key={infos.name}>
                      <img
                        src={infos.src}
                        alt={infos.alt}
                        className={styles.icon}
                      />
                    </div>
                    <p>{infos.name}</p>
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
              <div className={styles.title}>
                <h2>Back-End</h2>
              </div>
              {infoBackend.map((infos) => (
                <div className={styles.c}>
                  <div className={styles.center}>
                    <div className={styles.circle} key={infos.name}>
                      <img
                        src={infos.src}
                        alt={infos.alt}
                        className={styles.icon}
                      />
                    </div>
                    <p>{infos.name}</p>
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
              <div className={styles.title}>
                <h2>Other</h2>
              </div>
              {infoOther.map((infos) => (
                <div className={styles.c}>
                  <div className={styles.center}>
                    <div className={styles.circle} key={infos.name}>
                      <img
                        src={infos.src}
                        alt={infos.alt}
                        className={styles.icon}
                      />
                    </div>
                    <p>{infos.name}</p>
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
    </>
  );
};

export default CircleIcon;
