import React, { Component } from 'react'
import { FlatList } from 'react-native';
import { View, Row, Subtitle, Caption, Text } from '@shoutem/ui'
import { DropDownMenu } from './dropdown'
import { get_book, load_more_book } from '../../../actions'
import { connect } from 'react-redux'
import styles from '../styles'
import moment from 'moment'
import { debounce } from 'lodash'
const list = [
        {
          name: "Hardcover",
          slug: "hardcover-fiction"
        },
        {
          name: "Ebook",
          slug: "e-book-fiction"
        },
]
class Book extends Component{
    state = {
        list:list[0].slug,
    }
    constructor(props){
        super(props)
        this._debouncedSearch = debounce(() => this.searchArticle(),1000);
    }

    componentDidMount(){
        this.initialize()
    }
    initialize = () =>{
        this.props.get_book(this.state)
    }
    onOptionSelected = (val) =>{
        this.setState({sort:val.slug})
        this.searchArticle()
    }
    searchArticle(){
        this.props.get_book(this.state)
    }
    renderRow= ({item : data})=> {
        const { title, contributor, description } = data.book_details[0]
        return (
            <Row style={styles.listItem}>
                <View styleName="vertical stretch space-between">
                    <Subtitle numberOfLines={2} style={styles.rowTitle}>{title}</Subtitle>
                    <Caption>{contributor}</Caption>
                    <Text>{description}</Text>
                    <Caption>{moment(data.published_date).format('DD MMMM YYYY')}</Caption>
                </View>
            </Row>
        );
    }

    render(){
        const { data, loading } = this.props
        return (
            <View style={styles.container}>
                
                <View style={styles.bar}>
                    <DropDownMenu 
                        options={list}
                        selectedOption={list.filter(item=>item.slug==this.state.list)[0]}
                        onOptionSelected={this.onOptionSelected}
                        titleProperty="name"
                        valueProperty="slug"
                        style={{height:30}}
                    />
                </View>
                <FlatList
                    onRefresh={this.initialize}
                    refreshing={loading}
                    data={data}
                    extraData={this.props}
                    renderItem={this.renderRow}
                    keyExtractor={(item,key)=>key}
                />
            </View>
        );
    }
    
}

const mapDispatchToProps = {
    get_book,
    load_more_book,
}
const mapStateToProps = (state) => ({
    data    : state.book.data,
    loading : state.book.loading_book
})
export default connect(mapStateToProps, mapDispatchToProps)(Book) 