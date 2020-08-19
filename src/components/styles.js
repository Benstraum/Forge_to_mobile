import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover'
    },
    text: {
        fontSize: 12,
        color: 'black'
    },
    bgImage:{
        height:'100%',
        width:'100%',
        flex:1,
        zIndex:0,
        position:'absolute',
        opacity:0.7,
        backgroundColor: '#313131',
    },
    register:{
        borderColor:'black',
        backgroundColor:'white',
        flexDirection:'row',
        opacity:1,
        color:'black',
        width:'60%',
        textAlign:'center',
        marginTop:10
    }
});
export default styles;