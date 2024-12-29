import { View, Text, Button, Alert, TextInput, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import { company, dummy } from './utils/constants'
import List from './Components/List'
import Header from '../components/Header/Header'
import { useNavigation } from '@react-navigation/native'
function First(props) {
    const navigation = useNavigation()
    //special varible
    const [myName, setmyName] = useState("Aditya")
    const [loader, setloader] = useState(false)
    const [formValue, setformValue] = useState('')
    const [newFormValue, setnewformValue] = useState('')
    const [btnColor, setbtnColor] = useState('grey')

    useEffect(function () {
        setTimeout(() => {
            setmyName("Yazdan")
        }, 3000);
        console.log(props?.route?.params);

        return () => {
            // console.log("Bye Bye");
            // Alert.alert("Don't Go!")
        }
    }, [])
    // let name = "Aditya"

    function checkValidation(){
        if (!formValue.includes("@")) {
            Alert.alert("Enter valid email")
        }else{
            Alert.alert("Good")

        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Header screenName='Aditya' isLoading={loader} />
            <List list={company} />
            <List list={company} color='green' />
            {/* <Text>{myName == 'Yazdan' ? "Atif" : myName}</Text> */}

            {myName == 'Yazdan' ? <Text style={{ color: 'blue' }}>{"Shyam"}</Text> : <Text>{myName}</Text>}

            {/* Form Component TextInput */}

            <TextInput placeholder='Enter Email' style={{ width: '80%', borderColor: 'black', borderWidth: 1, marginTop: 10, height: 30 }}
                // value=''
                value={formValue}
                onChangeText={(val) => {
                    // console.log(val);
                    setformValue(val)
                }}
                // onBlur={checkValidation}
            />
            <TextInput placeholder='Enter New Value' style={{ width: '80%', borderColor: 'black', borderWidth: 1, marginTop: 10, height: 30 }}
                // value=''
                value={newFormValue}
                onChangeText={(val) => {
                    // console.log(val);
                    setnewformValue(val)
                }}
                onChange={(val) => {
                    // console.log(val.nativeEvent.text);
                    if (val.nativeEvent.text == "Bye") {
                        val.currentTarget.blur()
                    }
                    // 
                }}
                onBlur={() => {
                    console.log("newFormValue");
                    setnewformValue("hellow")
                }}

                onKeyPress={(key) => {
                    console.log(key.nativeEvent.key);
                    // if (key.nativeEvent.key == "Backspace") {
                    //     Alert.alert("Dont")
                    // }
                }}
            />
            <TouchableOpacity activeOpacity={0.5} onPressIn={() => {
                // console.log("just pressed");
                // setbtnColor("green")

                navigation.navigate("APICall")
                // checkValidation()

            }}
                onPressOut={() => {
                    console.log("just leave");
                    setbtnColor("red")

                }}
                onPress={() => {
                    // console.log("HI");
                    // setformValue("")
                    // setnewformValue("")

                }}>
                <View style={{ width: 100, height: 50, backgroundColor: btnColor, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Text>{"Click Me"}</Text>
                </View>
            </TouchableOpacity>
            {/* <Button color={"blue"} title='Click Me!'

                onPress={function () {
                    setmyName("Atif")
                    if (loader == true) {
                        setloader(false)
                    } else {
                        setloader(true)
                    }

                }} /> */}
        </View>
    )
}

export default First