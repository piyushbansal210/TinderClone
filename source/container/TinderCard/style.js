import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "../../components/Dimension"

const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor:'orange',
        height:"69%",
        borderRadius:10,
        width:'90%',
        alignSelf:'center',
        borderRadius:20
    },
    imageContainer:{
        flex:1,
        resizeMode:'contain',
        justifyContent: 'flex-end',
        borderRadius:20
    },
    name:{
        color:'white',
        fontFamily:'Bold',
        fontSize:30
    },
    bio:{
        color:'white',
        fontFamily:'Regular',
        fontSize:20,
        
    },
    textContanier:{
        padding:20,
        
    }
})

export default styles;