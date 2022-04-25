import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes"
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
    },
    list: {
        flex: .9,
       marginVertical: 20,
    },
    footer: {
        flex: 1,
        flexGrow: 0.1,
        boderTopColor: colors.primaryColor,
        borderTopWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginHorizontal: 20,
    },
    total: {
        fontSize: 18,
        fontFamily: 'OpenSans-Regular',
        color: '#0a0a0a'
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 8,
        color: colors.primaryColor
    },

});