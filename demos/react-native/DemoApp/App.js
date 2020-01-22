import React, { useRef, useEffect } from "react";
import { StyleSheet, Button, View } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
  const anim = useRef(null);

  const destroy = () => {
    if (anim && anim.current) {
      anim.current.destroy();
      anim.current = null;
    }
  };

  const reset = () => {
    if (anim.current) {
      anim.current.reset();
      anim.current.play();
    }
  };

  useEffect(() => {
    const init = async () => {
      if (anim && anim.current) {
        anim.current.play();
      }
    };

    init();

    return function cleanup() {
      destroy();
    };
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
        source={require("./assets/animations/empty.json")}
      />
      <View>
        <Button title="Restart Animation" onPress={reset} />
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
