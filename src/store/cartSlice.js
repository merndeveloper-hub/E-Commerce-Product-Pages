const { createSlice } = require('@reduxjs/toolkit');

const initialState = []

//First we create the createSlice function and pass the name,initailValue,and actions
// Export actions and reducers function

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },

        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },

    },
})

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;