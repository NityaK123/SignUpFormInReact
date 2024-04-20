import {configureStore} from '@reduxjs/toolkit';
import dataReducer from '../Feature/slice';

export const store=configureStore({
    reducer:dataReducer,
})