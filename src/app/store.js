import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import awardReducer from "../features/Database/database";
import userReducer from "../features/Users/userSlice";
import userSlice from '../features/Users/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // award: databaseReducer,
    user: userReducer
  },
});
