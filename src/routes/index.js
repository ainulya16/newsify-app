import {  createStackNavigator } from 'react-navigation';
import { header } from '../styles'

// Screen
import { Home } from '../screens';


export default createStackNavigator({
    Home:       {   screen: Home,    
                    navigationOptions: { header:null }
                    // navigationOptions:{ headerStyle:header.primary,title:'Newsify',headerTintColor:'#fff' }
                },
},{
    initialRouteName:'Home'
});
