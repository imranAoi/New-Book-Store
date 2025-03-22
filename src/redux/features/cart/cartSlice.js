import {createSlice} from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
const initialState={
   cartItems:[],
};
const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addToCart:(state,action)=>{
            const existingItem=state.cartItems.find(item=>item._id===action.payload._id);
            if(!existingItem){
                state.cartItems.push(action.payload)
              Swal.fire({
                  icon: "success",
                  position: "top-end",
                  showConfirmButton: false,
                  title: "Your work has been saved",
                  timer: 1500
               });
            } else (
                Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
})
            )
        },  removeFromCart: (state, action) => {
            state.cartItems =  state.cartItems.filter(item => item._id !== action.payload._id)
        },
        clearCart: (state) => {
            state.cartItems = []
        }
    },
    
})
export const  {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
