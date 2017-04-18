import React from 'react'
import { View, Text, ListView, StyleSheet } from 'react-native'
import ListItem from './ListItem'
import { connect } from 'react-redux'
import * as actions from '../../actions/Posts'

class Posts extends React.Component {
    constructor(props) {
        super(props);

        let dataSource = new ListView.DataSource({
            rowHasChanged: this.rowHasChanged,
        });

        this.state = {
            dataSource: dataSource
        }
    }


    rowHasChanged(oldRow, newRow) {
        return oldRow !== newRow;
    }

    componentDidMount() {
        this.fetchData();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.blog.posts.length !== this.props.blog.posts.length) {
            let data = nextProps.blog.posts;
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data)
            })
        }
     }

    fetchData() {
        const { fetchPosts } = this.props;
        return fetchPosts({})
        .then(() => {

        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    onEndReachedThreshold={0}
                    dataSource={this.state.dataSource}
                    renderRow={(post) => <ListItem post={post}/>}
                />
			</View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blog: state.blog
    };
};

Posts = connect(
    mapStateToProps,
    actions
)(Posts);

export default Posts

const styles = StyleSheet.create({
	container: {
		flex:1,
        flexDirection: 'column',
        paddingTop: 64
	}
})
