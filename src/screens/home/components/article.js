import React, { Component } from 'react'
import { DropDownMenu, Icon, ListView, View, Tile, Title, Subtitle, Divider } from '@shoutem/ui'

import styles from '../styles'
const categories = [
        {
          name: "Hardcover Fiction",
          slug: "hardcover-fiction"
        },
        {
          name: "Ebook Fiction",
          slug: "e-book-fiction"
        },
]
class Article extends Component{
    constructor(props){
        super(props)
    }

    renderRow(restaurant) {
        return (
          <View>
            {/* <ImageBackground
              styleName="large-banner"
              source={{ uri: restaurant.image.url }}
            > */}
              <Tile>
                <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
                <Subtitle styleName="sm-gutter-horizontal">{restaurant.slug}</Subtitle>
              </Tile>
            {/* </ImageBackground> */}
            <Divider styleName="line" />
          </View>
        );
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.bar}>
                    <DropDownMenu 
                        options={categories}
                        selectedOption={categories[0]}
                        titleProperty="name"
                        valueProperty="slug"

                    />
                    <Icon name='search'/>
                </View>
                <ListView
                    data={categories}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
    
}

export default Article 