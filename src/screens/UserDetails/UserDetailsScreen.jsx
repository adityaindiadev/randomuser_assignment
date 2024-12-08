import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import userDetailsScreenStyles from "./UserDetailsScreen.styles";
import Header from "../../components/Header/Header";

const UserDetailsScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <SafeAreaView style={userDetailsScreenStyles.container}>
      <Header screenName="User Details" />
    <View style={userDetailsScreenStyles.detailsContainer}>
      <Text style={userDetailsScreenStyles.text}>First Name: {user.name.first}</Text>
      <Text style={userDetailsScreenStyles.text}>Last Name: {user.name.last}</Text>
      <Text style={userDetailsScreenStyles.text}>Gender: {user.gender}</Text>
      <Text style={userDetailsScreenStyles.text}>
        Location: {user.location.city}, {user.location.state}, {user.location.country}
      </Text>
      <Text style={userDetailsScreenStyles.text}>Email: {user.email}</Text>
      </View>
    </SafeAreaView>
  );
};


export default UserDetailsScreen;
