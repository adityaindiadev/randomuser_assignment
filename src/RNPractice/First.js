import { View, Text, Button } from 'react-native'
import { useState, useEffect } from 'react'
import { company } from './utils/constants'
function First() {
    const [myName, setmyName] = useState("Aditya")

    useEffect(function () {
        setTimeout(() => {
            setmyName("Yazdan")
        }, 3000);
    }, [])
    // let name = "Aditya"

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            {company.map(function (value, index) {


                return (
                    <Text style={{ color: 'red' }}>{`${value.teacher} is a teacher, and his student name is ${value.student}`}</Text>

                )

            })}
            <Text>{myName}</Text>
            <Button title='Click Me!'

                onPress={function () {
                    setmyName("Atif")
                }} />
        </View>
    )
}

export default First