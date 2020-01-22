import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 80%;
`;

const Demo = () => {
  const [state, toggle] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: config.gentle
  });

  const handleClick = () => toggle(!state);

  return (
    <ActionWrapper onClick={handleClick}>
      <animated.div
        style={{
          opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
            })
            .interpolate(x => `scale(${x})`)
        }}
      >
        click
      </animated.div>
    </ActionWrapper>
  );
};

export default Demo;
