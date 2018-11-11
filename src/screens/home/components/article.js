import React, { Component } from 'react'
import { DropDownMenu, ListView, View, Row, Image, Subtitle, Caption, TextInput } from '@shoutem/ui'
import { get_articles, load_more_article } from '../../../actions'
import { connect } from 'react-redux'
import styles from '../styles'
import moment from 'moment'
import { environment } from '../../../config'
import { debounce } from 'lodash'
const sortby = [
        {
          name: "Newest",
          slug: "newest"
        },
        {
          name: "Oldest",
          slug: "oldest"
        },
]
class Article extends Component{
    state = {
        page:0,
        sort:sortby[0].slug,
        q:''
    }
    constructor(props){
        super(props)
        this._debouncedSearch = debounce(() => this.searchArticle(),1000);
    }

    componentDidMount(){
        console.log(this.props)
        this.props.get_articles(this.state)
    }
    onOptionSelected = (val) =>{
        this.setState({sort:val.slug})
        this.searchArticle()
    }
    searchArticle(){
        this.props.get_articles(this.state)
    }
    changeQuery=(text)=> {
        this.setState({q:text});
        this._debouncedSearch();
    }
    renderRow(data) {
        return (
            <Row style={styles.listItem}>
                <View styleName="vertical stretch space-between">
                    <Subtitle numberOfLines={2} style={styles.rowTitle}>{data.headline.main}</Subtitle>
                    <Caption>{moment(data.pub_date).format('DD MMMM YYYY')}</Caption>
                </View>
                {data.multimedia.length>0&&<Image
                    styleName="small rounded-corners"
                    source={{ uri: `${environment.url}${data.multimedia.filter(item=>item.subtype=='thumbnail')[0].url}` }}
                />}
            </Row>
        );
    }
    loadMore = () =>{
        this.setState({page:this.state.page+1})
        this.props.load_more_article(this.state)
    }


    render(){
        const { data, loading } = this.props
        return (
            <View style={styles.container}>
                
                <View style={styles.bar}>
                    <DropDownMenu 
                        options={sortby}
                        selectedOption={sortby.filter(item=>item.slug==this.state.sort)[0]}
                        onOptionSelected={this.onOptionSelected}
                        titleProperty="name"
                        valueProperty="slug"
                        style={{height:30}}
                    />
                    <TextInput
                        placeholder={'Search...'}
                        style={{flex:1,paddingVertical:5,height:30,borderRadius:5,paddingHorizontal:7}}
                        onChangeText={this.changeQuery}
                    />
                </View>
                <ListView
                    data={data}
                    renderRow={this.renderRow}
                    loading={loading}
                    onLoadMore={this.loadMore}
                />
            </View>
        );
    }
    
}

const mapDispatchToProps = {
    get_articles,
    load_more_article,
}
const mapStateToProps = (state) => ({
    data    : state.article.data,
    loading : state.article.loading_article
})
export default connect(mapStateToProps, mapDispatchToProps)(Article) 