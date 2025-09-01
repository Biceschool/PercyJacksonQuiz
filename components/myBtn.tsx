import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

type MyBtnProps = PressableProps & {
  children?: React.ReactNode;
};

const MyBtn = ({ children, ...props }: MyBtnProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      {...props}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(217, 119, 6, 1)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 125,
    height: 60,
  },
  buttonPressed: {
    backgroundColor: "rgba(182, 98, 1, 1)",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default MyBtn;
