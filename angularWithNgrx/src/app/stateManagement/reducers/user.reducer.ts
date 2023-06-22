import { User } from "../user";
import * as UserActions from './../actions/userActions';

const initialState: User = {
    name: 'u'
}

// Section 2
export function userReducer(state: User = initialState, action: UserActions.Actions) {
debugger;
    // Section 3
    switch(action.type) {
        
        case UserActions.SET_USER:
            return { ...state, name: action.payload.name };
        default:
            return state;
    }
}