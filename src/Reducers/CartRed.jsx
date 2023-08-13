
const initialState={
    cart:[],
    quantity:0,
    newamt:0,

};



const CartRed=(state=initialState,action)=>{
   
    switch(action.type){
    case"ADD_CART":
    // const data1=counter+1;
    // const data1=state.cart.filter((el)=>el._id !== action.payload)
     const newTotal=state.cart.forEach((product) => (product.proPrice += action.payload.proPrice));
        return {
            ...state,
            cart:[...state.cart,action.payload]
                 }

    case"CLR":
    return{...state,
        cart:[]
    }
  
    case "DELET_ITEM":
        const data=state.cart.filter((el)=>el._id !== action.payload)
        return{
          ...state,
          cart:data
        //   cart:state.cart.filter((elmn)=>elmn !== action.payload)

    }


    case 'increment':
        return {
            ...state,
            quantity: state.quantity + 1,
            // newamt:action.payload+action.payload
            }


    case 'decrement':
        return {
            ...state,
            quantity: state.quantity - 1,
            // newamt:state.count/action.payload
        }
      
    
    //  case 'decrement':
    //     return {
    //         ...state,
    //             inc: state.inc - 1,
    //             newamt:action.payload-action.payload
    //             }

  
        default: return state
        
    }
}

        
export default CartRed;