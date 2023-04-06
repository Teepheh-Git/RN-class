import react from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  Dimensions,
  Image,
} from "react-native";

const dummyData = [
  {
    image:
      "https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-4.0.3&ixid" +
      "=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    username:
      "Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel ",
    time: "12:00pm",
    lastMsg: "i am on my way home to cook beans for  mom",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid" +
      "=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    username: "Mary",
    time: "3:25am",
    lastMsg: "i am on my way home to cook beans for  mom",
  },
  {
    image:
      "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid" +
      "=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    username: "Hassan ghans bosses  s ssds ddsdsdswdwdwdwdwdw",
    time: "3:36pm",
    lastMsg: "i am on my way home to cook beans for  mom",
  },
  {
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexe" +
      "ls-andrea-piacquadio-733872.jpg&fm=jpg",
    username: "Henry",
    time: "4:29am",
    lastMsg: "i am on my way home to cook beans for  mom",
  },
  {
    image:
      "https://media.istockphoto.com/id/182043494/photo/human-heart-and-vascular-system" +
      ".jpg?s=612x612&w=0&k=20&c=-NsTOa3vT0JLXvAeS7hwb0xYoeRUsBxHVruKFUh-icM=",
    username: "Jerry",
    time: "2:30pm",
    lastMsg: "i am on my way home to cook beans for  mom",
  },
];
const myScreenWidth = Dimensions.get("window").width;
const myScreenHeight = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.heading}>My Home</Text>
      <Text style={styles.searchHead}>Search</Text>
      <TextInput
        placeholderTextColor="grey"
        placeholder="Enter text here"
        style={styles.searchBar}
      />
      <FlatList
        data={dummyData}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate("Details", { ...item });
              }}
            >
              <View style={styles.box}>
                <View style={styles.leftBox}>
                  <Image
                    resizeMode="cover"
                    // source={require("./assets/favicon.png")}
                    source={{ uri: item.image }}
                    style={styles.profileImg}
                  />
                </View>
                <View style={styles.rightBox}>
                  <View style={styles.nameTimeBox}>
                    <View
                      style={{
                        width: "70%",
                      }}
                    >
                      <Text
                        style={styles.nameStyle}
                        numberOfLines={1}
                        ellipsizeMode="middle"
                      >
                        {item.username}
                      </Text>
                    </View>

                    <Text>{item.time}</Text>
                  </View>
                  <View style={styles.lastMsgBox}>
                    <Text numberOfLines={1}>{item.lastMsg}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={
          <View
            style={{
              backgroundColor: "#000000",
              width: "100%",
              height: 0.8,
              marginVertical: 2,
            }}
          />
        }
        ListEmptyComponent={
          <View>
            <Text>Empty list</Text>
          </View>
        }
        ListHeaderComponent={
          <View>
            <Text>Heade component</Text>
          </View>
        }
        ListFooterComponent={
          <View>
            <Text>Footer component</Text>
          </View>
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
  },
  heading: {
    fontSize: 30,
    alignSelf: "center",
  },
  view2: {
    width: "50%",
    backgroundColor: "red",
    height: 300,
  },
  view3: {
    width: "50%",
    backgroundColor: "blue",
    height: 300,
  },
  searchBar: {
    borderWidth: 1,
    height: 70,
    marginTop: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchHead: {
    fontSize: 16,
    marginTop: 10,
  },
  box: {
    width: myScreenWidth * 0.95,
    height: 70,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftBox: {
    height: 70,
    width: myScreenWidth * 0.2,
  },
  rightBox: {
    height: 70,
    width: myScreenWidth * 0.7,
    padding: "2%",
    justifyContent: "space-between",
  },
  nameTimeBox: {
    width: "90%",
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lastMsgBox: {
    width: "90%",
    height: 20,
  },
  profileImg: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  nameStyle: {},
});
