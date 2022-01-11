import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";

function App() {
  // const ni = useRef(0);
  const no = useRef(0);
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  const flash_vega_slot = useSpring({
    loop: () => 3 > no.current++,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  // const flash_vega_slot = useSpring({
  //   to: async (next, cancel) => {
  //     await next({ opacity: 1, delay: 10 });
  //     await next({ opacity: 0, delay: 10 });
  //     await next({ opacity: 1, delay: 10 });
  //     await next({ opacity: 0, delay: 10 });
  //     await next({ opacity: 1 });
  //   },
  //   from: { opacity: 0 },
  //   delay: 1000,
  // });

  const styles = useSpring({
    loop: true,
    to: { opacity: 1 },
    from: { opacity: 0.5 },
  });

  const s = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  });
  const h = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1100,
  });
  const o_1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1200,
  });
  const w_1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1300,
  });
  const d = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1400,
  });
  const o_2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1500,
  });
  const w_2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1600,
  });
  const n = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1700,
  });

  // const must_drop = useSpring({
  //   loop: () => 2 > ni.current++,
  //   from: { opacity: 0 },
  //   to: { opacity: 1 }, 
  //   delay: 200,
  // });
  const must_drop = useSpring({
    to: async (next, cancle) => {
      await next({ opacity: 1, delay: 10 });
      await next({ opacity: 0, delay: 10 });
      await next({ opacity: 1, delay: 10 });
    },
    from: { opacity: 0 },
    delay: 2000,
  });

  return (
    <div className="App">
      <div className="img_container">
        <animated.img
          style={fade}
          className="bg"
          src="images/header.png"
          alt=""
        />
        <animated.img
          style={fade}
          className="bg_txt"
          src="images/showdown-off.png"
          alt=""
        />
        <animated.img
          style={flash_vega_slot}
          className="vegas"
          src="images/vegas@2x.png"
          alt=""
        />
        <animated.img
          style={flash_vega_slot}
          className="slots"
          src="images/slots@2x.png"
          alt=""
        />
        <animated.img style={s} className="s" src="images/s@2x.png" alt="" />
        <animated.img style={h} className="h" src="images/h@2x.png" alt="" />
        <animated.img
          style={o_1}
          className="o-1"
          src="images/o-1@2x.png"
          alt=""
        />
        <animated.img
          style={w_1}
          className="w-1"
          src="images/w-1@2x.png"
          alt=""
        />
        <animated.img style={d} className="d" src="images/d@2x.png" alt="" />
        <animated.img
          style={o_2}
          className="o-2"
          src="images/o-2@2x.png"
          alt=""
        />
        <animated.img
          style={w_2}
          className="w-2"
          src="images/w-2@2x.png"
          alt=""
        />
        <animated.img style={n} className="n" src="images/n@2x.png" alt="" />
        <animated.img
          style={must_drop}
          className="must_drop"
          src="images/must_drop.png"
          alt=""
        />
        <animated.img
          className="bolt"
          style={styles}
          src="images/bolt@2x.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
