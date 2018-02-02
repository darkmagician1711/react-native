import React, {PureComponent} from 'react'
import {View, Text, FlatList} from 'react-native'
import UnitElement from './UnitElement'

export default class UnitList extends PureComponent {

    _keyExtractor = (item, index) => item.id;

    _renderItem = ({item, index}) => <UnitElement items={item}
                                                  isEven={index % 2 === 0}
                                                  onChangeUnitId={this.props.onChangeUnitId}
                                                  isSelected={item.id === this.props.selectedId}
    />

    render() {
        return (
            <FlatList
                style={{flex: 1}}
                data={this.props.items}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}


