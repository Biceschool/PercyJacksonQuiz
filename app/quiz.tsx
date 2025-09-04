import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import MyBtn from "../components/myBtn";
import styles from "../components/styles";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Questions() {
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

  const questions = [
    {
      question:
        "Percy was 12 years old when he first arrived at Camp Half-Blood",
      correctAnswer: true,
      passedAnswer: "True",
    },
    {
      question: "Annabeth is Luke's girlfriend",
      correctAnswer: false,
      passedAnswer: "False",
    },
    {
      question: "Percy's sword is named whirlpool",
      correctAnswer: false,
      passedAnswer: "False",
    },
    {
      question: "Percy and Annabeth Kiss in book four",
      correctAnswer: true,
      passedAnswer: "True",
    },
    {
      question: "Grover becomes is promoted to Lord of the Wild",
      correctAnswer: true,
      passedAnswer: "True",
    },
    {
      question: "Both of the di Angelo siblings are Hunters of Artemis",
      correctAnswer: false,
      passedAnswer: "False",
    },
  ];

  const [questionIndex, setIndex] = useState(0);

  const trueHandler = () => {
    if (questions[questionIndex].correctAnswer) {
      Alert.alert("Correct", "\nYou got the question right!", [
        { text: "Next Question" },
      ]);

      if (questionIndex < questions.length - 1) {
        setIndex(questionIndex + 1);
      } else {
        setIndex(0);
      }
    } else {
      Alert.alert("Wrong Answer", "\nYou got the question wrong", [
        { text: "Try again" },
      ]);
    }
  };

  const falseHandler = () => {
    if (!questions[questionIndex].correctAnswer) {
      Alert.alert("Correct", "\nYou got the question right!", [
        { text: "Next Question" },
      ]);

      if (questionIndex < questions.length - 1) {
        setIndex(questionIndex + 1);
      } else {
        setIndex(0);
      }
    } else {
      Alert.alert("Wrong Answer", "\nYou got the question wrong", [
        { text: "Try again" },
      ]);
    }
  };

  const prevHandler = () => {
    if (questionIndex > 0) {
      setIndex(questionIndex - 1);
    } else {
      setIndex(questions.length - 1);
    }
  };

  const nextHandler = () => {
    if (questionIndex < questions.length - 1) {
      setIndex(questionIndex + 1);
    } else {
      setIndex(0);
    }
  };

  const cheatHandler = () => {
    router.push({
      pathname: "/cheat",
      params: {
        answer: questions[questionIndex].passedAnswer,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={Number(currentState) === 0 ? styles.header2 : styles.header3}
      >
        <Text style={styles.headerText}>
          {questions[questionIndex].question}
        </Text>
      </View>
      <View style={styles.buttonSpread}>
        <View style={styles.trueFalse}>
          <MyBtn onPress={trueHandler}>
            <Text>True</Text>
          </MyBtn>
          <MyBtn onPress={falseHandler}>
            <Text>False</Text>
          </MyBtn>
        </View>
        <View style={styles.prevNext}>
          <MyBtn onPress={prevHandler}>
            <Text>
              <AntDesign name="caretleft" size={15} color="white" />
              PREV
            </Text>
          </MyBtn>
          <MyBtn onPress={nextHandler}>
            <Text>
              NEXT
              <AntDesign name="caretright" size={15} color="white" />
            </Text>
          </MyBtn>
        </View>
        <View style={styles.cheat}>
          <MyBtn
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: "rgba(80, 79, 77, 1)" },
              pressed && { backgroundColor: "rgba(45, 44, 43, 1)" },
            ]}
            onPress={cheatHandler}
          >
            Cheat
          </MyBtn>
        </View>
      </View>
    </View>
  );
}
