import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import userDetailsScreenStyles from "./UserDetailsScreen.styles";
import Header from "../../components/Header/Header";
import { AStorage } from "../../utils/helpers";

const UserDetailsScreen = ({ route }) => {
  const { user } = route.params;

  const [userDetails, setUserDetails] = useState({})

  console.log(user);

  async function getDataObjWithEmail() {

    const storedUsers = await AStorage.getData("users");
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      // console.log(Array.isArray( parsedUsers));
      const filterData = parsedUsers?.filter((userObj) => userObj.email === user)
      // console.log({filterData});
      setUserDetails(filterData[0])
      

    }
  }

  useEffect(() => {

    getDataObjWithEmail()

  }, [])



  return (
    <SafeAreaView style={userDetailsScreenStyles.container}>
      <Header screenName="User Details" />
      <View style={userDetailsScreenStyles.detailsContainer}>
        <Text style={userDetailsScreenStyles.text}>First Name: {userDetails?.name?.first}</Text>
      <Text style={userDetailsScreenStyles.text}>Last Name: {userDetails?.name?.last}</Text>
      <Text style={userDetailsScreenStyles.text}>Gender: {userDetails?.gender}</Text>
      <Text style={userDetailsScreenStyles.text}>
        Location: {user?.location?.city}, {userDetails?.location?.state}, {userDetails?.location?.country}
      </Text>
      <Text style={userDetailsScreenStyles.text}>Email: {userDetails?.email}</Text>
      </View>
    </SafeAreaView>
  );
};


export default UserDetailsScreen;
