import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

const Demo = () => {
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    if (!animating) {
      setAnimating(true);
    }

    return function cleanup() {
      setAnimating(false);
    };
  }, [animating]);

  const props = useSpring({
    config: config.wobbly,
    to: async next => {
      await next({ opacity: 1, color: "#ffaaee" });
      await next({ opacity: 0, color: "rgb(14,26,19)" });
    },
    from: { opacity: 0, color: "red" },
    reset: animating === false,
    onRest: () => setAnimating(false)
  });

  return (
    <animated.div style={props}>
      <span role="img" aria-label="">
        ❤️
      </span>
    </animated.div>
  );
};

export default Demo;
