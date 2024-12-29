import { View, Text, Button, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const APICallDetail = (props) => {
    const navigation = useNavigation()
    const [loader, setLoader] = useState(false)

    // console.log(props?.route?.params);

    function callPost() {
        setLoader(true)
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res => res.json())
            .then(json => {
                console.log({json})
                setLoader(false)
            }).catch((error) => {
                console.log({ error });
                setLoader(false)
            })
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Button title='Go Back' onPress={() => {
                navigation.goBack()
            }} />
            <Text>APICallDetail</Text>
            <Image style={{ width: 250, height: 200 }} source={{ uri: props?.route?.params?.image }} />
            {loader == true ? <ActivityIndicator /> : <></>}

            <Button title='call post' onPress={callPost} />
        </View>
    )
}

export default APICallDetail