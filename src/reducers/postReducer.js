import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
        console.log('reducer dispatched');
        return {
            ...state, // spread operator ...
            items: action.payload

        }
        default:
        return state;
    }
}