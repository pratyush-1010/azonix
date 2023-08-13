
const initialState = {
    count:1,
    newamt:0,
}


const counterRe = (state = initialState, action)=>{
    switch(action.type){
        case 'increment':
            return {
                ...state,
                count: state.count + 1,
                // newamt:action.payload+action.payload
                }


        case 'decrement':
            return {
                ...state,
                count: state.count - 1,
                // newamt:state.count/action.payload
            }
        default: return state
    }
}

export default counterRe