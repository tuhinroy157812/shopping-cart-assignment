const defaultState={
    currentproducts:[]
}

function reducer(state=defaultState,action){
    switch(action.type){
        case "CART_ITEMS":
            return{
                ...state,
                currentproducts:action.payload
            }
            case "EMPTY_ITEM":
                state = defaultState
        default : return state;
    }
}

export default reducer;