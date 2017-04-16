import React from 'react'
import { View, Text } from 'react-native'
import { Router, Scene, Route, Actions } from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import configureStore from './configureStore'
import Posts from './components/posts'

const Kernel = () => (
    <Provider store={configureStore()}>
        <Router>
            <Scene key="root">
                <Scene key="posts" title="Posts" component={Posts} initial={true}>
                </Scene>
            </Scene>
        </Router>
    </Provider>
)

export default Kernel
