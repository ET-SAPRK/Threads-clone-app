import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { UserType } from "../UserContext";

const User = ({ item }) => {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
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
        <Text style={{ fontSize: 15, fontWeight: "500", flex: 1 }}>
          {item?.name}
        </Text>
        <Pressable
          onPress={() => sendFollow(userId, item._id)}
          style={{
            borderColor: "#D0D0D0",
            borderWidth: 1,
            padding: 10,
            marginLeft: 10,
            width: 100,
            borderRadius: 8,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" }}
          >
            Follow
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
