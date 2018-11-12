import React, { Component } from 'react'
import {  View, WebView } from 'react-native'
import styles from './styles'
export default class Detail extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { uri } = this.props.navigation.state.params
        return (
            <View style={[styles.container]}>
                <WebView source={{uri}} style={{flex:1}}/>
            </View>
        );
    }
    
}