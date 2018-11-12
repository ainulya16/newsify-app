import React, { Component } from 'react'
import { View } from 'react-native'
import ScrollableTabView  from 'react-native-scrollable-tab-view'
import TabBar from './components/tabBar'
import Article from './components/article'
import Book from './components/book'
import styles from './styles';
import { colors } from '../../styles';
import { StatusBar } from '../../components'

export default class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={[styles.container]}>
                <StatusBar backgroundColor={colors.primary} barStyle='light-content'/>
                <ScrollableTabView 
                    renderTabBar={()=><TabBar {...this.props}/>}
                >
                    <Article tabLabel="Article" {...this.props} />
                    <Book tabLabel="Book" {...this.props}/>
                </ScrollableTabView>
            </View>
        );
    }
    
}
