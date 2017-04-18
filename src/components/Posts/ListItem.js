import React from 'react'
import { View, Text } from 'react-native'

const ListItem = ({ post, dispatch }) => {
	return (
		<View>
            <Text>
            {JSON.stringify(post.title.rendered)}
            </Text>
        </View>
	)
}

export default ListItem;
