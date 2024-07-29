"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

function HomePage() {
  const ref = useRef();

  return (
    <Parallax pages={4} ref={ref}>
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={2}
        style={{
          backgroundImage: "url('/moon.png')",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-7xl text-white text-center">
          Desliza para aterrizar
        </h2>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1}
        factor={4}
        style={{
          backgroundImage: "url('/land.png')",
          backgroundSize: "cover",
        }}
      ></ParallaxLayer>
      <ParallaxLayer sticky={{ start: 0.5, end: 3 }}>
        <img src="/cat.gif" alt="" className="m-auto" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3.5}
        speed={2}
        onClick={() => ref.current.scrollTo(0)}
      >
        <h2 className=" text-7xl text-white text-center">
          Aterrizaste a salvo :D
        </h2>
      </ParallaxLayer>
    </Parallax>
  );
}

export default HomePage;
