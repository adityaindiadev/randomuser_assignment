import { Text } from "react-native"


const  List = ({ color = 'red', list = [] })=> {

    return (list.map((value, index) => <Text style={{ color: color }}>{`${value.teacher} is a teacher, and his student name is ${value.student}`}</Text>
    ))

}

export default List