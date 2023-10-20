import { createSlice } from '@reduxjs/toolkit';
const initialState = '';
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter(state, action) {
            return (state = action.payload);
        },
    },
});
export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
//# sourceMappingURL=filterSlice.js.map