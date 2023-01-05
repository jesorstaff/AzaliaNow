import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: false,
  text: null,
};

export const addTaskSlice = createSlice({
  name: 'addTaskModal',
  initialState,
  reducers: {
    toggleModalAddTask: (state, actions) => {
      state.value = actions.payload;
    },
    addNewTaskText: (state, actions) => {
      state.text = actions.payload;
    },
  },
});

export const {toggleModalAddTask, addNewTaskText} = addTaskSlice.actions;

export const setToggleModalAddTask = value => dispatch => {
  dispatch(toggleModalAddTask(!value));
};

export const setAddNewTaskText = value => dispatch => {
  dispatch(addNewTaskText(text));
};

export default addTaskSlice.reducer;
