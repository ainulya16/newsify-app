import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../../styles'
class FacebookTabBar extends React.Component {

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
        flexDirection:'row',
        paddingHorizontal:15,
        justifyContent:'space-between',
        paddingTop:15
    },
    logoContainer:{

    },
    logo:{
        fontFamily:'Rubik-Regular',
        fontSize:20
    },
    tabTitle:{
        fontFamily:'Rubik-Regular'
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
        color:colors.primary
    },
    tabs: {
        height: 30,
        flexDirection: 'row',
        paddingTop: 5,
        justifyContent:'space-between'
    },
});

export default FacebookTabBar;