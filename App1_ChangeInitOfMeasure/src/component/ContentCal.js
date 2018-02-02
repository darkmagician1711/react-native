import React, {PureComponent} from 'react'
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import {changeBaseValueAction} from "../action/index";

import UnitList from './UnitList.js'
import UnitDisplay from './UnitDisplay.js'

class ContentCal extends PureComponent {

    state = {
        selectedId : 0
    };

    _onChangeUnitId = (id) => this.setState({selectedId: id});

    _onChangeText = (text) => {
        const currentItem = this.props.items.filter(
            item => item.id === this.state.selectedId
        )[0];

        this.props.changeBaseValue(
            parseFloat(text || 0) * currentItem.radio
        )
    };

    render() {
        const currentItem = this.props.items.filter(
            item => item.id === this.state.selectedId
        )[0];
        return (
            <View style={styles.wrapper}>
                <UnitDisplay title={currentItem.title}
                             value={this.props.baseValue/currentItem.radio}
                             onChange={this._onChangeText}
                />
                <UnitList items={this.props.items}
                          selectedId={this.state.selectedId}
                          onChangeUnitId={this._onChangeUnitId}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: "50%"
    }
});

const mapAppStateToProps = state => ({
    baseValue : state.baseValue
})

const mapDispatchToProps = dispatch => ({
    changeBaseValue: newValue => dispatch(changeBaseValueAction(newValue))
})

export default connect(mapAppStateToProps, mapDispatchToProps)(ContentCal)