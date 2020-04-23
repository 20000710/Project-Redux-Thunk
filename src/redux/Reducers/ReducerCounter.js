import { ADDING, SUBTRACTING } from '../Actions/Counter';

const initState = {
    item: 0
}

const counter = (state = initState, action) => {
    switch (action.type) {
        case ADDING:
            return{
                ...state, 
                item: state.item + 1
            }
        
        case SUBTRACTING:
            return{
                ...state, 
                item: state.item - 1
            }
    
        default:
            return state;
    }
}

export default counter;