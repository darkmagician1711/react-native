import React, {PureComponent} from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import styles from '../style/globalstyles.js'

export default class UnitDisplay extends PureComponent {

    state = {

    }

    _onPress = () => {
        this.props.onChangeUnitId(this.props.items.id);
    }

    render() {
        return (
            <TouchableOpacity style={[styless.button, (this.props.isEven) ? styless.colorHigh : styless.colorLow]}
                              onPress={this._onPress}>
                <Text style= {(this.props.isSelected)? styles.textHighLight: styles.textNormal}>{this.props.items.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styless = StyleSheet.create({
    button : {
        padding: 10
    },
    colorHigh: {
        backgroundColor: "rgba(98,68,135,1)"
    },
    colorLow: {
        backgroundColor: "rgba(120,84,164,1)"
    }
});


