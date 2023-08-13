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
