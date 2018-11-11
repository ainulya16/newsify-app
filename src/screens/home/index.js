import React, { Component } from 'react'
import { Platform } from 'react-native'
import ScrollableTabView  from 'react-native-scrollable-tab-view'
import TabBar from './components/tabBar'
import Article from './components/article'
import Book from './components/book'

class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const paddingTop = Platform.select({ios:20,android:0})
        return (
            
            <ScrollableTabView 
                style={{paddingTop}}
            renderTabBar={()=><TabBar {...this.props}/>}
            >
              <Article tabLabel="Article" />
              <Book tabLabel="Book" />
            </ScrollableTabView>
        );
    }
    
}

export { Home }