import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const Demo = () => {
  const [toggle, set] = useState(false);
  const handleClick = () => set(!toggle);
  const transitions = useTransition(toggle, null, {
    from: {
      position: "absolute",
      opacity: 0,
      transform: "translate3d(0, 100%,0)"
    },
    enter: { opacity: 1, transform: "translate3d(0, 0%,0)" },
    leave: { opacity: 0, transform: "translate3d(0, -100%,0)" }
  });
  return (
    <div onClick={handleClick}>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div key={key} style={props}>
            <span role="img" aria-label="">
              😄
            </span>
          </animated.div>
        ) : (
          <animated.div key={key} style={props}>
            <span role="img" aria-label="">
              🤪
            </span>
          </animated.div>
        )
      )}
    </div>
  );
};

export default Demo;
