import React, { useRef, useEffect } from "react";
import lottie from "lottie-web/build/player/lottie_light";

const Lottie = ({
  name,
  height,
  width,
  title = "",
  ariaRole = "presentation",
  ariaLabel = "animation",
  options: {
    loop = true,
    autoplay = true,
    renderer = "svg",
    rendererSettings
  } = {},
  style: userStyle
}) => {
  const ref = useRef(null);
  const anim = useRef(null);

  const defaultStyle = {
    width: width || "100%",
    height: height || "100%",
    overflow: "hidden",
    outline: "none"
  };

  const style = { ...defaultStyle, ...userStyle };

  const derivedOptions = {
    loop,
    autoplay,
    renderer,
    style,
    rendererSettings,
    name
  };

  const destroy = currentAnim => currentAnim.destroy();

  useEffect(() => {
    const init = async () => {
      if (ref && ref.current) {
        const animationData = await import(
          /* webpackChunkName: "Lottie" */ `./animations/${name}.json`
        );
        const options = {
          container: ref.current,
          animationData,
          ...derivedOptions
        };

        if (!anim || !anim.current) {
          anim.current = lottie.loadAnimation(options);
        }
      }
    };

    init();

    return function cleanup() {
      if (anim && anim.current) {
        destroy(anim.current);
        anim.current = null;
      }
    };
  }, [name, derivedOptions]);

  return (
    <div
      ref={ref}
      style={style}
      title={title}
      role={ariaRole}
      aria-label={ariaLabel}
    />
  );
};

export const lottieCode = `
function Lottie ({
  name,
  height,
  width,
  title = "",
  ariaRole = "presentation",
  ariaLabel = "animation",
  options: {
    loop = true,
    autoplay = true,
    renderer = "svg",
    rendererSettings
  } = {},
  style: userStyle
}) {
  const ref = useRef(null);
  const anim = useRef(null);

  const defaultStyle = {
    width: width || "100%",
    height: height || "100%",
    overflow: "hidden",
    outline: "none"
  };

  const style = { ...defaultStyle, ...userStyle };

  const derivedOptions = {
    loop,
    autoplay,
    renderer,
    style,
    rendererSettings,
    name
  };

  const destroy = currentAnim => currentAnim.destroy();

  useEffect(() => {
    const init = async () => {
      if (ref && ref.current) {
        const animationData = lottieExample

        const options = {
          container: ref.current,
          animationData,
          ...derivedOptions
        };

        if (!anim || !anim.current) {
          anim.current = lottie.loadAnimation(options);
        }
      }
    };

    init();

    return function cleanup() {
      if (anim && anim.current) {
        destroy(anim.current);
        anim.current = null;
      }
    };
  }, [name, derivedOptions]);

  return (
    <div
      ref={ref}
      style={style}
      title={title}
      role={ariaRole}
      aria-label={ariaLabel}
    />
  );
};
`

export default Lottie;
