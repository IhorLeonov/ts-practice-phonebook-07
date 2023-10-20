import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<string>) {
      return (state = action.payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions;
