import React from 'react';
import { View, Text, Button } from 'react-native'
import { company, dummy } from './utils/constants'
import List from './Components/List'
import Header from '../components/Header/Header'
class FirstClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myName: "Aditya",
            loader: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ myName: 'Yazdan' })
        }, 3000);
    }
    componentWillUnmount() {
        console.log("Bye Bye");
    }

    componentWillMount() {
        console.log("componentWillMount");

    }

    render() {
        return (<View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Header screenName='Aditya' isLoading={this.state.loader} />
            <List list={company} />
            <List list={company} color='green' />
            {/* <Text>{myName == 'Yazdan' ? "Atif" : myName}</Text> */}

            {this.state.myName == 'Yazdan' ? <Text style={{ color: 'blue' }}>{"Shyam"}</Text> : <Text>{this.state.myName}</Text>}
            {/* <Button color={"blue"} title='Click Me!'

                onPress={function () {
                    setmyName("Atif")
                    if (loader == true) {
                        setloader(false)
                    } else {
                        setloader(true)
                    }

                }} 
                /> */}
        </View>)
    }

}

export default FirstClass

