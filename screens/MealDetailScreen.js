import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';  
import {  useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { addFavorite, removeFavorite } from '../store/redux/favorite';
// import { FavoritesContext } from '../store/context/favorites-context';

export default function MealDetailScreen({ route, navigation }) {
   // const favoriteMealsCtx = useContext(FavoritesContext)
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const mealIsFavorite = favoriteMealsIds.includes((mealId))

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            //favoriteMealsCtx.removeFavorite(mealId)
            dispatch(removeFavorite({ id: mealId }));
        } else {
            //favoriteMealsCtx.addFavorite(mealId)
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    color="white" 
                    onPress={changeFavoriteStatusHandler} />
            }
        })
    }, [changeFavoriteStatusHandler, navigation])

    return (
        <ScrollView style={styles.root}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOutterContainer}>
                <View style={styles.listContainer} >
                    <Subtitle>ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white',
    },
    listOutterContainer: {
        alignItems: 'center',
    },  
    listContainer: {
        width: '80%'
    }
})