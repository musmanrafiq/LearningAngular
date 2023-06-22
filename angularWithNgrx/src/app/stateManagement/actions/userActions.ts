import { Action } from "@ngrx/store";
import { User } from "../user";

export const SET_USER = '[ USER ] Set';

export class SetUser implements Action {
    readonly type = SET_USER;
    constructor(public payload: User){};
}


export type Actions = SetUser | SetUser;