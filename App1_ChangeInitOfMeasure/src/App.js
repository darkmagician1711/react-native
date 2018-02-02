/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {PureComponent} from 'react';
import ConvertScreen from './container/ConvertScreen'
import CategoryScreen from './container/CategoryScreen'

import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'

import reducers from './reducer'

const store = createStore(reducers)

const page = {
    CONVERT: "CONVERT",
    CATEGORY: "CATEGORY"
}

export default class App extends PureComponent{

    state = {
        currentPage: page.CATEGORY
    }

    _goToCategoryScreen = () => this.setState({currentPage: page.CATEGORY});
    _goToConvertScreen = () => this.setState({currentPage: page.CONVERT})

    render() {
        return (
            <Provider store={store}>
                {
                    this.state.currentPage === page.CONVERT
                        ? <ConvertScreen toggleScreen={this._goToCategoryScreen}/>
                        : <CategoryScreen toggleScreen={this._goToConvertScreen}/>
                }
            </Provider>
        )
    }
}
