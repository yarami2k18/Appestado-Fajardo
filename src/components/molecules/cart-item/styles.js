import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    header: {
        fontFamily: 'OpenSans-Bold',
    },
    name: {
        fontSize: 20,
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    queanty: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
    },
    price: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
    }

});