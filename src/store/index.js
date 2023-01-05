import {configureStore} from '@reduxjs/toolkit';
import addTaskSlice from './slice/addTaskSlice';

export const store = configureStore({
  reducer: {
    openModalAddTask: addTaskSlice,
  },
});
