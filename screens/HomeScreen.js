import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useEffect, useContext, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { UserType } from "../UserContext";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUsers();
  }, []);

  useEffect(() =>{
    fetchPosts()
  },[])

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://192.168.43.207:3000/get-posts");
      setPosts(response.data);
    } catch (error) {
      console.log("error fetching posts", error);
    }
  };
  console.log("posts", posts);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})