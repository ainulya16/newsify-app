import React, { Component } from 'react'
import {  View, WebView } from 'react-native'
import styles from './styles'
export default class Detail extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const source = {uri: this.props.navigation.state.params.url}
        return (
            <View style={[styles.container]}>
                <WebView source={source} style={{flex:1}}/>
            </View>
        );
    }
    
}