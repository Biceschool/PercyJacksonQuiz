import MyBtn from "@/components/myBtn";
import { router } from "expo-router";
import { Text, View } from "react-native";
import styles from "../components/styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
