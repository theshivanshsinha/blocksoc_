import React, { useEffect } from "react";
import "./css/base.css";
import "./css/demo5.css";
import "./pater/pater.css";
import demoJS from "./js/demo.js";
import threeJS from "./js/three.min.js";
import perlinJS from "./js/perlin.js";
import TweenMaxJS from "./js/TweenMax.min.js";
import demo5JS from "./js/demo5.js";

const Bg = () => {
  useEffect(() => {
    // Initialize and call the required JavaScript files
    demoJS();
    threeJS();
    perlinJS();
    TweenMaxJS();
    demo5JS();
  }, []);

  return (
    <main>
      <div className="content content--fixed">
        <header className="codrops-header">
          <div className="codrops-links">
            <a
              className="codrops-icon codrops-icon--prev"
              href="https://tympanus.net/Development/AnimatedFrameSlideshow/"
              title="Previous Demo"
            ></a>
            <a
              className="codrops-icon codrops-icon--drop"
              href="https://tympanus.net/codrops/?p=33168"
              title="Back to the article"
            ></a>
          </div>
          <h1 className="codrops-header__title">
            Decorative WebGL Backgrounds
          </h1>
        </header>
        <a
          className="github"
          href="https://github.com/Mamboleoo/DecorativeBackgrounds/"
          title="Find this project on GitHub"
        ></a>
        <nav className="demos">
          <a className="demo" href="index.html">
            <span>Demo 1</span>
          </a>
          <a className="demo" href="index2.html">
            <span>Demo 2</span>
          </a>
          <a className="demo" href="index3.html">
            <span>Demo 3</span>
          </a>
          <a className="demo" href="index4.html">
            <span>Demo 4</span>
          </a>
          <a className="demo demo--current" href="index5.html">
            <span>Demo 5</span>
          </a>
          <a className="demo" href="index6.html">
            <span>Demo 6</span>
          </a>
        </nav>
        <a
          className="pater"
          href="http://go.thoughtleaders.io/TLDcodrops211117"
          onClick="recordOutboundLink(this, 'Outbound Links', 'TLDcodrops211117');return false;"
        >
          <h3 className="pater__title">
            Snag the hottest new domain name for designers
          </h3>
          <p className="pater__description">
            .design domains were just released and some of the best ones are
            still available. They normally cost $35 but Codrops readers{" "}
            <strong>get them now for FREE!</strong>
          </p>
        </a>
      </div>
      <div className="content">
        <canvas className="scene scene--full" id="scene"></canvas>
        <div className="content__inner">
          <h2 className="content__title">Heuristics</h2>
          <h3 className="content__subtitle">Machine Learning</h3>
        </div>
      </div>
    </main>
  );
};

export default Bg;
