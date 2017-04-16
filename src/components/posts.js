import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions/posts'

class Posts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const { fetchPosts } = this.props;
        return fetchPosts({})
        .then(() => {

        });
    }

    render() {
        // const { blog } = this.props;
        // console.log(blog);
        return (
        <View>
            <Text>
            dsds
            ascas
            dsadsa
            </Text>
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
