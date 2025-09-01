import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Percy Jackson Quiz",
        headerStyle: { backgroundColor: "rgba(217, 119, 6, 1)" },
        headerTintColor: "white",
      }}
    />
  );
}
