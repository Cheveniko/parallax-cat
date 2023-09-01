"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

function HomePage() {
  const ref = useRef();

  return (
    <div>
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
          <h2 className="text-8xl text-white">Desliza para aterrizar</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: "url('/land.png')",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-8xl text-white"></h2>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0.5, end: 3 }}>
          <img src="/cat.gif" alt="" className="m-auto" />
        </ParallaxLayer>
        {/* <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={3.5}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2 className=" text-8xl text-white">Aterrizaste a salvo :D</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HomePage;
