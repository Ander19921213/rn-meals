import { useContext } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'
import MealsList  from '../components/MealsList/MealsList';
import { useSelector } from 'react-redux';

export default function FavoritesScreen() {
    //const favorireMealsCtx = useContext(FavoritesContext)
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

    const favoritesMeals = MEALS.filter(meal => 
        favoriteMealsIds.includes(meal.id)
    );

    if (favoritesMeals.length === 0) {
        return (
            <View style={styles.root}>
                <Text style={styles.text}>No favorites yet. Start adding some!</Text>
            </View>
        )
    }

    return <MealsList items={favoritesMeals} />
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }

})