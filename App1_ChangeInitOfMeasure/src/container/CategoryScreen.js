import React, {PureComponent} from 'react'
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {connect} from 'react-redux'

import {changeCategoriesAction} from "../action";
import {categories} from '../data.json'
import globalstyles from '../style/globalstyles'

import UnitList from '../component/UnitList'

class CategoryScreen extends PureComponent {

    static navigationOptions = ({navigation}) => ({
        title: "Category",
    })

    _onChangeUnitId = (id) => {
        this.props.changeCategory(id),
            this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={globalstyles.content}>
                <UnitList items={categories}
                          selectedId={this.props.categoryId}
                          onChangeUnitId={this._onChangeUnitId}
                />
            </View>
        )
    }
}

const mapAppStateToProps = state => ({
    categoryId: state.categories
})

const mapDispatchToProps = dispatch => ({
    changeCategory: newValue => dispatch(changeCategoriesAction(newValue))
})

export default connect(mapAppStateToProps, mapDispatchToProps)(CategoryScreen)