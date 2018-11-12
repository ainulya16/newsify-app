import {  createStackNavigator } from 'react-navigation';
import { header } from '../styles'

// Screen
import Home  from './home';
import Detail  from './detail-article';


export default createStackNavigator({
    Home:       {   screen: Home,    
                    navigationOptions: { header:null }
                    // navigationOptions:{ headerStyle:header.primary,title:'Newsify',headerTintColor:'#fff' }
                },
    Detail:     {   screen: Detail,    
                    // navigationOptions: { header:null }
                    navigationOptions:{ headerStyle:header.primary,title:'',headerTintColor:'#fff' }
                },

},{
    initialRouteName:'Home'
});
