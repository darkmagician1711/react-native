/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {PureComponent} from 'react';
import {AsyncStorage, Text} from 'react-native'
import AppWithNavigation from './AppWithNavigation'

import {Provider, connect} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

import reducers from './reducer'

const persisData = store => next => action => {
    const result = next(action)
    asyncSaveAppState(store.getState());
}

const asyncSaveAppState = async ({baseValue, categories, idInput, idResult}) => {
    try {
        await AsyncStorage.setItem("@appState", JSON.stringify({baseValue, categories, idInput, idResult}))
    }
    catch (err){
        console.error(err);
    }
}

export default class App extends PureComponent {

    state = {
        isLoading: true
    }

    _loadBaseValue = async () => {
        const savedState = await AsyncStorage.getItem("@appState");
        this.setState({
            isLoading: false,
            store: createStore(
                reducers,
                JSON.parse(savedState) || {},
                applyMiddleware(persisData)
            )
        })
    }

    componentDidMount() {
        this._loadBaseValue();
    }

    render() {
        return (
            this.state.isLoading
                ? <Text> Loading... </Text>
                : <Provider store={this.state.store}>
                    <AppWithNavigation/>
                </Provider>
        )
    }
}
