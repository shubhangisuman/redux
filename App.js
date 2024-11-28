import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import Landing from "./components/Landing";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Landing />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
