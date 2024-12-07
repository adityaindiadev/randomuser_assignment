import { StyleSheet } from "react-native";
import { dimensions } from "../../../utils/helpers";

const LoaderStyles = StyleSheet.create({
    container:{
        elevation: 3,
        position: 'absolute',
        height: dimensions.SCREEN_HEIGHT,
        width: '100%',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoaderStyles