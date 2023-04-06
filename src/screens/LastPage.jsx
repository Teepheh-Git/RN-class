import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const LastPage = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView />

      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <Text>go back to the first screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.pop(2)}>
        <Text>go back to prev screen</Text>
      </TouchableOpacity>
      <Text>LastPage</Text>
    </View>
  );
};

export default LastPage;

const styles = StyleSheet.create({});
