import React,{useEffect} from "react"
export const  AddToCart=(item)=>{
    return{
        type:'ADD_CART',
        payload:item,
    }
}

export const Clrdata=()=>{
    return{
        type:'CLR'
    }
}
export const REMOVER=(_id)=>{
    return {
        type:"DELET_ITEM",
        payload:_id
    }
}

export const incNum=(count)=>{
    return{
        type:'increment',
        payload:count,
    }
}

export const decNum=(count)=>{
    return{
        type:'decrement',
        payload:count,

    }
}

// export const decNum=(proPrice)=>{
//     return{
//         type:'decrement',
//         payload:proPrice,

//     }
// }


