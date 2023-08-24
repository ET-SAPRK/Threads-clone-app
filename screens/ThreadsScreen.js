import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useContext } from "react";
import { UserType } from "../UserContext";
import axios from "axios";

const ThreadsScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [content, setContent] = useState("");

  const handlePostSubmit = () => {

  }
  return (
    <SafeAreaView style={{ padding: 10, marginTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          padding: 10,
        }}
      >
         <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
          }}
        />
        <Text>Sam</Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 10 }}>
      <TextInput
          value={content}
          onChangeText={(text) => setContent(text)}
          placeholderTextColor={"black"}
          placeholder="Type your message..."
          multiline
        />
      </View>
      <View style={{ marginTop: 20 }} />
      <Button onPress={handlePostSubmit} title="Share Post" style={styles.bt} />
    </SafeAreaView>
  )
}

export default ThreadsScreen

const styles = StyleSheet.create({
})