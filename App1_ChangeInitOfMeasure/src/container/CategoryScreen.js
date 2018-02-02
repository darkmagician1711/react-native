import React, {PureComponent} from 'react'
import {View,Button,StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import {changeCategoriesAction} from "../action";
import {categories} from '../data.json'
import globalstyles from '../style/globalstyles'

import UnitList from '../component/UnitList'

class CategoryScreen extends PureComponent {

    state = {
        items : categories,
        selectedId : this.props.categoryId
    };

    _onChangeUnitId = (id) => (
        this.props.changeCategory(id) && this.props.toggleScreen()
    )

    render(){
        return(
            <View style={globalstyles.content}>
                <UnitList items={this.state.items}
                          selectedId={this.state.selectedId}
                          onChangeUnitId={this._onChangeUnitId}
                />
            </View>
        )
    }
}

const mapAppStateToProps = state => ({
    categoryId : state.categories
})

const mapDispatchToProps = dispatch => ({
    changeCategory : newValue => dispatch(changeCategoriesAction(newValue))
})

export default connect(mapAppStateToProps, mapDispatchToProps)(CategoryScreen)