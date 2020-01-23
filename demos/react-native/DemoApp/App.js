import React, { useRef, useEffect } from "react";
import { StyleSheet, Button, View } from "react-native";
import LottieView from "lottie-react-native";
const boyReading = require("./assets/animations/boy-reading.json");
const dogWalking = require("./assets/animations/dog.json");

export default function App() {
  const anim = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);

  const destroy = () => {
    if (anim && anim.current) {
      anim.current.destroy();
      anim.current = null;
    }
  };

  // const reset = () => {
  //   if (anim && anim.current) {
  //     anim.current.reset();
  //     anim.current.play();
  //   }
  // };

  const play = () => {
    if (anim && anim.current) {
      setIsAnimating(!isAnimating);
    }
  };

  const stop = () => {
    if (anim && anim.current) {
      anim.current.stop();
    }
  };

  useEffect(() => {
    if (anim && anim.current && isAnimating) {
      anim.current.play();
    }
    return function cleanup() {
      destroy();
    };
  }, [isAnimating]);
  return (
    <View style={styles.container}>
      <LottieView
        ref={anim}
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#eee"
        }}
        source={require("./assets/animations/dog.json")}
      />
      <View>
        <Button title="⏯" onPress={play} />
        <Button title="⏺" onPress={stop} />
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
  }
});
