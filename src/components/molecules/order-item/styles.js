import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/themes'

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    header: {

    },
    date: {
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
        color: colors.textColor
    },
    details: {

        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    total: {
        fontSize: 22,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})