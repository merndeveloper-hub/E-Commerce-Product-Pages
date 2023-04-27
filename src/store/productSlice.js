const { createSlice } = require('@reduxjs/toolkit');


export const STATUSES = Object.freeze({
    IDLE:"idle",
    ERROR:"error",
    LOADING:"loading",
})

//First we create the createSlice function and pass the name,initailValue,and actions
//Called the api in redux
// Export actions and reducers function

const productSlice = createSlice({
    name: 'product',
    initialState: {
         data:[],
         status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            // We never call the api in reducer because reducer work synchorous 
            // call the api in redux thunk 
            state.data = action.payload;
        },
        setStatus(state,action){

            state.status = action.payload
        }
    },
});

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;



// THUNK

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}