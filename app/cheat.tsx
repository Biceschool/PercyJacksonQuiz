import { useLocalSearchParams } from "expo-router";
import { Alert, Text, View } from "react-native";
import MyBtn from "../components/myBtn";
import styles from "../components/styles";

export default function Cheat() {
  const { answer } = useLocalSearchParams();

  const showHandler = () => {
    Alert.alert("Correct Answer", `\n${answer}`, [{ text: "Done Cheating" }]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Are you sure you want to do this?</Text>
      </View>
      <View style={[styles.buttonSpread, { alignItems: "center" }]}>
        <MyBtn
          style={({ pressed }) => [
            styles.button,
            { width: 200, height: 75 },
            pressed && { backgroundColor: "rgba(182, 98, 1, 1)" },
          ]}
          onPress={showHandler}
        >
          <Text style={{ fontSize: 20 }}>Show Answer</Text>
        </MyBtn>
      </View>
    </View>
  );
}
