import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import MealDetails from '../MealDetails';

export default function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        })
    }

    return <View style={styles.container}>
        <Pressable 
        android_ripple={{ color: '#ccc' }}
        style={({pressed}) =>  pressed && styles.buttonPressed}
        onPress={selectMealItemHandler}
        >
            <View style={styles.innerContainer}>
                <View >
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <Text style={styles.text}> {title} </Text>
                </View>
                <MealDetails 
                    duration={duration} 
                    complexity={complexity} 
                    affordability={affordability}
                />
            </View>
        </Pressable>    
  
    </View>
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'  
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 8,
    },
    buttonPressed:{
        opacity: 0.5,
    },
})