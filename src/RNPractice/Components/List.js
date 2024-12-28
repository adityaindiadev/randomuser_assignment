import { Text } from "react-native"


const List = ({ color, list }) => {

    // Props validation

    list = list === undefined ? [] : list
    color = color === undefined ? 'red' : color

    return (list.map((value, index) => <Text style={{ color: color }}>{`${value.teacher} is a teacher, and his student name is ${value.student}`}</Text>
    ))

}



export default List