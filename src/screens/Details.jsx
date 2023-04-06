import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Details = ({ navigation, route }) => {
  const dataFromHomeScreen = route.params;

  return (
    <View>
      <SafeAreaView />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>

      <Text>{dataFromHomeScreen.username}</Text>
      <Pressable onPress={() => navigation.navigate("LastPage")}>
        <Image source={{ uri: dataFromHomeScreen.image }} style={styles.img} />
      </Pressable>
      <Text>{dataFromHomeScreen.lastMsg}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 70,
    borderRadius: 30,
    backgroundColor: "grey",
  },
});
