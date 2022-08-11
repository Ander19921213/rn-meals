import { View,StyleSheet, Text } from 'react-native'

export default function Subtitle({ children }) {
    return <View style={styles.subtitleContainer}>
        <Text style={styles.subTitle}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        marginHorizontal: 20,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    }
})