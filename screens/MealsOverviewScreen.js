import { StyleSheet, View, FlatList } from "react-native"
import MealItem from "../components/MealsList/MealItem";
import { useLayoutEffect } from 'react'

import { MEALS,CATEGORIES } from '../data/dummy-data';
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
       
       console.log(categoryTitle)
        navigation.setOptions({
            title: categoryTitle,
            headerBackTitleStyle: true
        })
    }, [catId, navigation])

    return <MealsList  items={displayMeals} />
}

