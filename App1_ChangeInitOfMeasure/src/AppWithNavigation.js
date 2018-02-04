import React, {PureComponent} from 'react'
import {} from 'react-native'
import {StackNavigator, addNavigationHelpers} from 'react-navigation'
import {connect} from 'react-redux'
import ConvertScreen from './container/ConvertScreen'
import CategoryScreen from './container/CategoryScreen'

const AppNavigator = StackNavigator({
    ConvertScreen: {
        screen: ConvertScreen
    },
    CategoryScreen: {
        screen: CategoryScreen
    }
})

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams("ConvertScreen")
)

export const navigationReducer = (state = initialState , action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
}

class AppWithNavigation extends PureComponent {
    state={}
    render(){
        return(
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        )
    }
}

const mapAppStateToProps = ({nav}) => ({nav})

export default connect(mapAppStateToProps)(AppWithNavigation)