import React, {PureComponent} from 'react'
import {View, Text, TextInput} from 'react-native'
import styles from '../style/globalstyles'

export default class UnitDisplay extends PureComponent {
    state = {
        text : this.props.value.toString()
    };

    _onChange = (text) => {
        this.setState({text});
        this.props.onChange(text);
    }

    _onBlur = () => {
        this.setState({
            text : this.props.value.toString()
        })
    }

    componentWillReceiveProps(nextProps){
        if (parseFloat(this.state.text) !== nextProps.value){
            this.setState({text: nextProps.value.toString()})
        }
    }

    render() {
        return (
            <View style={styles.unitDisplay}>
                <Text style={[styles.textLarge, {marginBottom: 20}]}>{this.props.title}</Text>
                <TextInput style={[styles.textLarge]}
                           value={this.state.text}
                           onChangeText={this._onChange}
                           onBlur={this._onBlur}
                           keyboardType="numeric"
                />
            </View>
        )
    }
}


