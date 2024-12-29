import { View, Text, Button, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import { useNavigation } from '@react-navigation/native'

// const renderItem = ({ item, index }) => {
//     return (<TouchableOpacity> 
//         <Text style={{ marginBottom: 10 }}> {item?.description} </Text>
//         </TouchableOpacity>)
// }

const APICall = () => {
    const navigation = useNavigation()


    const [loader, setLoader] = useState(false)
    const [data, setdata] = useState([])

    function callMyAPI() {
        setLoader(true)
        fetch("https://fakestoreapi.com/products",{
            method: 'GET'
        }).then((res) => {
            res.json().then((results) => {
                console.log(results);
                setdata(results)
                setLoader(false)
            })

        })
    }

    useEffect(() => {

        // callMyAPI()

    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Header screenName='API Call' />
            <Text>APICall</Text>
            {loader == true ? <ActivityIndicator /> : <></>}
            <Button title='Call' onPress={() => {
                callMyAPI()
            }} />

            {/* <Text> {data?.[0]?.description} </Text> */}
            <View style={{ width: '100%', height: 250 }}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => {
                        return (<TouchableOpacity onPress={() => {
                            navigation.navigate("APICallDetail", item)
                        }}>
                            <Text style={{ marginBottom: 10 }}> {item?.description} </Text>
                        </TouchableOpacity>)
                    }}
                />

            </View>
        </View>
    )
}

export default APICall