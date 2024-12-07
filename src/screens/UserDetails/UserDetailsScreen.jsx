import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import UserDetailsScreenStyles from "./UserDetailsScreen.styles";
import Header from "../../components/Header/Header";

const UserDetailsScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <SafeAreaView style={UserDetailsScreenStyles.container}>
      <Header screenName="User Details" />
    <View style={UserDetailsScreenStyles.detailsContainer}>
      <Text style={UserDetailsScreenStyles.text}>First Name: {user.name.first}</Text>
      <Text style={UserDetailsScreenStyles.text}>Last Name: {user.name.last}</Text>
      <Text style={UserDetailsScreenStyles.text}>Gender: {user.gender}</Text>
      <Text style={UserDetailsScreenStyles.text}>
        Location: {user.location.city}, {user.location.state}, {user.location.country}
      </Text>
      <Text style={UserDetailsScreenStyles.text}>Email: {user.email}</Text>
      </View>
    </SafeAreaView>
  );
};


export default UserDetailsScreen;
