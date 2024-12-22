import { View, Text, Button } from 'react-native'
import { useState, useEffect } from 'react'
import { company, dummy } from './utils/constants'
import List from './Components/List'
import Header from '../components/Header/Header'
function First() {
    //special varible
    const [myName, setmyName] = useState("Aditya")
    const [loader, setloader] = useState(false)

    useEffect(function () {
        setTimeout(() => {
            setmyName("Yazdan")
        }, 3000);
    }, [])
    // let name = "Aditya"

    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Header screenName='Aditya' isLoading={loader} />
            <List list={company} />
            <List list={company} color='green' />
            <Text>{myName}</Text>
            <Button color={"blue"} title='Click Me!'

                onPress={function () {
                    setmyName("Atif")
                    if (loader == true) {
                        setloader(false)
                    } else {
                        setloader(true)
                    }

                }} />
        </View>
    )
}

export default First