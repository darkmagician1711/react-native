import React, {PureComponent} from 'react'
import {View, Button} from 'react-native'

import globalstyles from '../style/globalstyles.js'
import ContentCal from './../component/ContentCal.js'

import {connect} from 'react-redux'
import {categories} from './../data.json'

class ConvertScreen extends PureComponent {

    state = {
        items: categories[this.props.categoryId].items,
    };

    render() {
        return (
            <View style={globalstyles.container}>
                <Button title="Toggle Screen" onPress={this.props.toggleScreen}/>
                <View style={globalstyles.content}>
                    <ContentCal items={this.state.items}/>
                    <ContentCal items={this.state.items}/>
                </View>
            </View>
        )
    }
}

const mapAppStateToProps = state => ({
    categoryId: state.categories
})

export default connect(mapAppStateToProps)(ConvertScreen)


