import { configStore, configureStore } from '@reduxjs/toolkit';
import favoriteReduzer from './favorite';

export const store = configureStore({
    reducer: {
        favoriteMeals: favoriteReduzer
    }
})