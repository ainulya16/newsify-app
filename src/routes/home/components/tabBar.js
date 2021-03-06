import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../../styles'
class CustomTabBar extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
  }


  render() {
      const { tabs, goToPage, style, activeTab } = this.props
    return <View style={[ styles.container, style, ]}>
            <View style={styles.logoContainer}>
                <Text style={styles.logo}>Newsify</Text>
            </View>
            <View style={styles.tabs}>
                {tabs.map((tab, i) => {
                    return <TouchableOpacity key={tab} onPress={() => goToPage(i)} style={[styles.tab,{paddingRight:i==tabs.length-1 ? 0 : 10}]}>
                        <Text style={[styles.tabTitle,activeTab==i && styles.activeTab]}>{tab}</Text>
                    </TouchableOpacity>;
                })}
            </View>
    </View>;
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        flexDirection:'row',
        paddingHorizontal:15,
        justifyContent:'space-between',
        paddingTop:15
    },
    logo:{
        fontFamily:'Rubik-Regular',
        fontSize:20,
        color:'white'
    },
    tabTitle:{
        fontFamily:'Rubik-Regular',
        color:'rgba(255,255,255,0.5)'
    },
    tabGroup:{
        flexDirection:'row'
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    activeTab:{
        color:'white'
    },
    tabs: {
        height: 30,
        flexDirection: 'row',
        paddingTop: 5,
        justifyContent:'space-between'
    },
});

export default CustomTabBar;