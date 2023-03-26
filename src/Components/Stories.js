import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import users from "../../userList.json";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../Assets/Colors/Colors";
const Stories = () => {
  const [image, setImage] = useState("");
  const PickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    }).then((result) => {
      if (!result?.canceled) {
        setImage(result.assets[0].uri);
      }
    });
  };
  return (
    <ScrollView
      contentContainerStyle={{
        marginVertical: 20,
        marginHorizontal: 10,
        justifyContent: "center",
        height: 150,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={{ height: 130 }} onPress={PickImage}>
        <View style={styles.setImage}>
          <View style={styles.addbtnContainer}>
            <Ionicons name="add" style={styles.addbtn} />
          </View>
        </View>
        <Text style={[styles.userName, { textTransform: "capitalize" }]}>
          You Story
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ padding: 7 }} onPress={() => setImage("")}>
        {image && <Image source={{ uri: image }} style={styles.userImage} />}
      </TouchableOpacity>
      {/* {users.map((item, index) => (
        <View style={{ width: 85, padding: 5 }} key={index}>
          <LinearGradient
            colors={["#bc2a8d", "#e95950", "#fccc63"]}
            style={{ padding: 2, borderRadius: 50 }}
          >
            <Image source={{ uri: item.photo }} style={styles.userImage} />
          </LinearGradient>
          <Text style={styles.userName}>{item.name}</Text>
        </View>
      ))} */}
    </ScrollView>
  );
};
export default Stories;

const styles = StyleSheet.create({
  userImage: {
    width: 90,
    height: 120,
    borderRadius: 50,
    borderColor: Colors.primaryColor200,
    borderWidth: 1,
  },
  userName: {
    textAlign: "center",
    fontSize: 12,
    textTransform: "lowercase",
    margin: 5,
  },
  addbtnContainer: {
    backgroundColor: "#4c68d7",
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  addbtn: {
    color: "#ffffff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 12,
  },
  setImage: {
    borderRadius: 50,
    width: 90,
    height: 120,
    backgroundColor: Colors.primaryColor500,
    justifyContent: "center",
    alignItems: "center",
  },
});
