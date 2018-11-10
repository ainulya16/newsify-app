import React, { Component } from 'react'
import ScrollableTabView  from 'react-native-scrollable-tab-view'
import styles from './styles'
import Article from './components/article'
import Book from './components/book'

class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            
            <ScrollableTabView>
              <Article tabLabel="Article" />
              <Book tabLabel="Book" />
            </ScrollableTabView>
        );
    }
    
}

export { Home }