import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import LottieView from "lottie-react-native";
const boyReading = require("./assets/boy-reading.json");
const dogWalking = require("./assets/cat.json");

/**
 *
 * API:
 * speed
 * progress
 * speed
 * duration
 * loop
 * autoPlay
 * autoSize
 * style
 * imageAssetsFolderon
 * AnimationFinish
 */

export default function App() {
  const [direction, setDirection] = useState(1);
  const anim = useRef(null);
  const play = () => {
    anim.current.play();
  };

  const reset = () => {
    anim.current.reset();
  };

  const rewind = () => {
    const current = anim.current.progress;
    current > 0 && anim.current.play(current - 1);
  };

  const forward = () => {
    const current = anim.current.progress;
    current > 0 && anim.current.play(current + 10);
  };

  const reverse = () => {
    setDirection(-1);
    anim.current.play();
  };

  useEffect(() => {
    if (anim && anim.current) {
      anim.current.play();
    }
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        ref={anim}
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#eee"
        }}
        speed={direction}
        source={dogWalking}
      />
      <View style={styles.controls}>
        <Button title="⏯" onPress={play} />
        <Button title="⏪" onPress={rewind} />
        <Button title="⏩" onPress={forward} />
        <Button title="⏺" onPress={reset} />
        <Button title="🔄" onPress={reverse} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  controls: {
    display: "flex",
    flexDirection: "row"
  }
});
