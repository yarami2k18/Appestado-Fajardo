import { stylesSheet } from "react-native";
import { colors } from "../../constants/themes"
export const styles = stylesSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    list: {
        flex: .8
    },
    footer: {
        flex: 2,
        boderTopColor: colors.primaryColor,
        borderTopWidth: 1,
        flexDirection: "row",
        alignItem: "center",
        justifyContent: "flex-end"
    },
    total: {
        fondSize: 18,
        fontFamily: 'OpenSans-Regular',
        padding: 10

    },
    totalPrice: {
        fondSize: 16,
        fontFamily: 'OpenSans-Bold',
        padding: 10

    },

});