import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
        console.log('reducer dispatched... inside switch-case FETCH_POSTS ');
        return {
            ...state, // spread operator ...
            items: action.payload
        };
        case NEW_POST: 
        console.log('reducer dispatched... inside switch-case  NEW_POST ');
        return {
            ...state, // spread operator ...
            item: action.payload
        };
        default:
        return state;
    }
}