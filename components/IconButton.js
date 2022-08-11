import { Ionicons} from '@expo/vector-icons';
import { Pressable,StyleSheet } from 'react-native'

export default function IconButton({onPress, color, icon}) {
    return (
    <Pressable 
        onPress={onPress} 
        style={({pressed}) => pressed && styles.pressed}
    >
        <Ionicons style={styles.icon}  name={icon} size={24} color={color} />
    </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    },
    icon: {
        marginRight: 10
    }
})