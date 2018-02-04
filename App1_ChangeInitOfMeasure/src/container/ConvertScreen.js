import React, {PureComponent} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

import globalstyles from '../style/globalstyles.js'
import ContentCal from './../component/ContentCal.js'

import {connect} from 'react-redux'
import {categories} from '../data.json'
import {changeIdInputAction, changeIdResultAction} from "../action/index";

class ConvertScreen extends PureComponent {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params ? navigation.state.params.title : "",
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate("CategoryScreen")}>
                <Text style={{color: "blue"}}>Category</Text>
            </TouchableOpacity>
        )
    })

    componentDidMount(){
        this.props.navigation.setParams({
            title: categories[this.props.categoryId].title
        })
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.categoryId !== this.props.categoryId){
            this.props.navigation.setParams({
                title: categories[nextProps.categoryId].title
            })
        }
    }

    render() {
        return (
            <View style={globalstyles.content}>
                <ContentCal items={categories[this.props.categoryId].items}
                            selectedId={this.props.idInput}
                            onChangeUnitId={this.props.changeIdInput}
                />
                <ContentCal items={categories[this.props.categoryId].items}
                            selectedId={this.props.idResult}
                            onChangeUnitId={this.props.changeIdResult}
                />
            </View>
        )
    }
}

const mapAppStateToProps = state => ({
    categoryId: state.categories,
    idInput: state.idInput,
    idResult: state.idResult
})

const mapDispatchToProps = dispatch => ({
    changeIdInput : newValue => dispatch(changeIdInputAction(newValue)),
    changeIdResult : newValue => dispatch(changeIdResultAction(newValue))
})

export default connect(mapAppStateToProps, mapDispatchToProps)(ConvertScreen)


