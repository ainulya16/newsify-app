import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
export default {
    container:{
        flex:1, 
    },
    bar:{
        backgroundColor:colors.primary,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingRight:15,
        paddingVertical:6
    },
    listItem:{
        paddingHorizontal:15,
        paddingVertical:10
    },
    rowTitle:{
        lineHeight:18,
        fontSize:14
    },
    loadingContainer:{
        padding:10,
    }
}