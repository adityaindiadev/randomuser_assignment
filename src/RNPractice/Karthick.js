import { useState } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";

export function Karthick({ name = "Rahul", age = 24 }) {

    const [val, setval] = useState(3)
    // let val = 3

    return <SafeAreaView>
        <Text>{name}</Text>
        <Text>{age}</Text>
        <Text>{val}</Text>
        <Button title="Click" onPress={() => {
            setval(val + 1)
            // val = val+1
        }} />
        <Button title="show val" onPress={() => {
            console.log(val);

        }} />
    </SafeAreaView>
}

export function karthickFunc(name,) {
    return name + " Hi"
}