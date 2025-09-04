import MyBtn from "@/components/myBtn";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "../components/styles";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Index() {
  ScreenOrientation.unlockAsync();

  const [currentState, setState] = useState(0);

  useEffect(() => {
    const subscription = ScreenOrientation.addOrientationChangeListener(
      (event) => {
        if (
          event.orientationInfo.orientation === 3 ||
          event.orientationInfo.orientation === 4
        ) {
          setState(1);
        } else if (event.orientationInfo.orientation === 1) {
          setState(0);
        }
      }
    );

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={currentState === 0 ? styles.header : styles.header2}>
        <Text style={styles.headerText}>
          Percy Jackson and the Olympians Quiz
        </Text>
      </View>
      <View style={styles.startQuiz}>
        <MyBtn
          onPress={() => router.push("./quiz")}
          style={({ pressed }) => [
            styles.button,
            { width: 200, height: 90 },
            pressed && { backgroundColor: "rgba(182, 98, 1, 1)" },
          ]}
        >
          <Text style={{ fontSize: 25 }}>Start Quiz</Text>
        </MyBtn>
      </View>
    </View>
  );
}
