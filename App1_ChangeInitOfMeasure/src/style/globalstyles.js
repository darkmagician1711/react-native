import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    header: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row"
    },
    headerBack : {
        flex: 1,
        alignItems: "flex-start"
    },
    headerTitle : {
        flex: 1,
        alignItems: "center"
    },
    headerNext : {
        flex: 1,
        alignItems: "flex-end"
    },
    content : {
        flex: 1,
        flexDirection :"row",
        backgroundColor: "rgba(120,84,164,1)"
    },
    unitDisplay: {
        backgroundColor: "rgba(83,58,113,1)",
    },
    textLarge : {
        fontSize: 24,
        color: "rgba(255,255,255,1)"
    },
    textNormal: {
        fontSize: 16,
        color: "rgba(255,255,255,1)"
    },
    textHighLight: {
        fontSize : 16,
        color: "#ffefbd"
    }
});

export default styles;